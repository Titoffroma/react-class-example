import styled from 'styled-components';

const Button = styled.button`
 border: 4px solid red;
 padding: 4px 10px;
 border-radius: 4px;
 background: palevioletred;
 color: grey;
 font-size: 18px;
 margin-right: 10px;
 &:focus {
 outline: none;
 }
`

export default Button;