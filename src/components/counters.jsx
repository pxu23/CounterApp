import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {
    render() {
        console.log('Counters rendered')

        const {onReset, counter, onDelete, onIncrement} = this.props;
        return (
            <div>
                <button class = "btn btn-primary btn-sm m-2"
                    onClick = {onReset}> Reset
                </button>

                {this.props.counter.map(counter => (<Counter 
                    key = {counter.id}
                    id = {counter.id}
                    onIncrement = {onIncrement}
                    onDelete = {onDelete} 
                    value = {counter.value} 
                    counter = {counter}
                />))}
            </div>
        )
    }
}

export default Counters
