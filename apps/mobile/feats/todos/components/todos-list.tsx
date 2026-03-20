import { tqOrpc } from "@/feats/shared/orpc/orpc.client"
import { useQuery } from "@tanstack/react-query"
import { Text, View } from "react-native"
import { TodosCard } from "./todos-card"

export const TodosList = () => {
  const { data, error, isPending } = useQuery(
    tqOrpc.todos.list.queryOptions({ refetchInterval: 5000 }),
  )
  if (error) {
    return (
      <View style={{ width: "100%", gap: 16 }}>
        <Text>Error loading todos</Text>
      </View>
    )
  }

  if (isPending) {
    return (
      <View style={{ width: "100%", gap: 16 }}>
        {isPending && <Text>Loading...</Text>}
      </View>
    )
  }

  return (
    <View style={{ width: "100%", gap: 8, alignItems: "center" }}>
      {data.map((todo) => (
        <TodosCard
          key={todo.id}
          id={todo.id}
          name={todo.name}
          completed={todo.completed}
        />
      ))}
    </View>
  )
}
