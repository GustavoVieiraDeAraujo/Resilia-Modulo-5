import styled from "styled-components";

export const FlexContainer = styled.footer`
    display: flex;
    height: max-content;
    padding-bottom: 3%;
    width: 100%;
    color: white;
    background:  #1A1A1A;
    flex-direction: column;
    align-items: center;

    label {
        width: 30%;
    }

    div{
        display: flex;
        width: 100%;
        justify-content: center;
        gap: 20%;
        margin-bottom: 2%;
    }
`