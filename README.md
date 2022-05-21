# Schematic Editor

A simple schematic editor based of SVG to draw circuit diagrams.

Each pin circle has a unique CSS ID generated using the `name` prop passed to the component and the pin name.

For example, A resistor component is used as `<Resistor name='R1' />` with `name` prop and in the component defition a unique ID for the pin circle is generated with combination of component name and pin name.

### `pinID= component name + pin name`

If the component name is `R1` and one of the pins name is `pin-1` then the generated ID of pin is `R1-pin-1`.

This wasy each pin has a unique ID associated with it. This ID is used to create a connection list that will be used draw connections between components.

```
       <g className='Resistor component'>
            <circle id={props.name + "-pin-1"} className='node pin-num-1' cx={0} cy={5} r={3} />
            <path className='pin' d='M0 5 H30' />
            <rect x={30} y={0} width={40} height={10} />
            <path className='pin' d='M70 5 H100' />
            <circle id={props.name + "-pin-2"} className='node pin-num-1' cx={100} cy={5} r={3} />
            <text x={40} y={25} className="component-text">{props.name}</text>
        </g>

```
