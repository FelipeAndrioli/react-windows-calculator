import React from 'react'
import './OperatorButton.css'

function OperatorButton(props) {
    return (
        <>
        <button className='operator-button'>{props.operation}</button>
        </>
    )
}

export default OperatorButton