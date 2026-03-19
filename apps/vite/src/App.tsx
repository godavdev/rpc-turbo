import { useEffect, useState } from "react"

import "./App.css"
import { orpc, type Outputs } from "./libs/orcp.client"

function App() {
  const [data, setData] = useState<Outputs["todos"]["list"]>([])
  useEffect(() => {
    const fetchData = async () => {
      const todos = await orpc.todos.list()
      setData(todos)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>
            {todo.name} - {todo.completed ? "Completed" : "Incomplete"}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
