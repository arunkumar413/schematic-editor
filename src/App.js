import React, { useState, useEffect, useRef } from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Snap from 'snapsvg-cjs';
import { EightPin } from '../src/components/eightPin'
import { Resistor } from './components/Resistor';
import { SixteenPin } from './components/SixteenPin';

import './style.css';
import { createGrid, drawConnections, findPath, onEnd, onMove, onStart } from './utility';


export default function App() {

  const [connnections, setConnections] = useState([]);
  const [clickcount, setClickcount] = useState(0)
  let ref = useRef(null)


  var count = 0;
  var from = '';
  var to = '';


  useEffect(function () {
    createGrid();
    var s = Snap(ref.current)
    let elements = s.selectAll('.component')
    elements.forEach(function (item, index) {
      item.drag(onMove, onStart, onEnd);
    })

    s.selectAll('.node').forEach(function (item, index) {


      item.click(function (e) {
        ++count

        if (count === 1) {

          from = item.attr('id')

        }

        else if (count === 2) {

          to = item.attr('id')
          setConnections(function (prevState) {
            return [...prevState, { from: from, to: to }]
          })
          count = 0;
          drawConnections(s, { from: from, to: to });

        }




      })

    })


  })


  // function drawConnections(s, connection) {

  //   let fromParentX = s.select('#' + connection.from).parent().transform().localMatrix.e
  //   let fromParentY = s.select('#' + connection.from).parent().transform().localMatrix.f


  //   let toParentX = s.select('#' + connection.to).parent().transform().localMatrix.e
  //   let toParentY = s.select('#' + connection.to).parent().transform().localMatrix.f


  //   let x1 = s.select('#' + connection.from).attr('x') + fromParentX
  //   let y1 = s.select('#' + connection.from).attr('y') + fromParentY

  //   let x2 = s.select('#' + connection.to).attr('x') + toParentX
  //   let y2 = s.select('#' + connection.to).attr('y') + toParentY

  //   // let x1 = 300  for testing
  //   // let y1 = 123
  //   // let x2 = 430
  //   // let y2 = 460




  //   // s.text(x1, y1, `${x1},${y1}`)
  //   // s.text(x2, y2, `${x2},${y2}`)

  //   // var path = s.path(`M${x1} ${y1} L${bendPointX} ${bendPointY} L${x2} ${y2}`)

  //   findPath(x1, y1, x2, y2)

  //   path.attr({
  //     fill: 'none',
  //     stroke: '#000',
  //     strokeWidth: 2,
  //     class: 'connection'
  //   })
  // }



  return (
    <RecoilRoot>

      <svg ref={ref} id="svg-container" width={1000} height={1000}>
        {/* {rectElements} */}

        <EightPin name='IC' />
        <SixteenPin name='IC2' />
        <Resistor name='R1' />
        <Resistor name='R2' />


      </svg>
    </RecoilRoot >
  );
}
