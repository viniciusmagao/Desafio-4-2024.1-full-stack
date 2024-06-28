import { Router } from "express";
import { list, createTodo, findTodoById, updateTodo, deleteTodo } from "../repositories/todo.repository";
import createHttpError from "http-errors";
import { TodoCreateSchema, TodoIdSchema } from "../schemas/todo.schema";

const router = Router();

router.get("/", async (req, res) => {
  // Validate input
  const { id } = req.query;

  if (id === undefined) {
    throw new createHttpError.BadRequest("Missing id query parameter");
  }

  // Execute business logic
  const todos = await list();

  // Send response
  return res.status(200).json(todos);
});

router.get("/:id", async (req, res) => {
  // Validate input
  const id = TodoIdSchema.parse(req.params.id);

  // Execute business logic
  const todo = await findTodoById(id);

  if (todo === null) {
    throw new createHttpError.NotFound("Todo not found");
  }

  // Send response
  return res.status(200).json(todo);
});

router.post("/", async (req, res) => {
  // Validate input
  const { title } = TodoCreateSchema.parse(req.body);

  // Execute business logic
  const todo = await createTodo({ title });

  // Send response
  return res.status(201).json(todo);
});

router.put("/:id", async (req, res) => {
  // Validate input
  const id = TodoIdSchema.parse(req.params.id);
  const { title } = TodoCreateSchema.parse(req.body);

  // Execute business logic
  const todo = await updateTodo(id, { title });

  if (todo === null) {
    throw new createHttpError.NotFound("Todo not found");
  }

  // Send response
  return res.status(200).json(todo);
});

router.delete("/:id", async (req, res) => {
  // Validate input
  const id = TodoIdSchema.parse(req.params.id);

  // Execute business logic
  await deleteTodo(id);

  // Send response
  return res.status(204).json();
});

export default router;
