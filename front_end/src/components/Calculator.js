import React, { Component } from 'react'
import Navbar from './header_buttons/Navbar'
import History from './header_buttons/History'
import Visor from './calculator_visor/Visor'
import Button from './buttons/Button'
import * as FiIcons from 'react-icons/fi'
import * as FaIcons from 'react-icons/fa'

import axios from 'axios'

import './Calculator.css'

class Calculator extends Component {
    
    state = {
        expression : [],
        partial_expression: 0,
        partial_operation: '',
    }

    GetResult = async (left, op, right) => {
        await axios.get('http://localhost:8080/api/arithmeticoperation', {
            params: {
                leftN: left,
                arithmeticOperation: op,
                rightN: right
            }
        })
        .then(response => {
            this.setState({ 
                expression: [],
                partial_expression: Number(response.data)
            })
        })
        .catch(function(error) {
            console.log(error)
        })
    }

    Placeholder = (expression) => {
        console.log("Placeholder function: " + expression)
        let temp = 21
        return temp
    }

    UpdateExpression = (newExpression) => {
        console.log('Received expression: ' + newExpression)
        if (typeof newExpression === 'number') {
            //if the received is a number
            if (this.state.partial_expression === 0) {
                //if there is no number before the new one
                this.setState({ partial_expression: newExpression })
            } else {
                //if the new number is not the first one
                if (                    
                    //if the last thing digited was a signal
                    this.state.expression[this.state.expression.length - 1] === '+' || 
                    this.state.expression[this.state.expression.length - 1] === '-' || 
                    this.state.expression[this.state.expression.length - 1] === '*' || 
                    this.state.expression[this.state.expression.length - 1] === '/' 
                ) {
                    //add directly to the expression
                    this.setState({ partial_expression: newExpression })
                } else {
                    //concat numbers to create a new one
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
            //if the new expression is a signal
            //need to add the partial expression to the expression and the new signal too

            console.log(this.state.expression)
            switch (newExpression) {
                case '+':
                    if (
                        this.state.expression[this.state.expression.length - 1] === '-' ||
                        this.state.expression[this.state.expression.length - 1] === '/' ||
                        this.state.expression[this.state.expression.length - 1] === '*'
                    ) {
                        this.state.expression.pop()
                        this.state.expression.push(newExpression)
                    } else {
                        this.state.expression.push(this.state.partial_expression, newExpression)
                        this.setState ({ partial_expression: 0 })
                    }                              
                    break;
                case '-':
                    if (
                        this.state.expression[this.state.expression.length - 1] === '+' ||
                        this.state.expression[this.state.expression.length - 1] === '/' ||
                        this.state.expression[this.state.expression.length - 1] === '*'
                    ) {
                        this.state.expression.pop()
                        this.state.expression.push(newExpression)
                    } else {
                        this.state.expression.push(this.state.partial_expression, newExpression)
                        this.setState ({ partial_expression: 0 })
                    }                  
                    break;
                case '*':
                    if (
                        this.state.expression[this.state.expression.length - 1] === '-' ||
                        this.state.expression[this.state.expression.length - 1] === '/' ||
                        this.state.expression[this.state.expression.length - 1] === '+'
                    ) {
                        this.state.expression.pop()
                        this.state.expression.push(newExpression)
                    } else {
                        this.state.expression.push(this.state.partial_expression, newExpression)
                        this.setState ({ partial_expression: 0 })
                    }                  
                    break;
                case '/':
                    if (
                        this.state.expression[this.state.expression.length - 1] === '-' ||
                        this.state.expression[this.state.expression.length - 1] === '+' ||
                        this.state.expression[this.state.expression.length - 1] === '*'
                    ) {
                        this.state.expression.pop()
                        this.state.expression.push(newExpression)
                    } else {
                        this.state.expression.push(this.state.partial_expression, newExpression)
                        this.setState ({ partial_expression: 0 })
                    }                    
                    break;
                case '=':
                    if (this.state.partial_expression !== 0 && typeof this.state.expression[this.state.expression.length - 1] === 'string') {
                        this.state.expression.push(this.state.partial_expression)
                        this.setState({ partial_expression: 0 })
                        //calls api
                        console.log("Left: " + this.state.expression[0])
                        console.log("Operation: " + this.state.expression[1])
                        console.log("Right: " + this.state.expression[2])

                        this.GetResult(this.state.expression[0], this.state.expression[1], this.state.expression[2])
                    } else {
                        //calls api
                        console.log("Left: " + this.state.expression[0])
                        console.log("Operation: " + this.state.expression[1])
                        console.log("Right: " + this.state.expression[2])
                        
                        this.GetResult(this.state.expression[0], this.state.expression[1], this.state.expression[2])
                    }
                    break;
                default:
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
                                        <Button callBack={this.UpdateExpression} index={index} type={items} key={index} />
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