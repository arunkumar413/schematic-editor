import react, { useState, useEffect } from 'react'


export function SixteenPin() {

    return (

        <g className='SixteenPin'>

            <circle className='node' cx={0} cy={0} r={3} />
            <path className='pin' d="M1.5 0 H30" />
            <circle className='node' cx={0} cy={20} r={3} />



        </g>





    )
}