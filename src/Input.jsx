import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
    static propTypes = {
        /** onChange handler */
        onChange: PropTypes.func.isRequired,
        /** background color */
        backgroundColor: PropTypes.string,
    };

    static defaultProps = {
        backgroundColor: 'none',
    };

    state = {
        value: '',
    };

    render() {
        const { backgroundColor, ...restProps } = this.props;
        return (
            <input type="text" value={this.state.value} onChange={this.handleChange} style={{ backgroundColor }} {...restProps} />
        );
    }

    handleChange = e => {
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(e);
        }
        this.setState({ value: e.target.value })
    }
}

export default Input;