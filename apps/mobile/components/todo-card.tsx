import { orpcTQClient, Outputs } from "@/libs/orpc.client"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Pressable, Text } from "react-native"

export const TodoCard = ({
  id,
  name,
  completed,
}: Pick<Outputs["todos"]["list"][0], "id" | "name" | "completed">) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation(
    orpcTQClient.todos.update.mutationOptions({
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: orpcTQClient.todos.key(),
        })
      },
    }),
  )

  const toggleCompleted = async () => {
    mutate({ completed: !completed, id })
  }

  return (
    <Pressable
      style={{
        width: "100%",
        padding: 16,
        backgroundColor: "white",
        borderRadius: 8,
      }}
      onPress={toggleCompleted}
    >
      <Text style={{ fontSize: 18 }}>{name}</Text>
      <Text style={{ color: "gray" }}>
        {completed ? "Completed" : "Incomplete"}
      </Text>
    </Pressable>
  )
}
