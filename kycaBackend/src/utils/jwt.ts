import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY as string
if(!SECRET_KEY)
{
  throw new Error("Secret key not defined")
}
// Generate a token
export const generateToken = (payload: object, expiresIn: number = 3600): string => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

// Verify a token
export const verifyToken = (token: string): any => {
  return jwt.verify(token, SECRET_KEY);
};
