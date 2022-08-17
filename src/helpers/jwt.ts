import jwt from "jsonwebtoken";
import "dotenv/config";


class JWT {
    public generateAccessToken(username): string {
        return jwt.sign(username, process.env.TOKEN_SECRET_JWT, { expiresIn: process.env.LIFETIME_JWT });
    }
}

export default new JWT();