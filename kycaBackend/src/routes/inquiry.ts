import { Request,Response,Router } from 'express';
import authenticate from '../middlewares/authenticate';
import { prisma } from '../pooler';

 const router = Router();

// Create a new inquiry
router.post('/',authenticate, async (req: Request, res: Response) => {
  const { name, email, message, phone } = req.body;

  try {
    const inquiry = await prisma.inquiry.create({
      data: { name, email, message, phone },
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
router.delete('/:id',authenticate, async (req, res) => {
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
