import React from 'react'
import './Button.css'

function Button(props) {
    return (
        <>
        <button className={props.index == 3 ? 'blue-act' : 'normal-act'}>{props.type}</button>        
        </>
    )
}

export default Button