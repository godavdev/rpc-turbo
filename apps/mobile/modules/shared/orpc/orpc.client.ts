import { RPCLink } from "@orpc/client/fetch"
import { createORPCClient } from "@orpc/client"
import { ContractRouterClient } from "@orpc/contract"
import { type contract } from "@repo/contracts"

const link = new RPCLink({
  url: `http://localhost:3000/api/rpc`,
})

export const orpc: ContractRouterClient<typeof contract> =
  createORPCClient(link)
