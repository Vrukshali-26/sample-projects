import { Router, Request, Response } from "express";
import { User} from "../db/todo.db";
import jwt from "jsonwebtoken";
import { SECRET } from "../middleware/verify.user";

const router = Router();

router.post('/signup', async (req: Request, res: Response) => {
    const {username, password} = req.body;

    const user = await User.findOne({username});
    if (!user) {
        const newUser = await new User({username, password});
        newUser.save();
        const token = jwt.sign({username}, SECRET);
        res.json({msg: "User created successfully!", token});

    } else {
        return res.json({msg: "User already exists.."});
    }
})


router.post('/login', async (req: Request, res: Response) => {
    const userBody = req.body;

    const user = await User.findOne(userBody);

    if (!user) {
        return res.json({msg: "User not found"});
    } else {
        const token = jwt.sign({username: userBody.username}, SECRET);
        res.json({msg: "Logged in Successfully!", token});
    }
})


export default router;
