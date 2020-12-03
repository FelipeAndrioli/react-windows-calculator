import React, { Component } from 'react'
import './HistoryBar.css'

export class HistoryBar extends Component {
    render() {
        return (
            <div>
                <nav className={this.props.bottombar ? 'nav-bottom active' : 'nav-bottom'}>
                    <ul>
                        <li>1 + 1</li>
                    </ul>
                </nav>    
            </div>
        )
    }
}

export default HistoryBar
