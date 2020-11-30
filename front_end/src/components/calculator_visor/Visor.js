import React, { Component } from 'react'
import './Visor.css'

class Visor extends Component {
    render() {
        return (
        <>
            <div className='visor'>
                <div className='entire-expression'>                    
                    <p>{this.props.expression}</p>
                </div>
                <div className='partial-expression'>
                    <p>{this.props.partial_expression}</p>
                </div>
            </div>
        </>
        )
    }
}

export default Visor