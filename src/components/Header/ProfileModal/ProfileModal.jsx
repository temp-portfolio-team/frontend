import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import auth from '../../../api/auth';
import { resetUser } from '../../../store/user';
import * as S from './style';

const ProfileModal = ({ toggleProfile }) => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const goToPage = url => navigate(url);

  const logOut = () => {
    auth
      .logout() //
      .then(res => {
        alert('로그아웃이 되었습니다.');
        dispatch(resetUser());
        navigate('/');
      });
  };

  return (
    <S.ProfileModal toggle={toggleProfile}>
      <S.ProfileList>{user.nickName}</S.ProfileList>
      <S.ProfileList onClick={() => goToPage('/profile')}>
        프로필 설정
      </S.ProfileList>
      <S.ProfileList>채팅</S.ProfileList>
      <S.ProfileList onClick={logOut}>로그아웃</S.ProfileList>
    </S.ProfileModal>
  );
};

export default ProfileModal;
