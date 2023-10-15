'use client'
import React, {  useRef } from 'react'





function Content() {
  const ref = useRef()


  return (
    <div ref={ref} className="content">
      <section className="section-one" id="first">
        <h1>SECTION 1</h1>
      </section>
      <section className="section-two">
        <h1>SECTION 2</h1>
      </section>
      <section className="section-three">
        <h1>SECTION 3</h1>
      </section>
      <section className="section-four">
        <h1>SECTION 4</h1>
      </section>
    </div>
  )
}

export default Content
