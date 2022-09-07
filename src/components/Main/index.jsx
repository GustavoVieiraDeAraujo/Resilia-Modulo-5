import validator from 'validator';
import React, {useState} from "react"
import Input  from "../Input/index.jsx"
import Button from "../Button/index.jsx"
import { FlexContainer } from "./styles.jsx";

const Main = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');

    const validateEmail = (email) => {
        if (!validator.isEmail(email)) {
          setEmail('')
          alert("Email invalido")
        }
    }

    return (
        <FlexContainer>
                <section id='Texto'>
                    <h3>
                        Ajude o algorítimo a ser mais certeiro
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. 
                        Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur.
                        Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. 
                        Cras et erat ut tellus vulputate tincidunt. 
                        Aenean lacinia euismod augue vel egestas. 
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend. 
                        Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. 
                        Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. 
                        Etiam ultricies a ante vehicula pharetra. 
                        Quisque ut neque mattis, consequat velit ut, ultrices orci. 
                        Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. 
                        Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.
                    </p>
                </section>
                <section id='Entradas'>
                        <label>
                            Seu nome
                            <Input
                                placeholder={"Seu nome"}
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </label>
                        <label>
                            Email
                            <Input 
                                placeholder={"email"}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={() => validateEmail(email)}
                            />
                        </label>
                        <label>
                            CPF
                            <Input
                                mask={'999.999.999-99'}
                                placeholder={"CPF"}
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                            />
                        </label>
                        <div id="Genero">
                            <div>
                                <input type="radio" name="webmaster" value="Masculino"/> Masculino<br />
                            </div>
                            <div>
                                <input type="radio" name="webmaster" value="Feminino"/> Feminino<br />
                            </div>
                        </div>
                        <Button text={"Enviar"} width={"100%"} padding={"2% 0 2% 0"}/>
                </section>
        </FlexContainer>

    )
};

export default Main;