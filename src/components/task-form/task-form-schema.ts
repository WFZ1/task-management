import { z } from 'zod';

export const taskFormSchema = z.object({
    title: z.string().min(2, {
        message: 'Title must be at least 2 characters.',
    }),
    description: z.string().min(1, {
        message: 'Description must be at least 2 characters.',
    }),
    deadline: z.date(),
    priority: z.string(),
});
