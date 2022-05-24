import react, { useState, useEffect } from "react";

export function Resistor(props) {
  return (
    <g className="Resistor component">
      <circle
        id={props.name + "-pin-1"}
        className="node pin-num-1"
        cx={0}
        cy={5}
        r={3}
      />
      <path className="pin" d="M0 5 H30" />
      <rect x={30} y={0} width={40} height={10} />
      <path className="pin" d="M70 5 H100" />
      <circle
        id={props.name + "-pin-2"}
        className="node pin-num-1"
        cx={100}
        cy={5}
        r={3}
      />
      <text x={40} y={25} className="component-text">
        {props.name}
      </text>
    </g>
  );
}
