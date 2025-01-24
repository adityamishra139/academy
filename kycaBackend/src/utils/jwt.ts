import jwt from 'jsonwebtoken';

const SECRET_KEY = 'ahsGFDGHIFHGVBHVXCIUYtEGOWDDCYgoehwfgdoQ8I37640E98  27YFIUAHSPOzviJUGOZw&g6FYHVUSVGCJZHVI3UW74  0R8UFYOJCVGBJVHsbvLFHLBAJHFGBPVKU'; 
// Generate a token
export const generateToken = (payload: object, expiresIn: string = '15s'): string => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

// Verify a token
export const verifyToken = (token: string): any => {
  return jwt.verify(token, SECRET_KEY);
};
