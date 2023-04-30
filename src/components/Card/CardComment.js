import React from 'react'
import { Author, Container, PostText, DivLikeComment, DivLike } from './style'
import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/arrow-down.svg'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'

export const CardComment = (props) => {
  const {comment} = props;

  // const like = async () => {
  //   try {
  //     let body = {
  //       like: true,
  //     };
  //     await axios.put(`${BASE_URL}/comments/${comment.id}/like`, body, {
  //       headers: {
  //         Authorization: window.localStorage.getItem("token"),
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const dislike = async () => {
  //   try {
  //     let body = {
  //       like: false,
  //     };
  //     await axios.put(`${BASE_URL}/comments/${comment.id}/like`, body, {
  //       headers: {
  //         Authorization: window.localStorage.getItem("token"),
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
        <Container>
            <Author>Enviado por: {comment.creator.name}</Author>
            <PostText>{comment.content}</PostText>
            <DivLikeComment>
                <DivLike>
                    <button><img src={arrowUp} /></button>
                    <p>{comment.likes}</p>
                    <button><img src={arrowDown}/></button>
                    <p>{comment.dislikes}</p>
                </DivLike>
            </DivLikeComment>
        </Container>
  )
}
