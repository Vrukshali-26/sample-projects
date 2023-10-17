import {Request, Response, NextFunction} from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const secretKey = 'SECR3T_KEY';

export function authenticateUser (req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.json({msg: "Unauthorized."});
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(token, secretKey, (err: jwt.VerifyErrors | any, user: JwtPayload | any) => {
        if (err) {
            return res.json({msg: "Unauthorized."});
        }

        // req.userId = user.id;
        next();
    })
}

export default {
    authenticateUser,
    secretKey
}


