import styled from 'styled-components';

const Output = styled.span.attrs(props => ({
    style: { color: props.color },
    children: props.message || props.text,
}))`
 border: 1px solid green;
 width: 180px;
 color: green;
 font-size: 18px;
 text-align: center;
`

export default Output;