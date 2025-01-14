import express, { Application } from 'express';
import { PrismaClient } from '@prisma/client';
import inquiryRoutes from './routes/inquiry';
import heroRoutes from './routes/hero';

// Initialize Express app
const app: Application = express();
const prisma = new PrismaClient(); // Initialize Prisma Client

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/hero', heroRoutes);

// Start Server
app.listen(3000, async () => {
  try {
    await prisma.$connect(); // Ensure Prisma is connected to the database
    console.log('Prisma connected to database');
    console.log('Server running on http://localhost:3000');
  } catch (error) {
    console.error('Error connecting to database:', error);
    process.exit(1); // Exit if the database connection fails
  }
});

// Graceful shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  console.log('Prisma disconnected');
  process.exit(0);
});
