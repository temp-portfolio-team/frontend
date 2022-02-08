import React from 'react';
import JumboTron from './JumboTron/JumboTron';
import CardList from '../../components/CardList/CardList';
import * as S from './style';

const MainPage = () => {
  return (
    <>
      <JumboTron />
      <S.MainPage title="같이먹자">
        <CardList />
      </S.MainPage>
    </>
  );
};

export default MainPage;
