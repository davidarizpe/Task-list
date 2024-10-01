import { useState, useEffect } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    let task = window.localStorage.getItem('task');
    if (task) {
      let data = JSON.parse(task);
      setTasks(data);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      window.localStorage.setItem('task', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;

    let task = {
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      task: newTask,
    };
    
    if (task.task.length > 44) {
      alert("You can't add more than 45 tasks!");
      setNewTask('');
      return;
    }

    setTasks([...tasks, task]);
    setNewTask('');
  };

  return (
    <div className="App">
      <h1 className="title">To do list</h1>
      <form className="form" onSubmit={addTask}>
        <input
          type="text"
          className="input"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      {
        tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <div className="task" key={task.id}>
              <input type="checkbox" className="checkbox" checked={task.completed} onChange={() => setTasks(tasks.map((t) => t.id === task.id ? { ...t, completed: !t.completed } : t))} />
              <p className={task.completed ? 'done' : ''}>{task.task}</p>
              <button className="delete" onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}>
                <img src="/public/assets/images/delete.svg" alt="delete" />
              </button>
            </div>
          ))
        ) : (
          <p>No tasks yet. Add one above!</p>
        )
      }
    </div>
  );
}
