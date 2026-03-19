import { oc } from "@orpc/contract"
import z from "zod"

const todoSchema = z.object({
  id: z.string(),
  name: z.string(),
  completed: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

const listTodosContract = oc.output(z.array(todoSchema))

const createTodoContract = oc
  .input(
    z.object({
      name: z.string(),
    }),
  )
  .output(todoSchema)

const updateTodoContract = oc
  .input(
    z.object({
      id: z.string(),
      name: z.string().optional(),
      completed: z.boolean().optional(),
    }),
  )
  .output(todoSchema)

const deleteTodoContract = oc
  .input(
    z.object({
      id: z.string(),
    }),
  )
  .output(todoSchema)

export const todosContract = {
  list: listTodosContract,
  create: createTodoContract,
  update: updateTodoContract,
  delete: deleteTodoContract,
}
