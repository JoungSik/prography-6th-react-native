import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.TouchableOpacity`
  border-radius: 50px;
  background-color: ${props => props.backgroundColor};
  padding: 20px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
  text-align: center;
`;

const NextPageButton = ( { text, onPress, backgroundColor } ) => {
  return (
    <ButtonContainer onPress={onPress} backgroundColor={backgroundColor}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  )
};

export default NextPageButton;
