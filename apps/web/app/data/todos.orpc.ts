import { ORPCError } from "@orpc/server"
import { createTodo, deleteTodo, listTodos, updateTodo } from "./todos.data"
import z from "zod"
import { os } from "../libs/contract.impl"

const listTodosRPC = os.todos.list.handler(listTodos)

const createTodoRPC = os.todos.create.handler(async ({ input: { name } }) => {
  const todo = await createTodo({ name })
  return todo
})

const updateTodoRPC = os.todos.update.handler(
  async ({ input: { id, name, completed } }) => {
    if (!id) {
      throw new ORPCError("BAD_REQUEST")
    }
    return await updateTodo({ id, name, completed })
  },
)

const deleteTodoRPC = os.todos.delete.handler(async ({ input: { id } }) => {
  if (!id) {
    throw new ORPCError("BAD_REQUEST")
  }
  return await deleteTodo({ id })
})

export const todosRouter = {
  list: listTodosRPC,
  create: createTodoRPC,
  update: updateTodoRPC,
  delete: deleteTodoRPC,
}
