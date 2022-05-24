import React, { useState, useEffect, useRef } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Snap from "snapsvg-cjs";
import { EightPin } from "../src/components/eightPin";
import { Resistor } from "./components/Resistor";
import { SixteenPin } from "./components/SixteenPin";

import "./style.css";
import {
  createGrid,
  drawConnections,
  findPath,
  onEnd,
  onMove,
  onStart,
} from "./utility";

export default function App() {
  const [connnections, setConnections] = useState([]);
  const [clickcount, setClickcount] = useState(0);
  let ref = useRef(null);

  var count = 0;
  var from = "";
  var to = "";

  useEffect(function () {
    createGrid();
    var s = Snap(ref.current);
    let elements = s.selectAll(".component");
    elements.forEach(function (item, index) {
      item.drag(onMove, onStart, onEnd);
    });

    s.selectAll(".node").forEach(function (item, index) {
      item.click(function (e) {
        ++count;

        if (count === 1) {
          from = item.attr("id");
        } else if (count === 2) {
          to = item.attr("id");
          setConnections(function (prevState) {
            return [...prevState, { from: from, to: to }];
          });
          count = 0;
          drawConnections(s, { from: from, to: to });
        }
      });
    });
  });

  return (
    <RecoilRoot>
      <svg ref={ref} id="svg-container" width={1000} height={1000}>
        {/* {rectElements} */}

        <EightPin name="IC" />
        <SixteenPin name="IC2" />
        <Resistor name="R1" />
        <Resistor name="R2" />
      </svg>
    </RecoilRoot>
  );
}
