import React, { useState, useEffect, useRef } from 'react';
import Snap from 'snapsvg';
import { ReactComponent as EightPin } from './src/components/eightPin.svg';

import './style.css';

export default function App() {
  const inputEl = useRef(null);

  const [elements, setElements] = useState({
    nodes: [
      {
        name: 'a',
        x: 100,
        y: 100,
        active: false,
        xOffset: 0,
        yOffset: 0,
        pins: 8,
        type: 'ic',
      },

      {
        name: 'b',
        x: 100,
        y: 100,
        active: false,
        xOffset: 0,
        yOffset: 0,
        pins: 4,
        type: 'ic',
      },

      {
        name: 'c',
        x: 100,
        y: 100,
        active: false,
        xOffset: 0,
        yOffset: 0,
        pins: 16,
        type: 'ic',
      },
      {
        name: 'R1',
        x: 100,
        y: 100,
        active: false,
        xOffset: 0,
        yOffset: 0,
        pins: 2,
        type: 'resistor',
      },
    ],
    edges: [
      {
        data: { id: 'ab', source: 'a', target: 'b' },
      },
    ],
  });
  var move = function (dx, dy) {
    this.attr({
      transform:
        this.data('origTransform') +
        (this.data('origTransform') ? 'T' : 't') +
        [dx, dy],
    });
  };

  var start = function () {
    this.data('origTransform', this.transform().local);
  };
  var stop = function () {
    console.log('finished dragging');
  };

  function draw8pins(s, index) {
    let group = s.g();
    s.circle(0, index * 20 + 5, 10)
      .drag(move, start, stop)
      .attr({ fill: 'yellow', stroke: 'blue' })
      .addClass(index.toString() + '-pin');
    group.add(circle).drag(move, start, stop);
  }

  function draw16pins(s, itemIndex) {
    let group = s.g();

    [...Array(8).keys()].map(function (item, index) {
      let circle = s
        .circle(0, index * 20 + 5, 3)
        .attr({ fill: 'blue' })
        .addClass(index.toString() + '-pin');
      group.add(circle).drag(move, start, stop);
    });

    [...Array(8).keys()].map(function (item, index) {
      let circle = s
        .circle(100, index * 20 + 5, 3)
        .attr({ fill: 'blue', stroke: 'blue' })
        .addClass(index.toString() + '-pin');
      let pin = s.path(`M 100 ${index * 20 + 5} H 200`);
      pin.attr({ stroke: 'balck', strokeWidth: 1 });

      group.add(pin);
      group.add(circle).drag(move, start, stop);
    });
    let rect = s.rect(3, -15, 95, 180);
    rect.attr({ stroke: 'blue' });
    group.add(rect).attr({ fill: 'yellow' });
  }

  function drawResistor(s, itemIndex) {
    let group = s.g();

    [...Array(2).keys()].forEach(function (item, index) {
      let circle = s
        .circle(index * 100, 0, 3)
        .attr({ fill: 'blue' })
        .addClass(index.toString() + '-pin');

      let pin = s.path(
        `M ${index * 65} 0 H ${index === 1 ? index * 65 + 20 + 20 : 20}`
      );

      pin.attr({ stroke: 'black', strokeWidth: 1 });

      group.add(pin);

      group.add(circle);
    });

    let rect = s.rect(20, -7, 60, 18);
    rect.attr({ stroke: 'blue', fill: 'yellow' });
    group.add(rect);
    group.drag();
  }

  useEffect(function () {
    var s = Snap('#' + inputEl.current.id);
    let eightPinCom = Snap.parse(EightPin);
    // s.add(eightPinCom);
    elements.nodes.forEach(function (item, index) {
      let group = s.g();

      if (item.pins === 8) {
        [...Array(4).keys()].map(function (item, index) {
          let circle = s
            .circle(0, index * 20 + 5, 3)
            .attr({ fill: 'blue', stroke: 'blue' })
            .addClass(index.toString() + '-pin');
          group.add(circle).drag(move, start, stop);
        });

        [...Array(4).keys()].map(function (item, index) {
          let circle = s
            .circle(50, index * 20 + 5, 3)
            .attr({ fill: 'blue', stroke: 'blue' })
            .addClass(index.toString() + '-pin');
          group.add(circle).drag(move, start, stop);
        });

        let r = s.rect(0, 0, 50, 85).attr({ fill: 'yellow' });
        group.add(r);

        // draw8pins(s, index);
      } else if (item.pins === 4) {
        [...Array(4).keys()].map(function (item, index) {
          let circle = s
            .circle(20, index * 20 + 5, 3)
            .attr({ fill: 'blue', stroke: 'blue' })
            .addClass(index.toString() + '-pin');
          group.add(circle).drag(move, start, stop);
        });
      } else if (item.pins === 16) {
        draw16pins(s, index);
      } else if (item.type === 'resistor') {
        drawResistor(s, index);
      }
    });
  }, []);

  return (
    <svg ref={inputEl} id="svg-container" width={1000} height={1000}>
      {/* {rectElements} */}
      {EightPin}
    </svg>
  );
}
