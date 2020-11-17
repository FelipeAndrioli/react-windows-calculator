import React from 'react'
import Navbar from './header_buttons/Navbar'
import History from './header_buttons/History'
import Visor from './Visor'
import Button from './buttons/Button'
import * as FiIcons from 'react-icons/fi'
import * as FaIcons from 'react-icons/fa'

import './Calculator.css'

function Calculator() {
    const button_array = [
                            ['CE', 'C', <FiIcons.FiDelete className='delete-icon'/>, <FaIcons.FaDivide className='divide-icon' />],
                            ['7', '8', '9', 'X'],
                            ['4', '5', '6', '-'],
                            ['1', '2', '3', '+'],
                            ['+/-', '0', '.', '='],
                        ]
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
                    {
                        button_array.map(row => {
                            return row.map(items => {
                                return (
                                    <Button type={items} />
                                )
                            })
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Calculator