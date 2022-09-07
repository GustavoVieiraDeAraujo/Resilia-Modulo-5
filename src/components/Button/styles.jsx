import styled from "styled-components";

export const FlexContainer = styled.button`
    display: flex;
    background-color: ${props => props.color ? props.color : 'blue' };
    margin: ${props => props.margin ? props.margin : "none" };
    width: ${props => props.width ? props.width : 'max-content' };
    height: ${props => props.height ? props.height : 'max-content' };
    border-radius: ${props => props.radius ? props.radius : '10px' };
    font-size: ${props => props.fontSize ? props.fontSize : '1rem'};
    padding: ${props => props.padding ? props.padding : 'auto'};
    font-weight: bold;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    color: #FFF8E6;
    outline: none;
    border: none;
    cursor: pointer;
`