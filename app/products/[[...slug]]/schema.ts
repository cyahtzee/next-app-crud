import { z } from 'zod';

const schema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(3).max(255),
  price: z.number().int().positive(),
})

export default schema;
