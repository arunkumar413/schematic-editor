import React, { useState, useEffect, useRef } from 'react';
import Snap from 'snapsvg-cjs';
import { EightPin } from '../src/components/eightPin'
import { Resistor } from './components/Resistor';
import { SixteenPin } from './components/SixteenPin';

import './style.css';

export default function App() {

  let ref = useRef(null)


  useEffect(function () {
    var s = Snap(ref.current)
    let elements = s.selectAll('.component')
    elements.forEach(function (item, index) {
      item.drag();
    })



  })




  return (
    <svg ref={ref} id="svg-container" width={1000} height={1000}>
      {/* {rectElements} */}

      <EightPin name='8 pin IC' />
      <SixteenPin name='16 pin IC' />
      <Resistor name='R1'/>

    </svg>
  );
}
