import { Request, Response, Router } from 'express';
import multer from 'multer';
import { PrismaClient } from '@prisma/client';
import path from 'path';

const prisma = new PrismaClient();
const router = Router();

// Set up multer to store files in the 'uploads' directory
            const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Folder where the image will be stored
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = Date.now() + ext; 
    cb(null, filename);
  },
});

const upload = multer({ storage });

router.post('/', upload.single('img'), async (req: Request, res: Response) => {
  const { name, phone } = req.body;
  const img = req.file ? `/uploads/${req.file.filename}` : '';

  try {
    const coach = await prisma.coach.create({
      data: { name, phone, img },
    });
    res.status(201).json(coach);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating coach' });
  }
});

// Get all Coach
router.get('/', async (req: Request, res: Response) => {
  try {
    const coach = await prisma.coach.findMany();
    res.status(200).json(coach); // Send all coach
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching coachs' });
  }
});

// Get a single Coach by ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const coach = await prisma.coach.findUnique({
      where: { id: Number(id) },
    });
    if (coach) {
      res.status(200).json(coach); // Send the coach details
    } else {
      res.status(404).json({ error: 'coach not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching coach' });
  }
});

//update existing coach
router.put('/:id', upload.single('img'), async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, phone } = req.body;
  const img = req.file ? `/uploads/${req.file.filename}` : undefined; // New image path (if uploaded)

  try {
    const coach = await prisma.coach.update({
      where: { id: Number(id) },
      data: { name, phone, img },
    });
    res.status(200).json(coach); // Send the updated coach
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating coach' });
  }
});

// Delete a Coach by ID
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.coach.delete({
      where: { id: Number(id) },
    });
    res.status(200).json({ message: 'Coach deleted successfully' }); // Confirmation message
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting coach' });
  }
});

export default router;
