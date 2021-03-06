import React from 'react';
import * as S from './style';

const CommentItem = ({ comment }) => {
  console.log(comment);
  return (
    <S.CommentItem>
      <S.UserWrap>
        <S.UserImg url={comment.profileUrl} />
        <S.UserInfo>
          <S.NickName>{comment.username}</S.NickName>
          <S.Address>{`${comment.address.city} ${comment.address.street} ${comment.address.zipcode}`}</S.Address>
        </S.UserInfo>
        <S.Date>{comment.createdAt}</S.Date>
      </S.UserWrap>
      <S.CommentWrap>
        <S.Commnent>{comment.content}</S.Commnent>
      </S.CommentWrap>
    </S.CommentItem>
  );
};

export default CommentItem;
