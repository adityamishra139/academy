import { Router, Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';
import z from 'zod';

const routerA = Router();
const prisma = new PrismaClient();

// Define Zod schema for URL validation
const urlSchema = z.object({
  facebook: z.string().url(),
  instagram: z.string().url(),
  whatsapp: z.string().url(),
});

// Define route to update links
routerA.put('/links/:id', async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { facebook, instagram, whatsapp } = req.body;

  // Validate input using Zod schema
  const inputValidation = urlSchema.safeParse({ facebook, instagram, whatsapp });
  if (!inputValidation.success) {
    res.status(400).json({
      message: 'Invalid URL format',
      errors: inputValidation.error.errors,
    });
    return;
  }

  try {
    // Update the link in the database
    const updatedLink = await prisma.link.update({
      where: { id: parseInt(id) },
      data: { facebook, instagram, whatsapp },
    });

    // Return the updated link as the response
    res.status(200).json(updatedLink);
  } catch (error) {
    console.error('Error updating link:', error);
    res.status(500).json({ message: 'Failed to update the link' });
  }
});

export default routerA;
