import React from "react";
import Button from "../Button/index.jsx";
import { FlexContainer } from "./styles.jsx";

const Card = ({nome, precoAntigo, precoNovo, descricao, imagem}) => {
    return (
        <FlexContainer>
            <img src={imagem} alt={nome}></img>
            <div>
                <p>
                    {nome}
                </p>
                <p>
                    {descricao}
                </p>
                <p>
                    De:R${precoAntigo}
                </p>
                <p>
                    Por:R${precoAntigo}
                </p>
                <p>
                    ou 2x de {(precoNovo/2).toFixed(2)}
                </p>
            </div>
            <Button text={"Comprar"}/>
        </FlexContainer>
    )
  }

export default Card;