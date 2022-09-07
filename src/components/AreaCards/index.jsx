import React, { useState, useEffect } from "react";
import Card from "../Card/index.jsx";
import Button from "../Button/index.jsx";
import { FlexContainer } from "./styles.jsx";

const AreaCards = () => {
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(1)

    useEffect(()=> pegaCards, [])
    
        async function pegaCards(){
            try{
                setCount(count+1)
                const response = await fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${count}`);
                const data = await response.json();
                setProducts([...products, ...data.products])
            }catch(e){
                console.log(e)
            }
        }

    return(
        <FlexContainer>
            <h1>
                Sua selecao para voce
            </h1>
            <div id="AreaCards">
                {products.map( product =>
                    <Card
                        nome={product.name}
                        precoAntigo={product.oldPrice} 
                        precoNovo={product.price} 
                        descricao={product.description} 
                        imagem={product.image}
                    />
                )}
            </div>
            <Button text={"Ainda mais produtos aqui!"} margin={"0 0 5% 0"} onClick={pegaCards}/>
        </FlexContainer>
    )
};

export default AreaCards;