import { orpc } from "@/feats/shared/orpc/orpc.client"
import { TodosList } from "@/feats/todos/components/todos-list"
import { Todo } from "@/feats/todos/types"
import { useEffect, useState } from "react"
import { Text, View } from "react-native"

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await orpc.todos.list()
        setTodos(data)
      } catch (error) {
        console.error("Error fetching todos:", error)
      }
    }
    fetchData()
  }, [])

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>Todos List</Text>
      <TodosList />
    </View>
  )
}
