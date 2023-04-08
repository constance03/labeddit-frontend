import React from 'react'
import { Card } from '../../components/Card/Card'
import { Header } from '../../components/Header/Header'
import { Button, Comments, Container, DivHr, TextArea } from './style'

export const HomePage = () => {
  return (
    <>
        <Header/>
        <Container>
            <TextArea placeholder='Escreva seu post...'></TextArea>
            <Button>Postar</Button>
        </Container>
        
        <DivHr>
            <hr></hr>
        </DivHr>

        <Comments>
            <Card/>
            <Card/>
        </Comments>
    </>
  )
}
