import { Text, View } from "react-native"
import { TodoCard } from "./todo-card"
import { orpcTQClient } from "@/libs/orpc.client"
import { useQuery } from "@tanstack/react-query"

export const TodosList = () => {
  const {
    data: todos,
    isError,
    isPending,
  } = useQuery(orpcTQClient.todos.list.queryOptions({ refetchInterval: 10000 }))

  if (isPending) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }
  if (isError) {
    return (
      <View>
        <Text>Error loading todos.</Text>
      </View>
    )
  }

  return (
    <View style={{ width: "100%", gap: 16 }}>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          {...todo}
        />
      ))}
    </View>
  )
}
