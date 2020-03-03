import React, { useState } from 'react';
import styled from "styled-components";
import { ScrollView } from "react-native";

import SquareButton from "~/components/button/SquareButton";
import { useSelector } from "react-redux";
import ToDo from "../components/item/ToDo";

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

  const [memo, setMemo] = useState("");
  const [toDoList, setToDoList] = useState([
    {
      id: 0,
      status: "ready",
      text: "준비",
    },
    {
      id: 1,
      status: "edit",
      text: "수정",
    },
    {
      id: 2,
      status: "complete",
      text: "완료",
    },
  ]);

  const onAdd = () => {
    setToDoList(toDoList.concat({
      id: toDoList.length,
      status: "ready",
      text: memo,
    }));

    setMemo("");
  };

  const onEdit = id => {
    setToDoList(
      toDoList.map(todo =>
        todo.id === id ?
          {
            ...todo,
            status: todo.status === "edit" ? "ready" : "edit",
          } : todo,
      ));
  };

  // const onChange = ( id, text ) => {
  //   setToDoList(
  //     toDoList.map(todo =>
  //       todo.id === id ?
  //         {
  //           ...todo,
  //           text: text,
  //         } : todo,
  //     ));
  // };

  const onDelete = id => {
    setToDoList(toDoList.filter(todo => todo.id !== id))
  };

  const onComplete = id => {
    setToDoList(
      toDoList.map(todo =>
        todo.id === id ?
          {
            ...todo,
            status: todo.status === "complete" ? "ready" : "complete",
          } : todo,
      ));
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
          toDoList.map(todo =>
            <ToDo
              todo={todo}
              onEdit={() => onEdit(todo.id)}
              onChange={() => onChange()}
              onDelete={() => onDelete(todo.id)}
              onComplete={() => onComplete(todo.id)} />)
        }
      </ScrollView>
    </ToDoListView>
  );
};

export default ToDoListScreen;
