import { RPCLink } from "@orpc/client/fetch"
import { createORPCClient, InferClientOutputs } from "@orpc/client"
import { ContractRouterClient } from "@orpc/contract"
import { type contract } from "@repo/contracts"
import Constants from "expo-constants"
import { createTanstackQueryUtils } from '@orpc/tanstack-query'

const link = new RPCLink({
  url: `http://${Constants.expoConfig?.hostUri?.split(":")[0]}:3000/api/rpc`,
})

export const orpc: ContractRouterClient<typeof contract> =
  createORPCClient(link)

export const tqOrpc = createTanstackQueryUtils(orpc)

export type Outputs = InferClientOutputs<typeof orpc>