import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { task: "Learn JS", done: true },
    { task: "Code a Todo List", done: false },
    { task: "Code a Todo List", done: true },
  ]);

  const [filter, setFilter] = useState(false);
  const [newTask, setNewTask] = useState("");
  return (
    <div className="container">
      <Header />
      <TaskList tasks={tasks} setTasks={setTasks} filter={filter} />
      <Filter filter={filter} setFilter={setFilter} />
      <Form
        newTask={newTask}
        setNewTask={setNewTask}
        setTasks={setTasks}
        tasks={tasks}
      />
    </div>
  );
}

export default App;
