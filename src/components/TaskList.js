import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList = () => {
  const tasks = useSelector((store) => store.taskReducer.taskList);
  const [filter, setFilter] = useState("all");
  return (
    <div className="tasklist">
      <div>
        <button onClick={() => setFilter("all")}>all</button>
        <button onClick={() => setFilter("Done")}>Done</button>
        <button onClick={() => setFilter("Undone")}>Undone</button>
      </div>

      {filter == "done"
        ? tasks
            .filter((el) => el.done === true)
            .map((el) => <Task task={el} key={el.id} />)
        : filter == "undone"
        ? tasks
            .filter((el) => el.done === false)
            .map((el) => <Task task={el} key={el.id} />)
        : tasks.map((el) => <Task task={el} key={el.id} />)}
    </div>
  );
};

export default TaskList;
