import styled from "styled-components";

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin-bottom: 5%;

    p{
        margin: 0;
        font-size: medium;
        width: 200px;
        text-align: justify;
    }

    img{
        width: 200px;
        height: 150px;
    }  

    div{
        display: flex;
        flex-direction: column;
    }
`