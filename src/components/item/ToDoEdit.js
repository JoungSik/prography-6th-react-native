import React, { useState } from "react";
import styled from "styled-components";

import NoLineButton from "~/components/button/NoLineButton";

const EditTextInput = styled.TextInput`
  flex: 1;
  height: 40px;
  font-weight: bold;
  font-size: 18px;
  background-color: transparent;
  
  padding-left: 20px;
  padding-right: 20px;
`;

const ToDoEdit = ( { text, onEdit, onChange } ) => {

  const [value, setValue] = useState(text);

  return (
    <>
      <EditTextInput
        placeholder="메모를 적어보세요"
        onChangeText={( text ) => setValue(text)}
        value={value}
      />
      <NoLineButton
        text="완료"
        textColor="black"
        onPress={onEdit} />
    </>
  )
};

export default ToDoEdit;
