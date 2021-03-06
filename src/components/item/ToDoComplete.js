import React from "react";
import styled from "styled-components";

import NoLineButton from "~/components/button/NoLineButton";

const TouchableText = styled.TouchableOpacity`
  flex: 1;
`;

const Text = styled.Text`
  color: #A39697;
  font-size: 16px;
  text-decoration: line-through;
  
  padding-left: 20px;
  padding-right: 20px;
  
  margin-top: auto;
  margin-bottom: auto;
`;

const ToDoComplete = ( { text, onEdit, onDelete, onComplete } ) => {
  return (
    <>
      <TouchableText onPress={onComplete}>
        <Text>{text}</Text>
      </TouchableText>
      <NoLineButton
        text="수정"
        textColor="#35A7E5"
        onPress={onEdit} />
      <NoLineButton
        text="삭제"
        textColor="red"
        onPress={onDelete} />
    </>
  )
};

export default ToDoComplete;
