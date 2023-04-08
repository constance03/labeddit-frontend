import React from 'react'
import { Author, Container, PostText, DivLikeComment, DivLike, DivComment } from './style'
import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/arrow-down.svg'
import comment from '../../assets/comment.svg'
import { useNavigate } from 'react-router-dom'
import { goToPostPage } from '../../routes/coordinator'

export const Card = () => {
    const navigate = useNavigate()
  return (
        <Container>
            <Author>Enviado por: fulano</Author>
            <PostText>Texto post muito importante aqui lalalal muitos textos</PostText>
            <DivLikeComment>
                <DivLike>
                    <button><img src={arrowUp}/></button>
                    <p>1.2k</p>
                    <button><img src={arrowDown}/></button>
                </DivLike>
                <DivComment>
                    <button onClick={() => goToPostPage(navigate)}><img src={comment}/></button>
                    <p>34</p>
                </DivComment>
            </DivLikeComment>
        </Container>
  )
}
