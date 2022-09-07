import styled from "styled-components";

export const FlexContainer = styled.main`
    display: flex;
    justify-content: center;
    height: max-content;
    padding-bottom: 3%;
    width: 100%;
    color: white;
    background:  #1A1A1A;

    #Titulos{
        text-align: center;
    }

    #Botoes{
        display: flex;
        width: 100%;
        gap: 40px;
    }
`