import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const SECRET = 'AUTH_SeCR3T';

export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    const token = authHeader?.split(" ")[1];
    if (token) {
        jwt.verify(token, SECRET, (err, user) => {
            if (err) return err;
            console.log(user);
            // req.body.userId = user.userId;
        })
    }
}
