import { z } from 'zod';

const schema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(3).max(255),
  email: z.string().email(),
  password: z.string().min(8).max(255),
})

export default schema;
