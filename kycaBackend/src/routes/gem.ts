import { Request, Response, Router } from 'express';
import multer from 'multer';
import { PrismaClient } from '@prisma/client';
import path from 'path';
import fs from 'fs';
const prisma = new PrismaClient();
const router = Router();

const uploadDirectory = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder where the image will be stored
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = Date.now() + ext; // Unique filename based on timestamp
    cb(null, filename);
  },
});

const upload = multer({ storage });

// Create a new Gem with image upload
router.post('/', upload.single('img'), async (req: Request, res: Response) => {
  const { name, team } = req.body;
  const img = req.file ? `/uploads/${req.file.filename}` : ''; // Store image path

  try {
    const gem = await prisma.gem.create({
      data: { name, team, img },
    });
    res.status(201).json(gem); // Send back the created gem
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating gem' });
  }
});

// Get all Gems
router.get('/', async (req: Request, res: Response) => {
  try {
    const gems = await prisma.gem.findMany();
    res.status(200).json(gems); // Send all gems
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching gems' });
  }
});

// Get a single Gem by ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const gem = await prisma.gem.findUnique({
      where: { id: Number(id) },
    });
    if (gem) {
      res.status(200).json(gem); // Send the gem details
    } else {
      res.status(404).json({ error: 'Gem not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching gem' });
  }
});

// Update a Gem by ID
router.put('/:id', upload.single('img'), async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, team } = req.body;
  const img = req.file ? `/uploads/${req.file.filename}` : undefined; // New image path (if uploaded)

  try {
    const gem = await prisma.gem.update({
      where: { id: Number(id) },
      data: { name, team, img },
    });
    res.status(200).json(gem); // Send the updated gem
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating gem' });
  }
});

// Delete a Gem by ID
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.gem.delete({
      where: { id: Number(id) },
    });
    res.status(200).json({ message: 'Gem deleted successfully' }); // Confirmation message
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting gem' });
  }
});

export default router;
