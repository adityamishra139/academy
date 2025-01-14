import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

// Create a new inquiry
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const inquiry = await prisma.inquiry.create({
      data: { name, email, message },
    });
    res.status(201).json(inquiry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating inquiry' });
  }
});

// Get all inquiries
router.get('/', async (_req, res) => {
  try {
    const inquiries = await prisma.inquiry.findMany();
    res.status(200).json(inquiries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching inquiries' });
  }
});

// Delete an inquiry
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.inquiry.delete({ where: { id: Number(id) } });
    res.status(200).json({ message: 'Inquiry deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting inquiry' });
  }
});

export default router;
