import { TQProvider } from "@/feats/shared/providers/tq-provider"
import { Stack } from "expo-router"

export default function RootLayout() {
  return (
    <TQProvider>
      <Stack />
    </TQProvider>
  )
}
