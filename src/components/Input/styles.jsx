import styled from "styled-components";

export const FlexContainer = styled.div`
    display: flex; 
    width: ${props => props.width ? props.width : '100%' };
    height: ${props => props.height ? props.height : '6vh' };
    min-height: 38px;
    align-items: center;
    position: relative;
    
    input {
        border: 1px solid ${props => props.radius_color ? props.radius_color : '#32471F'};
        border-radius: ${props => props.radius ? props.radius : '5px' };
        width: 100%;
        height: 100%;
        outline: none;
        text-indent: 10px;
        font-size: ${props => props.type === 'create' ? '1.8vh' : '1.8vh' };
        ${props => (props.type === 'create') &&
            `
            padding-left: 20px;
            font-family: 'Fira Sans';
            font-style: normal;
            `
        }
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        overflow-wrap: ${props => props.overflow ? "break-word;" : ""}
    }

    input:hover, input:focus {
        border-color: ${props => props.focus_color ? props.focus_color : 'none'};
    }

    .icon {
        position: absolute;
        right: 6%;
        color: ${props => props.color ? props.color :'#64192D'};
    }

    @media(max-width: 768px) {
        input {
            font-size: 2vh;
            ${props => (props.type === 'create') &&
                `
                padding-left: 5px;
                font-size: 1.7vh;
                `
            }
    }
}`