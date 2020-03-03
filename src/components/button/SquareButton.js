import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.TouchableOpacity`
  height: 40px;
  background-color: ${props => props.backgroundColor};  
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  text-align: center;
  
  padding-left: 20px;
  padding-right: 20px;
  
  margin-top: auto;
  margin-bottom: auto;
`;

const SquareButton = ( { text, onPress, backgroundColor } ) => {
  return (
    <ButtonContainer onPress={onPress} backgroundColor={backgroundColor}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  )
};

export default SquareButton;
