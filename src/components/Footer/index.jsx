import validator from 'validator';
import React, {useState} from "react";
import Input  from "../Input/index.jsx"
import Button from "../Button/index.jsx"
import { FlexContainer } from "./styles.jsx";

const Footer = ({color, width, height, radius, padding, margin, ...props}) => {
  const [nomeAmigo, setNomeAmigo] = useState('');
  const [email, setEmail] = useState('');

  const validateEmail = (email) => {
    if (!validator.isEmail(email)) {
      setEmail('')
      alert("Email invalido")
    }
  }

  return (
    <FlexContainer color={color} width={width} padding={padding} height={height} margin={margin} radius={radius} {...props}>
        <h1>
          Compatilhe a novidade
        </h1>
        <p>
          Quer que seus amigos tambem ganhem a lista personalizada deles? Preencha agora.
        </p>
        <div>
          <label>
            Nome do seu amigo
            <Input 
              placeholder={"Nome do seu amigo"}
              value={nomeAmigo}
              onChange={(e) => setNomeAmigo(e.target.value)}
            />
          </label>
          <label>
            Email
            <Input
              placeholder={"Email"}
              value={email}
              onChange={(e) =>setEmail(e.target.value)}
              onBlur={() => validateEmail(email)}
            />
          </label>
        </div>
        <Button text={"Enviar"} width={"25%"} padding={"1% 0 1% 0"}/>
    </FlexContainer>
  )
}

export default Footer;