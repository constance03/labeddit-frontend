import React from "react";
import {
  Button,
  Container,
  DivCheckBox,
  DivInput,
  DivText,
  Input,
  Title,
} from "./style";
import { Header } from "../../components/Header/Header";
import { Checkbox } from "@chakra-ui/react";
import { goToLoginPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const SignupPage = () => {
  const navigate = useNavigate()

  // const onChange = (event) => {
  //   setName(event.target.value);
  // };
  
  return (
    <>
      <Header />
      <Container>
        <Title>Olá, boas vindas ao LabEddit!</Title>
        <DivInput>
          <Input placeholder="Apelido" type="text" name="name"></Input>
          <Input placeholder="Email" type="email" name="email"></Input>
          <Input placeholder="Senha" type="password" name="password"></Input>
        </DivInput>
        <DivText>
          <p>
            Ao continuar, você concorda com o nosso <a>Contrato de usuário</a> e
            nossa <a>Política de Privacidade</a>
          </p>
          <DivCheckBox>
            <Checkbox></Checkbox>
            <p>Eu concordo em receber emails sobre coisas legais no Labeddit</p>
          </DivCheckBox>
        </DivText>
        <Button onClick={() => goToLoginPage(navigate)}>Cadastrar</Button>
      </Container>
    </>
  );
};
