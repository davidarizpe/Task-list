import { useState, useEffect } from "react"



export default function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    let task = window.localStorage.getItem('task');

    if (task) {
      let data = JSON.parse(task); 
      setTasks(data);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('task', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <h1 className="title">To do list</h1>
      {
        tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <div className="task" key={task.id}>
              <p>{task.task}</p>
            </div>
          ))
        ) : (
          <p>No tasks yet. Add one above!</p>
        )
      }
    </div>
  )
}