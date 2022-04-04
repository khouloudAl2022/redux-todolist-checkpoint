import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask, status_task } from "../JS/action/task";

const Task = ({ task }) => {
  const [edit, setEdit] = useState(false);
  const [editedText, seteditedText] = useState(task.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask(task.id, editedText));
    setEdit(false);
  };
  const handleCancel = () => {
    seteditedText(task.text);
    setEdit(false);
  };

  return (
    <div key={task.id} className="tasks">
      {edit ? (
        <div>
          <input
            type="text"
            value={editedText}
            onChange={(e) => seteditedText(e.target.value)}
            style={{ width: "100px" }}
          />

          <button
            style={{ backgroundColor: "black", color: "white" }}
            onClick={handleEdit}
          >
            Save
          </button>

          <button
            style={{ backgroundColor: "white", color: "black" }}
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      ) : (
        <span>{task.text}</span>
      )}

      <button
        onClick={() => dispatch(deleteTask(task.id))}
        className="btn"
        style={{ backgroundColor: "red", border: "none" }}
      >
        {" "}
        Delete{" "}
      </button>

      <button
        className="btn"
        style={{ backgroundColor: "pink", border: "none" }}
        onClick={() => setEdit(true)}
      >
        Edit
      </button>

      <button
        onClick={() => dispatch(status_task(task.id))}
        id={task.done ? "btnDone" : null}
        className="btn"
      >
        {task.done ? "undone" : "done"}
      </button>
    </div>
  );
};

export default Task;
