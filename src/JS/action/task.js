//add

import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  STATUS_TASK,
} from "../actionsTypes/task";

export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};

//delete
export const deleteTask = (idTask) => {
  return {
    type: DELETE_TASK,
    payload: idTask,
  };
};
export const editTask = (id, textEdited) => {
  return {
    type: EDIT_TASK,
    payload: {id , textEdited },
  };
};

export const status_task = (id) => {
  return {
    type: STATUS_TASK,
    payload: id,
  };
};
