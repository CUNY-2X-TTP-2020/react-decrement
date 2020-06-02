import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Decrement extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { number: props.start };
    }

    render()
    {
        return (
            <>
                
            </>
        )
    }
}

Decrement.propTypes = 
{
    start: PropTypes.number.isRequired
}

export default Decrement;