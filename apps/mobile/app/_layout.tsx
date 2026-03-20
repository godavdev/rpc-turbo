import { QueryProvider } from "@/libs/tanstack-query"
import { Stack } from "expo-router"

export default function RootLayout() {
  return (
    <QueryProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </QueryProvider>
  )
}
