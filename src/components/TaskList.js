import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, setTasks, filter }) {
  const onTaskUpdate = (taskToUpdate) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task === taskToUpdate ? { ...task, done: !task.done } : task
      )
    );
  };

  const onDeleteTask = (taskToDelete) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task !== taskToDelete));
  };
  return (
    <ul className="task-list">
      {filter
        ? tasks
            .filter((task) => task.done) // Only include tasks that are done
            .map((task, index) => (
              <TaskItem
                key={index}
                task={task}
                onTaskUpdate={onTaskUpdate}
                onDeleteTask={onDeleteTask}
              >
                {task.task}
              </TaskItem>
            ))
        : tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            >
              {task.task}
            </TaskItem>
          ))}
    </ul>
  );
}

export default TaskList;
