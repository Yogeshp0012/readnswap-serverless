import { Injectable } from '@nestjs/common';
import { verify, TokenExpiredError, JsonWebTokenError } from 'jsonwebtoken';
import { TokenPayload } from 'src/token-payload/token-payload.interface';

@Injectable()
export class AuthService {

    private readonly secret: string = process.env.SECRET_KEY || 'randomsecretkey';

    /**
 * Verifies a JWT token using the secret stored in the .env file.
 * @param token The JWT token to be verified.
 * @returns The decoded payload if the token is valid, or null if the token is invalid.
 */
    verifyToken(token: string): boolean {
        try {
            const decoded = verify(token, this.secret) as TokenPayload;
            if (decoded.exp < Date.now() / 1000) {
                throw new TokenExpiredError('Token has expired', new Date(decoded.exp * 1000));
            }
            if (!decoded.username || !decoded.email) {
                throw new Error('Token is missing the expected payload');
            }
            return true;
        } catch (err) {
            if (err instanceof TokenExpiredError) {
                throw err;
            }
            if (err instanceof JsonWebTokenError) {
                throw new JsonWebTokenError('Invalid token');
            }
            throw err;
        }
    }
}
