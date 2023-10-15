'use client'
import React, {useRef}  from 'react'

export  function StartPulser() {
   const ref = useRef()
    return (
  <svg  height="300" width="600" xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60">

    <path  ref={ref} stroke="#00FF34" fill="none"strokeWidth ="1" strokeLinejoin="round"
          d="
            M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210" />            
</svg>
    )
}

export function Jugular() {
  const ref = useRef()
    return (
          <svg  height="300" width="600" xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60" xmlns:xlink="http://www.w3.org/1999/xlink">

    <path  ref={ref} stroke="#00FF34" fill="none"strokeWidth ="1" strokeLinejoin="round"
          d="
            M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210" /> 
     
                
</svg>
    )
}

export function Bleed() {
    const ref = useRef()

    return (
          <svg  height="300" width="600" xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60" >

    <path  ref={ref} stroke="#00FF34" fill="none"strokeWidth ="1" strokeLinejoin="round"
          d="
            M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210" /> 
                     
</svg>
    )
}

export function Flatline(){
    const ref = useRef()

    return (
     <svg  height="300" width="600" xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60" >

    <path  stroke="#00FF34" fill="none"strokeWidth ="1" strokeLinejoin="round"
          d="M0,90 L500,90            
            " 
          /> 
    <path  ref={ref} stroke="#00AEAA" fill="none"strokeWidth ="1" strokeLinejoin="round"
          d="M0,90 L500,90           
            " 
          />         
</svg>
    )

}


export function Longbeat() {
    const ref = useRef()

    return (
 <svg  height="300" width="600" xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60" >

    <path  stroke="#00AEAA" fill="none"strokeWidth ="1" strokeLinejoin="round"
          d="
            M0,90L150,90M150,90Q158,60 162,87T167,95 170,88 173,92t6,35 7,-60T190,127 197,107s2,-11 10,-10 1,1 8,-10T219,95c6,4 8,-6 10,-17s2,10 9,11h110
            " 
          /> 
    <path  ref={ref} stroke="#00AEAA" fill="none"strokeWidth ="1" strokeLinejoin="round"
          d="
            M0,90L150,90M150,90Q158,60 162,87T167,95 170,88 173,92t6,35 7,-60T190,127 197,107s2,-11 10,-10 1,1 8,-10T219,95c6,4 8,-6 10,-17s2,10 9,11h110
            " 
          /> 
 
        </svg>
    )

}