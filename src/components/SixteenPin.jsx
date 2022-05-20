import react, { useState, useEffect } from 'react'


export function SixteenPin(props) {




    let eightPinElements = [...new Array(8).keys()].map(function (item, index) {


        return (
            <>
                <circle  className={`node pin-num-${index}`} cx={0} cy={index * 20} r={3} />
                <path className='pin' d={` M1.5 ${index * 20} H30 `} />
            </>
        )


    })


    let secondEightPins = [...new Array(8).keys()].map(function (item, index) {


        return (
            <>
                <path className='pin' d={` M100 ${index * 20} H130 `} />

                <circle className='node' cx={130} cy={index * 20} r={3} />
            </>
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