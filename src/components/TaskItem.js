import React from "react";

function TaskItem({ children, task, onTaskUpdate, onDeleteTask }) {
  return (
    <li className={!Boolean(task.done) ? "done" : ""}>
      <span className="label">{children}</span>
      <div className="actions">
        <input
          type="checkbox"
          className="btn-action btn-action-done"
          checked={!Boolean(task.done)}
          onChange={() => onTaskUpdate(task)}
        />
        <button
          onClick={() => onDeleteTask(task)}
          className="btn-action btn-action-delete"
        >
          ✖
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
