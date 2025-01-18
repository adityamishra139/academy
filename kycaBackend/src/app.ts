import express, { Application } from 'express';
import { PrismaClient } from '@prisma/client';
import inquiryRoutes from './routes/inquiry';
import userRoutes from './routes/user';
import gemRoutes from './routes/gem';
import cors from 'cors';
import path from 'path';
const app: Application = express();
const prisma = new PrismaClient();
app.use(express.json());
app.use(cors());
app.use('/api/user',userRoutes)
app.use('/api/inquiries',inquiryRoutes);
app.use('/api/gems',gemRoutes);
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.listen(3000, async () => {
  try {
    await prisma.$connect(); 
    console.log('Prisma connected to database');
    console.log('Server running on http://localhost:3000');
  } catch (error) {
    console.error('Error connecting to database:', error);
    process.exit(1);
  }
});
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  console.log('Prisma disconnected');
  process.exit(0);
});