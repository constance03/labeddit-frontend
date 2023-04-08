import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { goToHomePage, goToSignupPage } from '../../routes/coordinator'
import { ButtonCreate, ButtonLogin, Container, DivButton, DivInput, DivLogo, DivRow, Input } from './style'

export const LoginPage = () => {
  const navigate = useNavigate()

  return (
    <Container>
        <DivLogo>
            <img src={logo}/>
            <h1>Labeddit</h1>
            <p>O projeto de rede social da Labenu</p>
        </DivLogo>
        <DivRow>
        <DivInput>
            <Input placeholder='Email'></Input>
            <Input placeholder='Senha'></Input>
        </DivInput>
        <DivButton>
            <ButtonLogin onClick={() => goToHomePage(navigate)}>Continuar</ButtonLogin>
            <hr></hr>
            <ButtonCreate onClick={() => goToSignupPage(navigate)}>Crie uma conta!</ButtonCreate>
        </DivButton>
        </DivRow>
    </Container>
  )
}
