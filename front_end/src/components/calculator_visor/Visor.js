import React from 'react'
import './Visor.css'

function Visor(props) {
    return (
        <>
        <div className='calculator-visor'>
            <p>{props.expression}</p>
        </div>
        </>
    )
}

export default Visor