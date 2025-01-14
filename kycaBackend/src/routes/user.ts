import { Router, Request, Response } from 'express';
import { PrismaClient, User as PrismaUser } from '@prisma/client';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { error } from 'console';

const user = Router();
const prisma = new PrismaClient();
dotenv.config();

const userSchema = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(8)
});

interface User {
  id: number;
  name: string;
  email: string;
}

async function verifyUser(email: string, password: string): Promise<User | null> {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: email
      }
    });

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      return { id: user.id, name: user.name, email: user.email };
    } else {
      return null;
    }
  } catch (e) {
    console.error('Error in verifying user', e);
    return null;
  }
}

async function insertUser(name: string, email: string, password: string): Promise<User | null> {
  try {
    const saltRounds = Number(process.env.saltRounds);
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      }
    });

    return { id: newUser.id, name: newUser.name, email: newUser.email };
  } catch (e) {
    console.error('Error in inserting user:', e);
    return null;
  }
}

user.post("/signin", async (req: Request, res: Response):Promise<void> => {
  const { name, email, password } = req.body;
  const inputValidation = userSchema.safeParse({
    name,
    email,
    password
  });

  if (!inputValidation.success) {
     res.status(400).json({ "msg": "InputValidation failed" });
     console.log(inputValidation.error)
     return
  }

  try {
    const userExists = await verifyUser(email, password);

    if (userExists) {
        res.json({ "msg": "User already exists" });
      return 
    }

    const createdUser = await insertUser(name, email, password);

    if (createdUser) {
        res.json({ msg: "User successfully created", user: createdUser });
      return 
    } else {
        res.status(500).json({ "msg": "Error in user creation" });
      return
    }
  } catch (e) {
    console.error('Error during signup:', e);
    res.status(500).json({ "msg": "An error occurred" });
    return 
  }
});

user.post('/signup',async(req:Request , res:Response):Promise<void>=>{
    const {email,password} = req.body;
    const inputValidation = userSchema.safeParse({
        email,
        password
    })
    if (!inputValidation.success) {
        res.status(400).json({ "msg": "InputValidation failed" });
        console.log(inputValidation.error)
        return
     }
    try{
        const userExists = await verifyUser(email,password);
        if (userExists) {
            res.json({ "msg": "Signed in"  , user:userExists});
          return 
        }
    }
    catch(e)
    {
        res.json({"msg" : "Error in signing up" , error:e})
        return
    }
})

export default user;
