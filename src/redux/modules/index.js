import { combineReducers } from 'redux';

import todolist from "~/redux/modules/ToDoList";
import movie from "~/redux/modules/Movie";

export default combineReducers({ todolist, movie });
