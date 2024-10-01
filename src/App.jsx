import { useState } from 'react'

export default function App() {
  const [tasks] = useState([])

  return (
    <div className="App">
      <h1 className="title">To do list</h1>
      <main className="main">
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task.id}>
              <p>{task.name}</p>
            </div>
          ))
        ) : (
          <p>No tasks yet. Add one above!</p>
        )}
    </main>
  </div>
  )
}