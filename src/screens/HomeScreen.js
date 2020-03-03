import React from 'react';
import styled from "styled-components";

import RoundButton from "~/components/button/RoundButton";

const CenterView = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
`;

const ButtonContainer = styled.View`
  width: 80%;
  margin-bottom: 20px;
  text-align: center;
`;

const HomeScreen = ( { navigation } ) => {
  return (
    <CenterView>
      <ButtonContainer>
        <RoundButton
          text="To Do List"
          backgroundColor="#F5003B"
          onPress={() => navigation.navigate('ToDoList')} />
      </ButtonContainer>
      <ButtonContainer>
        <RoundButton
          text="Movie"
          backgroundColor="#F5003B"
          onPress={() => navigation.navigate('Movie')} />
      </ButtonContainer>
    </CenterView>
  );
};

export default HomeScreen;
