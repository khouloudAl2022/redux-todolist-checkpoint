import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, status_task } from "../JS/action/task";

const TaskList = () => {
  const tasks = useSelector((store) => store.taskReducer.taskList);

  const dispatch = useDispatch();

  return (
    <div className="tasklist">
      {tasks.map((el) => (
        <div key={el.id} className="tasks">
          <span>{el.text}</span>
          <button onClick={() => dispatch(deleteTask(el.id))} className="btn">
            delete
          </button>
          <button className="btn">Edit</button>
          <button onClick={() => dispatch(status_task(el.id))} className="btn">
            {el.done ? "undone" : "done"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
