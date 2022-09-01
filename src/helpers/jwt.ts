import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { IJwtUser } from "../services/baseService";
import config from "config";

class JWT {
    public static generateToken({ id, login }: IJwtUser): string {
        return jwt.sign({
            data: { id, login }
        }, config.get("token.secret"), { expiresIn: config.get("token.lifetime") });
    }

    public static authenticateToken(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return res.sendStatus(401);
        }

        jwt.verify(token, config.get("token.secret") as string, (err, user) => {
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