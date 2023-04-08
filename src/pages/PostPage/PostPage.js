import React from 'react'
import { Card } from '../../components/Card/Card'
import { Header } from '../../components/Header/Header'
import { Button, Comments, Container, DivHr, TextArea } from './style'

export const PostPage = () => {
  return (
    <>
        <Header/>
        <Comments>
            <Card/>
        </Comments>

        <Container>
            <TextArea placeholder='Adicionar comentário'></TextArea>
            <Button>Responder</Button>
        </Container>
        
        <DivHr>
            <hr></hr>
        </DivHr>

        <Comments>
            <Card/>
        </Comments>
    </>
  )
}
