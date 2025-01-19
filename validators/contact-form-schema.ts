import { z } from 'zod';

export const contactFormSchema = z.object({
    fullName: z.string().min(3, { message: 'The name should be at least 3 characters' }),
    email: z
        .string({ invalid_type_error: 'Enter a valid email' })
        .email({ message: 'Enter a valid email' }),
    message: z
        .string()
        .min(10, { message: 'Your message should be at least 10 characters' }),
});

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
