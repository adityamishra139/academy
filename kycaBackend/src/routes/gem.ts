import { Request, Response, Router } from 'express';
import multer from 'multer';
import path from 'path';
import authenticate from '../middlewares/authenticate';
import { prisma } from '../pooler';

const router = Router();

// Set up multer to store files in the 'uploads' directory
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
router.post('/', authenticate,upload.single('img'), async (req: Request, res: Response) => {
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
router.delete('/:id', authenticate,async (req: Request, res: Response) => {
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
