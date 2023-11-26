import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const SECRET = 'AUTH_SeCR3T';

export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    const token = authHeader?.split(" ")[1];
    if (token) {
        jwt.verify(token, SECRET, (err, data) => {
            if (err) return err;
            console.log(data);
            console.log(req.body);
            // req.userId = data.userId;
            next();
        })
    } else {
        return res.json({msg: "Unauthorized"})
    }
}
