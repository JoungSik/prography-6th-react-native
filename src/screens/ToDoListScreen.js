import React, { useState } from 'react';
import styled from "styled-components";
import { ScrollView } from "react-native";

import SquareButton from "~/components/button/SquareButton";
import { useSelector } from "react-redux";

const ToDoListView = styled.View`
  margin-top: 40px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: red;
`;

const EditTextLayout = styled.View`
  flex: 1;
  flex-direction: row;
`;

const EditTextInput = styled.TextInput`
  flex: 1;
  height: 40px;
  font-size: 16px;
  background-color: #E4DDDD;
  
  padding-left: 10px;
  padding-right: 10px;
`;

const ToDoListScreen = ( { navigation } ) => {

  const [memo, setMemo] = useState("");
  // const todoList = useSelector(store => store.todoList);

  return (
    <ToDoListView>
      <EditTextLayout>
        <EditTextInput
          placeholder="메모를 적어보세요"
          onChangeText={( text ) => setMemo(text)}
          value={memo}
        />
        <SquareButton
          text="추가"
          onPress={() => console.log(memo)}
          backgroundColor={"#FF0000"}
        />
      </EditTextLayout>
      <ScrollView>

      </ScrollView>
    </ToDoListView>
  );
};

export default ToDoListScreen;
