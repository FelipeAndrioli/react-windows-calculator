import React, { Component } from 'react'
import Navbar from './header_buttons/Navbar'
import History from './header_buttons/History'
import Visor from './calculator_visor/Visor'
import Button from './buttons/Button'
import * as FiIcons from 'react-icons/fi'
import * as FaIcons from 'react-icons/fa'

import './Calculator.css'

const test = []

class Calculator extends Component {
    
    state = {
        expression : [],
        partial_expression: 0,
    }

    UpdateExpression = (newExpression) => {
        console.log('Received expression: ' + newExpression)
        if (typeof newExpression === 'number') {
            if (this.state.partial_expression == 0) {
                this.setState({ partial_expression: newExpression })
            } else {
                if (
                    this.state.expression[this.state.expression.length - 1] === '+' || 
                    this.state.expression[this.state.expression.length - 1] === '-' || 
                    this.state.expression[this.state.expression.length - 1] === '*' || 
                    this.state.expression[this.state.expression.length - 1] === '/' 
                ) {
                    this.setState({ partial_expression: newExpression })
                } else {
                    this.setState({ partial_expression: Number(this.state.partial_expression + '' + newExpression) })
                }
            }
        } else if (newExpression === 'full-delete') {
            this.setState({ 
                expression: [],
                partial_expression: 0,
            })
        } else if (newExpression === 'partial-delete') {
            this.setState({ partial_expression: 0 })
        } else if (newExpression === 'digit-delete') {
            this.setState({ 
                partial_expression: Number((this.state.partial_expression.toString()).slice(0, -1))
            })
        } else if (newExpression === 'signal-change') {
            this.setState({ partial_expression: (Number(this.state.partial_expression) * -1)})
        } else if (newExpression === 'dot') {
            if (!(this.state.partial_expression.toString().includes('.'))) {
                this.setState({ partial_expression: this.state.partial_expression + '.'})
            }
        } else {
            //operation
            //trigger
            console.log(this.state.expression)
            switch (newExpression) {
                case '+':
                    if (
                        //update signal
                        this.state.expression[this.state.expression.length - 1] === '-' ||
                        this.state.expression[this.state.expression.length - 1] === '/' ||
                        this.state.expression[this.state.expression.length - 1] === '*' 
                    ) {
                        this.state.expression.pop()
                        this.state.expression.push(newExpression)
                        console.log(this.state.expression)
                    } else {
                        //add partial expression and new signal to expression
                        this.state.expression.push(this.state.partial_expression)
                        this.state.expression.push(newExpression)
                        console.log(this.state.expression)
                    }
                    break;
                case '-':
                    if (
                        this.state.expression[this.state.expression.length - 1] === '/' ||
                        this.state.expression[this.state.expression.length - 1] === '*' ||
                        this.state.expression[this.state.expression.length - 1] === '+' 
                    ) {
                        this.state.expression.pop()
                        this.state.expression.push(newExpression)
                        console.log(this.state.expression)
                    } else {
                        this.state.expression.push(this.state.partial_expression)
                        this.state.expression.push(newExpression)
                        console.log(this.state.expression)
                    }
                    break;
                case 'X':
                    if (
                        this.state.expression[this.state.expression.length - 1] === '-' ||
                        this.state.expression[this.state.expression.length - 1] === '/' ||
                        this.state.expression[this.state.expression.length - 1] === '+' 
                    ) {
                        this.state.expression.pop()
                        this.state.expression.push('*')
                        console.log(this.state.expression)
                    } else {
                        this.state.expression.push(this.state.partial_expression)
                        this.state.expression.push('*')
                        console.log(this.state.expression)
                    }
                    break;
                case '/':
                    if (
                        this.state.expression[this.state.expression.length - 1] === '-' ||
                        this.state.expression[this.state.expression.length - 1] === '*' ||
                        this.state.expression[this.state.expression.length - 1] === '+' 
                    ) {
                        this.state.expression.pop()
                        this.state.expression.push(newExpression)
                        console.log(this.state.expression)
                    } else {
                        this.state.expression.push(this.state.partial_expression)
                        this.state.expression.push(newExpression)
                        console.log(this.state.expression)
                    }
                    break;
                case '=':
                    break;
            }
        }
    }

    render() {

        const button_array = [
                                ['CE', 'C', <FiIcons.FiDelete className='delete-icon'/>, <FaIcons.FaDivide className='divide-icon' />],
                                [7, 8, 9, 'X'],
                                [4, 5, 6, '-'],
                                [1, 2, 3, '+'],
                                ['+/-', 0, '.', '='],
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
                    <Visor expression={this.state.expression} partial_expression={this.state.partial_expression} />
                    <div className='calculator-body-down'>
                        {
                            button_array.map(row => {
                                return row.map((items, index) => {
                                    return (
                                        <Button callBack={this.UpdateExpression} index={index} type={items} />
                                    )
                                })
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default Calculator