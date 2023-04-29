import React from 'react'
import { Header } from '../../components/Header/Header'
import { Button, Comments, Container, DivHr, TextArea } from './style'
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/arrow-down.svg'
import { Author, DivLike, PostText } from '../../components/Card/style';

export const PostPage = (props) => {
    const { comment, findComments } = props;

  const like = async (postId) => {
    try {
      let body = {
        like: 1,
      };
      await axios.put(`${BASE_URL}/posts/${postId}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
      findComments();
    } catch (error) {
      console.log(error);
    }
  };

  const dislike = async (postId) => {
    try {
      let body = {
        like: 0,
      };
      await axios.put(`${BASE_URL}/posts/${postId}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
      findComments();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
        <Header/>

        <Container>
            <TextArea placeholder='Adicionar comentário'></TextArea>
            <Button>Responder</Button>
        </Container>
        
        <DivHr>
            <hr></hr>
        </DivHr>

        <Comments>
        <Author>Enviado por: {comment.creator.name}</Author>
        <PostText>{comment.content}</PostText>
        <DivLike>
                    <button><img src={arrowUp} onClick={() => like(comment.id)}/></button>
                    <p>{comment.likes}</p>
                    <button><img src={arrowDown} onClick={() => dislike(comment.id)}/></button>
                    <p>{comment.dislikes}</p>
        </DivLike>
        </Comments>
    </>
  )
}
