import { createORPCClient } from "@orpc/client"
import { RPCLink } from "@orpc/client/fetch"
import { RouterClient } from "@orpc/server"
import { router } from "./orpc"

const link = new RPCLink({
  url: `http://localhost:3000/api/rpc`,
})

export const orpc: RouterClient<typeof router> = createORPCClient(link)
