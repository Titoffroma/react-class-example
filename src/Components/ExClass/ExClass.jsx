import React, { Component } from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
 width: 550px;
 height: 200px;
 padding: 20px 10px;
 margin: 0 auto;
 display: flex;
 justify-content: space-between;
 align-items: center;
`
const Button = styled.button`
 border: 4px solid red;
 padding: 4px 10px;
 border-radius: 4px;
 background: palevioletred;
 color: grey;
 font-size: 18px;
 &:focus {
 outline: none;
 }
`

const OtherButton = styled(Button)`
border: 4px solid blue;
color: blue;
`

const Out = styled.span`
 border: 1px solid green;
 width: 180px;
 color: green;
 font-size: 18px;
 text-align: center;
`

const Output = ({ text, col }) => (<Out style={{color: col}}>{text}</Out>);

export default class MainComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Nothing yet changed',
            color: 'rgb(0, 0, 0)'
        };
        this.changeOutput = this.changeOutput.bind(this);
    }

    componentDidMount() {
        this.setListener();
    }

    componentDidUpdate() {
        this.setListener();
    }

    componentWillUnmount() {
        document.querySelector('#some-id').removeEventListener('click', this.changeOutput, { once: true });
    }

    setListener() {
        document.querySelector('#some-id').addEventListener('click', this.changeOutput, { once: true });
    }

    changeOutput(event) {
        this.setState({
            text: getComputedStyle(event.target).borderColor,
            color: getComputedStyle(event.target).color
        });
    }
    
    render() {
        return (<MainDiv id="some-id">
            <Button>Press Me!</Button>
            <Output text={this.state.text} col={this.state.color}/>
            <OtherButton>Now Press Me!</OtherButton>
            </MainDiv>)
    }
}




