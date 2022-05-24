import React, { useState, useEffect } from 'react'


export function SixteenPin(props) {
    let eightPinElements = [0, 1, 2, 3, 4, 5, 6, 7].map(function (item, index) {


        return (
            < React.Fragment key={index.toString()} >
                <circle id={props.name + '-pin-' + index} className={`node pin-num-${item}`} cx={0} cy={index * 20} r={3} />
                <path className='pin' d={` M1.5 ${index * 20} H30 `} />
            </React.Fragment>
        )


    })


    let secondEightPins = [8, 9, 10, 11, 12, 13, 14, 15, 16].map(function (item, index) {


        return (
            < React.Fragment key={index.toString()} >
                <path className='pin' d={` M100 ${index * 20} H130 `} />

                <circle id={props.name + '-pin-' + index} className='node' cx={130} cy={index * 20} r={3} />
            </React.Fragment>
        )


    })


    return (

        <g className='SixteenPin IC component'>


            {eightPinElements}
            {secondEightPins}

            <rect x={30} y={-10} width={70} height={180} />

            <text x="35" y="100" className="component-text">{props.name}</text>




        </g>





    )
}