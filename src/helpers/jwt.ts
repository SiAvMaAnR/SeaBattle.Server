import jwt from "jsonwebtoken";
import { NextFunction } from "express";
import { Request, Response } from "express";
import "dotenv/config";

class JWT {
    public static generateAccessToken({ id, login }: {
        id: number,
        login: string
    }): string {
        return jwt.sign({
            user: {
                id: id,
                login: login,
            }
        }, process.env.TOKEN_SECRET_JWT, { expiresIn: process.env.LIFETIME_JWT });
    }

    public static authenticateToken(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return res.sendStatus(401);
        }

        jwt.verify(token, process.env.TOKEN_SECRET_JWT as string, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req["user"] = user;
            next();
        })
    }
}

export default JWT;