import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList = () => {
  const tasks = useSelector((store) => store.taskReducer.taskList);
  const [filter, setFilter] = useState("All");
  return (
    <div className="tasklist">
      <select>
        <option value="done" onClick={() => setFilter("Done")}>
          Done
        </option>
        <option value="undone" onClick={() => setFilter("Undone")}>
          Undone
        </option>
      </select>
      {filter == "done"
        ? tasks
            .filter((el) => el.done == true)
            .map((el) => <Task task={el} key={el.id} />)
        : filter == "undone"
        ? tasks
            .filter((el) => el.done == false)
            .map((el) => <Task task={el} key={el.id} />)
        : tasks.map((el) => <Task task={el} key={el.id} />)}
    </div>
  );
};

export default TaskList;
