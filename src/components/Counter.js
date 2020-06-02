import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { counter: props.counter };
    }

    render()
    {
        return (
            <>
                {this.state.counter}
            </>
        );
    }
}

Counter.propTypes =
{
    counter: PropTypes.number.isRequired
};

export default Counter;