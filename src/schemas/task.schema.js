import { z } from 'zod';

export const taskSchema = z.object({
    title: z.string({
        required_error: 'Title is required',
    }),
    description: z.string({
        required_error: 'Description must be a string',
    }),
    dueDate: z.string().datetime({
        message: "La fecha debe estar en formato ISO válido (yyyy-mm-ddTHH:mm:ssZ)",
    }).optional(), 

    completed: z.boolean().optional(), 
});
