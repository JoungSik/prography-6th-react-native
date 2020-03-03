import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.TouchableOpacity`
  height: 40px;
  background-color: transparent;  
`;

const ButtonText = styled.Text`
  color: ${props => props.textColor};
  font-size: 16px;
  text-align: center;
  
  padding-left: 20px;
  padding-right: 20px;
  
  margin-top: auto;
  margin-bottom: auto;
`;

const NoLineButton = ( { text, onPress, textColor } ) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText textColor={textColor}>{text}</ButtonText>
    </ButtonContainer>
  )
};

export default NoLineButton;
