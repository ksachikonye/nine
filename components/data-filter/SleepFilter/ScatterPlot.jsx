'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { scaleLinear, extent } from 'd3';

import { useData } from './useData';
import { marks } from './marks';
import { Dropdown } from './Dropdown';
import { axis } from './axis';

// Variables
const width = 960;
const height = window.innerHeight;
const margin = {
  top: 20,
  right: 50,
  bottom: 130,
  left: 100,
};
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;
const xAxisLabelOffset = 60;
const yAxisLabelOffset = 70;
const circleRadius = 8;

// Data attributes objects

const attributes = [
    { value: 'date', label: 'Date' },
    { value: 'duration', label: 'Duration' },
    { value: 'awake', label: 'Awake' },
    { value: 'rem', label: 'REM' },
    { value: 'deep', label: 'Deep' },
    { value: 'light', label: 'Light' },
    { value: 'rmssd', label: 'RMSSD' },
    { value: 'breath_average', label: 'Breathing Rate' },
    { value: 'temperature_delta', label: 'Temperature Delta' },
    { value: 'restless', label: 'Restlessness' },
    { value: 'onset_latency', label: 'Latency' },
    { value: 'hr_lowest', label: 'Lowest HeartRate' },
  ];

// Get label from attributes
const getLabel = (value) => {
  for (let i = 0; i < attributes.length; i++) {
    if (attributes[i].value === value) {
      return attributes[i].label;
    }
  }
};

