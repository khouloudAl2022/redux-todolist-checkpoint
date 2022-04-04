import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList = () => {
  const tasks = useSelector((store) => store.taskReducer.taskList);

  return (
    <div className="tasklist">
      {tasks.map((el) => (
        <Task task={el} key={el.id} />
      ))}
    </div>
  );
};

export default TaskList;
