import styled from "styled-components";


export const FlexContainer = styled.div`
    background: #1A1A1A;
    color: white;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;
    padding: 0% 15% 0% 15%;
    align-items: center;
    
    #AreaCards{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-between;
        margin-top: 5%;
    }
`