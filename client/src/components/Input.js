import React, { Component } from 'react';

class Input extends Component {
    constructor(props){
        super(props);

        this.state = {};
    }


    render() {
        return (
            <input type={'text'} value={this.props.inputValue || ''} onChange={this.props.onUpdateState}/>

        );
    };
}

export default Input;
