import { Router, Request, Response } from "express";
import secretKey from "../middleware/auth";
import User from "../db/db.todos";

const router = Router();

router.post('/signup', async (req: Request, res: Response) => {
    const {username, password} = req.body;
    const user = await User.findOne({username: username});
})

