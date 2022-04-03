import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../JS/action/task";
import "../components/TaskList.css";
const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    if (text !== "") {
      dispatch(addTask({ id: Math.random(), text: text, done: false }));
      setText("");
    } else {
      alert`can not add an empty task`;
    }
  };
  return (
    <div className="addTask">
      <input
        type="text"
        value={text}
        placeholder="add something ..."
        onChange={(e) => setText(e.target.value)}
      
      ></input>
      <button onClick={handleAdd} id="btnAdd">ADD</button>
    </div>
  );
};

export default AddTask;
