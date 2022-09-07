import styled from "styled-components";


export const FlexContainer = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: max-content;
    background-color: #1A1A1A;
    color: white;
    padding: 5% 10% 5% 10%;
    gap: 10%;

    #Texto{
        max-width: 45%;
        text-align: justify;
    }

    #Entradas{
        display: flex;
        width: 35%;
        flex-direction: column;
        justify-content: space-between;

    }
    
    #Genero{
        display: flex;
        width: 100%;
        justify-content: flex-start;
        gap: 10%;
    }
`