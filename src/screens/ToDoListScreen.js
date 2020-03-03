import React, { useState } from 'react';
import styled from "styled-components";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import ToDo from "~/components/item/ToDo";
import SquareButton from "~/components/button/SquareButton";
import { todoAdd } from "../redux/modules/ToDoList";

const ToDoListView = styled.View`
  margin-top: 40px;
  margin-left: 20px;
  margin-right: 20px;
  
  flex-direction: column;
`;

const EditTextLayout = styled.View`
  flex-direction: row;
`;

const EditTextInput = styled.TextInput`
  flex: 1;
  height: 40px;
  font-size: 16px;
  background-color: #E4DDDD;
  
  padding-left: 20px;
  padding-right: 20px;
`;

const ToDoListScreen = ( { navigation } ) => {

  const dispatch = useDispatch();
  const [memo, setMemo] = useState("");
  const toDoList = useSelector(store => store.todolist.data);

  const onAdd = () => {
    dispatch(todoAdd({ text: memo }));
    setMemo("");
  };

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
          onPress={onAdd}
          backgroundColor={"#FF0000"}
        />
      </EditTextLayout>
      <ScrollView>
        {
          toDoList.map(todo => <ToDo todo={todo} />)
        }
      </ScrollView>
    </ToDoListView>
  );
};

export default ToDoListScreen;
