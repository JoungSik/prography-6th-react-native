import React from "react";
import styled from "styled-components";

import ToDoReady from "./ToDoReady";
import ToDoEdit from "./ToDoEdit";
import ToDoComplete from "./ToDoComplete";

const Container = styled.View`
  height: 40px;
  background-color: #E2C6C7;
  
  flex-direction: row;
`;

const ToDo = ( { todo, onEdit, onChange, onDelete, onComplete } ) => {
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
          onChange={onChange} />
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
