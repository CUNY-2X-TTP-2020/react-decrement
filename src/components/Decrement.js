import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Decrement extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            counter: props.start !== undefined? props.start : 10,
            amount: props.amount !== undefined ? props.amount : 1
        };
    }

    handleDecrement = (state) =>
    {
        if(state.counter - state.amount < 0) return alert("Cannot be less than zero!");

        this.setState({ counter: state.counter - state.amount });
    };

    render()
    {
        return (
            <>
                {this.state.counter}
                <button onClick={() => this.handleDecrement(this.state)}>Decrement {this.state.amount}</button>
            </>
        );
    }
}

Decrement.propTypes = 
{
    start: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired
};