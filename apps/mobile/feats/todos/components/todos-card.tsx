import { Text, View } from "react-native"

export const TodosCard = ({
  name,
  completed,
  id,
}: {
  id: string
  name: string
  completed: boolean
}) => {
  return (
    <View
      style={{
        padding: 16,
        backgroundColor: "#f0f0f0",
        borderRadius: 8,
        width: "90%",
      }}
    >
      <Text style={{ fontSize: 18 }}>{name}</Text>
      <Text style={{ color: "#888" }}>
        {completed ? "Completed" : "Pending"}
      </Text>
    </View>
  )
}
