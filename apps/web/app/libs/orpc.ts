import { todosRouter } from "../data/todos.orpc"
import { os } from "./contract.impl"

export const router = os.router({
  todos: todosRouter,
})
