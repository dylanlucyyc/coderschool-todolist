import React from "react";

function Form({ newTask, setNewTask, setTasks, tasks }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prevTasks) => [
      ...prevTasks,
      { task: newTask, done: true }, // Add the new task with done: true
    ]);
    setNewTask("");
  };

  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <label htmlFor="newitem">Add to the todo list</label>
      <input
        type="text"
        id="newitem"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default Form;
