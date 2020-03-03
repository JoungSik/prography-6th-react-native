import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const TODO_ADD = "todo/ADD";
const TODO_EDIT = "todo/EDIT";
const TODO_SAVE = "todo/SAVE";
const TODO_DELETE = "todo/DELETE";
const TODO_COMPLETE = "todo/COMPLETE";

export const todoAdd = createAction(TODO_ADD);
export const todoEdit = createAction(TODO_EDIT);
export const todoSave = createAction(TODO_SAVE);
export const todoDelete = createAction(TODO_DELETE);
export const todoComplete = createAction(TODO_COMPLETE);

const initialState = {
  data: [
    {
      id: 1,
      status: "ready",
      text: "안녕하세요",
    },
    {
      id: 2,
      status: "ready",
      text: "프로그라피입니다",
    },
    {
      id: 3,
      status: "ready",
      text: "React Native",
    },
    {
      id: 4,
      status: "complete",
      text: "사전 과제",
    },
    {
      id: 5,
      status: "edit",
      text: "수정 중입니다.",
    },
  ],
};

export default handleActions(
  {
    [TODO_ADD]: ( state, action ) => produce(state, draft => {
      draft.data.push({
        id: draft.data.length + 1,
        status: "ready",
        text: action.payload.text,
      });
    }),
    [TODO_EDIT]: ( state, action ) => produce(state, draft => {
      draft.data = draft.data.map(todo =>
        todo.id === action.payload.id ?
          {
            ...todo,
            status: "edit",
          } : todo,
      );
    }),
    [TODO_SAVE]: ( state, action ) => produce(state, draft => {
      draft.data = draft.data.map(todo =>
        todo.id === action.payload.id ?
          {
            ...todo,
            status: "ready",
            text: action.payload.text,
          } : todo,
      );
    }),
    [TODO_DELETE]: ( state, action ) => produce(state, draft => {
      draft.data = draft.data.filter(todo => todo.id !== action.payload.id);
    }),
    [TODO_COMPLETE]: ( state, action ) => produce(state, draft => {
      draft.data = draft.data.map(todo =>
        todo.id === action.payload.id ?
          {
            ...todo,
            status: todo.status === "complete" ? "ready" : "complete",
          } : todo,
      );
    }),
  },
  initialState,
);
