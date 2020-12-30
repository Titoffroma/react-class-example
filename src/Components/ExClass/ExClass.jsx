import React, { Component } from 'react';
import styled from 'styled-components';
import MainDiv from './MainDiv';
import Button from './Button';
import Output from './Output';

const OtherButton = styled(Button)`
border: 4px solid blue;
color: blue;
margin-right: 0;
margin-left: 10px;
`

export default class MainComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Nothing yet changed',
            color: 'rgb(0, 0, 0)'
        };
        this.changeOutput = this.changeOutput.bind(this);
        this.message = '';
        this.count = 0;
        this.check = console.log('constructor');
    }

    componentDidMount() {
        this.message = 'mounted';
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        this.count++;
        this.message = `updated ${this.count} time${this.count === 1 ? '' : 's'}`;
        console.log('componentDidUpdate');
    }

    // componentWillUnmount() {
    //     document.querySelector('#some-id').removeEventListener('click', this.changeOutput, { once: true });
    // }

    // setListener() {
    //     document.querySelector('#some-id').addEventListener('click', this.changeOutput, { once: true });
    // }

    changeOutput(event) {
        this.setState({
            text: getComputedStyle(event.target).borderColor,
            color: getComputedStyle(event.target).color
        });
    }
    
    render() {
        return (<MainDiv id="some-id" onClick={this.changeOutput}>
            <Button>Press Me!</Button>
            <Output color={this.state.color} text={this.state.text}/>
            <OtherButton>Now Press Me!</OtherButton>
            <br/>
            <Output color={this.state.color} message={this.message} style={{width: '100%'}}/>
            </MainDiv>)
    }
}




