import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    // Obtener tareas del backend
    axios.get("http://localhost:5000/tasks").then((response) => {
      setTasks(response.data);
    });
  }, []);

  const addTask = () => {
    if (newTask.trim()) {
      axios.post("http://localhost:5000/tasks", { task: newTask }).then(() => {
        setTasks([...tasks, { task: newTask }]);
        setNewTask("");
      });
    }
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`).then(() => {
      setTasks(tasks.filter((task) => task.id !== id));
    });
  };

  return (
    <div className="app-container">
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button type={"submit"} onClick={addTask}>Agregar</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.task} <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
