import React from "react";
import styled from 'styled-components';

const Svg = styled.svg`
  stroke: green;
  stroke-width: 2;
  fill: transparent;
  position: absolute;
  pointer-events: none;
  width: 100%;
  height: 100%;
  z-index: 2;

  line {
    stroke-dasharray: 5;
    stroke: blue;
  }
`;

export function Selector({x, y, width, height}) {
    return (
        <Svg>
            <line x1="0" y1={y} x2={x} y2={y}/>
            <line x1={0} y1={y} x2={window.innerWidth} y2={y}/>
            <line x1={x} y1={0} x2={x} y2={window.innerHeight}/>
            <line x1={x + width} y1={0} x2={x + width} y2={window.innerHeight}/>
            <line x1={0} y1={y + height} x2={window.innerWidth} y2={y + height}/>
            <rect x={x} y={y} width={width} height={height}/>
        </Svg>);
}