export const ScatterPlot = () => {
    const content = useRef()
    const wrapper = useRef()
  // Refs for selection/transition
  const containerRef = useRef(null);
  const axisBottomRef = useRef(null);
  const axisLeftRef = useRef(null);
  const svgRef = useRef();
  const chartWrapper = useRef();
  const step1Ref = useRef();
  const step2Ref = useRef();
  const step3Ref = useRef();
  const step4Ref = useRef();
  const stepRef = useRef();

  // Fetch data
  const data = useData();
  
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

  useEffect(() => {
      const lenis = new Lenis({
        wrapper: wrapper.current,
        content: content.current,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        direction: 'vertical', // vertical, horizontal
        gestureDirection: 'vertical', // vertical, horizontal, both
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      })
  
      lenis.on('scroll', ({ scroll, progress }) => {
        state.top = scroll
        state.progress = progress
      })
      const effectSub = addEffect((time) => lenis.raf(time))
      return () => {
        effectSub()
        lenis.destroy()
      }
    }, [])

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            ScrollSmoother.create({
              smooth: 3.6, // seconds it takes to "catch up" to native scroll position
              effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
              normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
              ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
              preventDefault: true
            
            });

            gsap.utils.toArray(stepRef.current).forEach(step => {
                ScrollTrigger.create({
                  trigger: step,
                  start: 'top 80%',
                  end: 'center top',
                  toggleClass: 'active',
                  markers: true,
                  id: 'toggle-active-class'
                });
              });
                            // x attribute
            const step1XAttribute = 'Date';
            const [xAttribute, setXAttribute] = useState(step1XAttribute);
            const xValue = useCallback((d) => d[xAttribute], [xAttribute]);
            const xAxisLabel = getLabel(xAttribute);
            // y attribute
            const step1YAttribute = 'duration';
            const [yAttribute, setYAttribute] = useState(step1YAttribute);
            const yValue = useCallback((d) => d[yAttribute], [yAttribute]);
            const yAxisLabel = getLabel(yAttribute);

            // Scales
            const xScale = scaleLinear()
                .domain(extent(data, xValue))
                .range([0, innerWidth])
                .nice();
            const yScale = scaleLinear()
                .domain(extent(data, yValue))
                .range([innerHeight, 0])
                .nice();

              gsap.to(marks, {
                scrollTrigger: {
                  trigger: step1Ref.current,
                  start: 'top center',
                  toggleActions: 'play none none reverse',
                  markers: true,
                  id: 'first-box'
                },
                attr: {yValue},
                duration: 0.5,
                ease: 'power3.out'
              });

              draw();

            
              //the animation triggered by the second text box
              //shuffles the X position of the points to a random value
              gsap.to(marks, {
                scrollTrigger: {
                  trigger: step2Ref.current,
                  start: 'top center',
                  toggleActions: 'play none none reverse',
                  markers: true,
                  id: 'second-box'
                },
                attr: {cx: () => Math.random() * svgWidth},
                duration: 0.5,
                ease: 'power3.inOut'
              });
            
              //the animation triggered by the third text box
              //this just sets up the scroll trigger, but the animation
              //is done using our D3 functions, passed as callbacks to onEnter and onLeaveBack
              ScrollTrigger.create({
                trigger: step3Ref.current,
                start: 'top center',
                onEnter: circlesToTimeline,
                onLeaveBack: circlesToRandom,
                markers: true,
                id: 'third-box'
              });
            
              //This pins the SVG chart wrapper when it hits the center of the viewport
              //and releases the pin when the final textbox meets the bottom of the chart
              //we use a function to define the end point to line up the bottom of the
              //text box with the bottom of the chart
              ScrollTrigger.create({
                trigger: chartWrapper.current,
                endTrigger: step4Ref.current,
                start: 'center center',
                end: () => {
                  const height = window.innerHeight;
                  const chartHeight = chartWrapper.current
                    .offsetHeight;
                  return `bottom ${chartHeight + (height - chartHeight) / 2}px`;
                },
                pin: true,
                pinSpacing: false,
                markers: true,
                id: 'chart-pin'
              });
            



            
    
            }, wrapper)
            return () => ctx.revert()
    
        },[])

        // x attribute
        const initialXAttribute = 'Date';
        const [xAttribute, setXAttribute] = useState(initialXAttribute);
        const xValue = useCallback((d) => d[xAttribute], [xAttribute]);
        const xAxisLabel = getLabel(xAttribute);
        // y attribute
        const initialYAttribute = 'duration';
        const [yAttribute, setYAttribute] = useState(initialYAttribute);
        const yValue = useCallback((d) => d[yAttribute], [yAttribute]);
        const yAxisLabel = getLabel(yAttribute);

        // Scales
        const xScale = scaleLinear()
            .domain(extent(data, xValue))
            .range([0, innerWidth])
            .nice();
        const yScale = scaleLinear()
            .domain(extent(data, yValue))
            .range([innerHeight, 0])
            .nice();



  // Draw function uses d3 to select all circles and axes and insert the data
  const draw = useCallback(() => {
    // Bottom axis
    axis({
      ref: axisBottomRef.current,
      orientation: 'bottom',
      scale: xScale,
      tickSize: innerHeight
    });
    // Left axis
    axis({
      ref: axisLeftRef.current,
      orientation: 'left',
      scale: yScale,
      tickSize: innerWidth
    });
    // Marks
    marks({
      ref: containerRef.current,
      data,
      circleRadius,
      yScale,
      xScale,
      yValue,
      xValue
    });
  }, [data, xValue, xScale, yValue, yScale]);

  // Draw the chart if there is data fetched
  useEffect(() => {

 
    if (data) draw();
  }, [draw, data]);

  // If there is no data display loading message
  if (!data) return <pre>Loading...</pre>;

  return (
    <div className="app">
      <div className="dropdown-container">
        <Dropdown
          id="y-select"
          options={attributes}
          selectedValue={yAttribute}
          onSelectedValueChange={setYAttribute}
        />
        <span className="divider">vs.</span>
        <Dropdown
          id="x-select"
          options={attributes}
          selectedValue={xAttribute}
          onSelectedValueChange={setXAttribute}
        />
      </div>
      <svg width={width} height={height}>
        <g ref={containerRef} transform={`translate(${margin.left},${margin.top})`}>
          <g ref={axisBottomRef} className="axis" transform={`translate(0, ${innerHeight})`}>
            <text
              className="label"
              x={innerWidth / 2}
              y={xAxisLabelOffset}
              textAnchor="middle"
            >
              {xAxisLabel}
            </text>
          </g>
          <g ref={axisLeftRef} className="axis">
            <text
              className="label"
              textAnchor="middle"
              transform={`translate(${-yAxisLabelOffset},${
                innerHeight / 2
              }) rotate(-90)`}
            >
              {yAxisLabel}
            </text>
          </g>
          {data.map((d, i) => (
            <circle key={i + d.name} />
          ))}
        </g>
      </svg>
    </div>
  );
};
