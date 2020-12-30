import React, { Component } from 'react';
import ReactDOM from "react-dom";
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
        this.message = 'mounted';
        this.count = 1;
        this.check = console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    static getDerivedStateFromProps(props, state) {
        const result = {props, state};
        console.log('getDerivedStateFromProps', result.state.state);
        return result;
    }

    shouldComponentUpdate(nextProps, nextState) {
        const result = {nextProps, nextState};
        console.log('shouldComponentUpdate', result);
        // this.count++;
        this.message = `updated ${this.count} time${this.count === 1 ? '' : 's'}`;
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // const result = {prevProps, prevState, snapshot}
        this.count++;
        // this.message = `updated ${this.count} time${this.count === 1 ? '' : 's'}`;
        console.log('componentDidUpdate', snapshot);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const result = {prevProps, prevState}
        console.log('getSnapshotBeforeUpdate', result);
        return this.count;
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    // setListener() {
    //     document.querySelector('#some-id').addEventListener('click', this.changeOutput, { once: true });
    // }

    changeOutput(event) {
        if (event.target === document.querySelector('#delete')) {
            // return document.querySelector('#some-id').remove();
            return ReactDOM.render(
  <React.StrictMode>
    <div/>
  </React.StrictMode>,
  document.getElementById("root")
);
        }
            this.setState({
            text: getComputedStyle(event.target).borderColor,
            color: getComputedStyle(event.target).color
        });
    }
    
    render() {
        console.log('render');
        return (<MainDiv id="some-id" onClick={this.changeOutput}>
            <Button>Press Me!</Button>
            <Output color={this.state.color} text={this.state.text} />
            <OtherButton>Now Press Me!</OtherButton>
            <br />
            <Output color={this.state.color} message={this.message} style={{ width: '100%' }} />
            <Output id="delete" message="DELETE" style={{ width: '40%' }} />
        </MainDiv>);
    }
}




