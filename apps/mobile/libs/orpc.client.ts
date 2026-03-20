import { createORPCClient } from "@orpc/client"
import { RPCLink } from "@orpc/client/fetch"
import {
  type ContractRouterClient,
  type InferContractRouterInputs,
  type InferContractRouterOutputs,
} from "@orpc/contract"
import { contract } from "@repo/contracts"
import Constants from "expo-constants"
import { createTanstackQueryUtils } from "@orpc/tanstack-query"

const link = new RPCLink({
  url: `http://${Constants.expoConfig?.hostUri?.split(":")[0] ?? "localhost"}:3000/api/rpc`,
})

export const orpcClient: ContractRouterClient<typeof contract> =
  createORPCClient(link)

export const orpcTQClient = createTanstackQueryUtils(orpcClient)

export type Inputs = InferContractRouterInputs<typeof contract>
export type Outputs = InferContractRouterOutputs<typeof contract>
