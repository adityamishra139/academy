import {Router} from 'express'
import {PrismaClient} from '@prisma/client'

const routerA = Router();
const prisma = new PrismaClient();



export default routerA;