'use client'
import React from "react";

export default function ScrollingBody({ data}) {
  return (
    <div className="w-full h-[200vh]">
      <section className="w-full h-[200vh] bg-cover bg-[center_center]">
        <img alt="Cool Effect" className="block w-full h-full max-w-full object-cover object-[center_center] scale-x-[calc(1_/_var(--scale] scale-y-[calc(1_/_var(--scale]" src={data.url} />
      </section>
    </div>
  );
}

export const Scrolling = ({data}) => {
  return (
    <section data-scroll className="w-full h-[200vh] bg-cover bg-[center_center]">
      <figure className="w-full h-screen m-0 p-0 left-0 top-0 sticky block overflow-hidden scale-x-[var(--scale] scale-y-[var(--scale] m-0 left-0 top-0">
        <img alt="Cool Effect" className="block w-full h-full max-w-full object-cover object-[center_center] scale-x-[calc(1_/_var(--scale] scale-y-[calc(1_/_var(--scale]" src={data.url} />
      </figure>
      <div className="absolute w-full h-full max-w-[35em] grid grid-rows-[1fr_1fr] text-[white] text-[2.5vmin] p-[2em] left-0 top-0 opacity-100 ">
        <header className="row-[1_/_2] flex flex-col justify-end">
          <div className="text-[1.25em] font-semibold mb-[0.5em]">{data.subheader}</div>
          <h2 className="text-[2.75em] m-0">{data.header}</h2>
        </header>
        <p className="row-[2_/_3] leading-normal">
         {data.txt}
        </p>
      </div>
    </section>
  );
};