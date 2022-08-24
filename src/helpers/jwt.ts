import jwt from "jsonwebtoken";
import { NextFunction } from "express";
import { Request, Response } from "express";
import "dotenv/config";
import { IJwtUser } from "../services/baseService";

class JWT {
    public static generateToken({ id, login }: IJwtUser): string {
        return jwt.sign({
            data: { id, login }
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
        });
    }


    public static tokenData(token: string): IJwtUser {

        if (!token) {
            return null;
        }

        const payloadB64 = token.split('.')[1];
        const payload = Buffer.from(payloadB64, 'base64');
        const user = JSON.parse(payload.toString('binary'));

        return {
            id: user?.data?.id,
            login: user?.data?.login
        }
    }
}

export default JWT;