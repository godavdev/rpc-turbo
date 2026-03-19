import { createORPCClient } from "@orpc/client"
import { RPCLink } from "@orpc/client/fetch"
import {
  type ContractRouterClient,
  type InferContractRouterInputs,
  type InferContractRouterOutputs,
} from "@orpc/contract"
import { contract } from "@repo/contracts"

const link = new RPCLink({
  url: `http://localhost:3000/api/rpc`,
})

export const orpc: ContractRouterClient<typeof contract> =
  createORPCClient(link)

export type Inputs = InferContractRouterInputs<typeof contract>
export type Outputs = InferContractRouterOutputs<typeof contract>
