import React from "react";
import { FlexContainer } from "./styles.jsx";
import Button from "../Button/index.jsx";

const Header = () =>{
    return(
        <FlexContainer>
            <header>
                <div id='Titulos'>
                    <h4>
                        Uma seleçao de produtos
                    </h4>
                    <h1>
                        Especial para você
                    </h1>
                    <h5>
                        Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!
                    </h5>
                </div>
                <div id='Botoes'>
                    <Button text={"Conheça a Linx"}/>
                    <Button text={"Ajude o algorítimo"}/>
                    <Button text={"Seus produtos"}/>
                    <Button text={"Compartilhe"}/>
                </div>
            </header>
            
        </FlexContainer>
    )
}

export default Header;