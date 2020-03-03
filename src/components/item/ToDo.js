import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { todoComplete, todoDelete, todoEdit, todoSave } from "~/redux/modules/ToDoList";

import ToDoReady from "./ToDoReady";
import ToDoEdit from "./ToDoEdit";
import ToDoComplete from "./ToDoComplete";

const Container = styled.View`
  height: 40px;
  background-color: #E2C6C7;
  
  flex-direction: row;
`;

const ToDo = ( { todo } ) => {

  const dispatch = useDispatch();

  const onEdit = () => {
    dispatch(todoEdit({ id: todo.id }))
  };

  const onSave = ( text ) => {
    dispatch(todoSave({ id: todo.id, text: text }))
  };

  const onDelete = () => {
    dispatch(todoDelete({ id: todo.id }))
  };

  const onComplete = () => {
    dispatch(todoComplete({ id: todo.id }))
  };

  return (
    <Container>
      {
        todo.status === "ready" && <ToDoReady
          text={todo.text}
          onEdit={onEdit}
          onDelete={onDelete}
          onComplete={onComplete} />
      }
      {
        todo.status === "edit" && <ToDoEdit
          text={todo.text}
          onEdit={onEdit}
          onSave={onSave} />
      }
      {
        todo.status === "complete" &&
        <ToDoComplete
          text={todo.text}
          onEdit={onEdit}
          onDelete={onDelete}
          onComplete={onComplete} />
      }
    </Container>
  )
};

export default ToDo;
