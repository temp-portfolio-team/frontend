import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as S from './style';
import {
  faThumbsUp,
  faCommentDots,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import postAPI from '../../../api/post';

const RegisterPost = ({ registerPost }) => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user.user);

  const {
    createdAt,
    title,
    likeCount,
    commentCount,
    viewCount,
    postId,
    content,
  } = registerPost;

  const goToPage = (url, postId) => {
    navigate(url, {
      state: {
        postId,
        title,
        content,
      },
    });
  };

  const onDeletePost = () => {
    postAPI.deletePost(postId).then(res => {
      alert('삭제가 완료 되었습니다.');
      navigate('/');
    });
  };

  return (
    <S.RegisterPost>
      <S.Header>등록날짜: {createdAt}</S.Header>
      <S.Content>
        <S.Title onClick={() => goToPage(`/posts/${postId}`)}>{title}</S.Title>
        <S.ContentInFo>
          <S.ContentItem>
            <S.ThumbsUp icon={faThumbsUp} />
            <S.Count>{likeCount}</S.Count>
          </S.ContentItem>
          <S.ContentItem>
            <S.Comment icon={faCommentDots} />
            <S.Count>{commentCount}</S.Count>
          </S.ContentItem>
          <S.ContentItem>
            <S.View icon={faEye} />
            <S.Count>{viewCount}</S.Count>
          </S.ContentItem>
        </S.ContentInFo>
      </S.Content>
      <S.Footer>
        <S.UserImg img={user.imageUrl} />
        <S.UserInFo>
          <S.NickName>{user.nickName}</S.NickName>
          <S.Address>{`${user.address.city} ${user.address.street} ${user.address.zipcode}`}</S.Address>
        </S.UserInFo>
        <S.EditButton
          name="수정"
          onClick={() => goToPage('/post/edit', postId)}
        />
        <S.DeleteButton color="red" name="삭제" onClick={onDeletePost} />
      </S.Footer>
    </S.RegisterPost>
  );
};

export default RegisterPost;
