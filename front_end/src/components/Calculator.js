import React from 'react'
import Navbar from './Navbar'
import History from './History'
import Visor from './Visor'
import OperatorButton from './OperatorButton'

import './Calculator.css'

function Calculator() {
    const operations = ['/', 'X', '-', '+', '=']
    return (
        <>
            <div className='CalculatorBody'>
                <header className='CalculatorHeader'>Calculator</header>
                <div className='CalculatorSubHeader'>
                    <Navbar />
                    <div className='title-container'>
                        <p>Standard</p>
                    </div>
                    <History />
                </div>
                <Visor />
                <div className='calculator-body-down'>
                    <div className='operation-button-container'>
                        {operations.map((item, index) => {
                            return (
                                <OperatorButton operation={item} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator