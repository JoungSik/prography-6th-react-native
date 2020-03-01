import React from 'react';
import styled from "styled-components";

import CenterView from '~/components/view/CenterView';
import NextPageButton from "~/components/button/NextPageButton";

const ButtonContainer = styled.View`
  width: 80%;
  margin-bottom: 20px;
  text-align: center;
`;

const HomeScreen = ( { navigation } ) => {
  return (
    <CenterView>
      <ButtonContainer>
        <NextPageButton
          text="To Do List"
          backgroundColor="#F5003B"
          onPress={() => navigation.navigate('ToDoList')} />
      </ButtonContainer>
      <ButtonContainer>
        <NextPageButton
          text="Movie"
          backgroundColor="#F5003B"
          onPress={() => navigation.navigate('Movie')} />
      </ButtonContainer>
    </CenterView>
  );
};

export default HomeScreen;
