import React, { useState, useEffect, useRef } from 'react';
import Snap from 'snapsvg';
import { EightPin } from '../src/components/eightPin'
import { SixteenPin } from './components/SixteenPin';

import './style.css';

export default function App() {

  let ref= useRef(null)


  useEffect(function(){
var s= Snap(ref.current)

  })




  return (
    <svg ref={ref}  id="svg-container" width={1000} height={1000}>
      {/* {rectElements} */}

      <EightPin />
      <SixteenPin/>

    </svg>
  );
}
