import { render } from "@testing-library/react";
import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDelete }) => {
  const history = useHistory();

  const handdleTaskDetailsClick = () => {
    history.push(`/${task.title}`);
  };

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chocolate" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="button-cantainer">
        <button
          className="see-task-details-button"
          onClick={handdleTaskDetailsClick}
        >
          <CgInfo cursor="pointer" />
        </button>

        <button
          className="remove-task-button"
          onClick={() => handleTaskDelete(task.id)}
        >
          <CgClose cursor="pointer" />
        </button>
      </div>
    </div>
  );
};

export default Task;
