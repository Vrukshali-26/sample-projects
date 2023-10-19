import { Router, Request, Response } from "express";
import { verifyUser } from "../middleware/verify.user";
import { Todo } from "../db/todo.db";

const router = Router();

router.post('/todos', verifyUser, async (req: Request, res: Response) => {
    const todo = req.body;

    const newTodo = await new Todo(todo);
    newTodo.save()
    .then((savedTodo) => {
        res.json(savedTodo);
    })
    .catch((err) => {
        res.json({msg: "Failed to create todo"});
    })

    res.json({msg: "Todo created successfully"});
})


export default router;
