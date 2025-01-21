import { EmailTemplate } from '@/components/custom/email-template';
import { contactFormSchema } from '@/validators/contact-form-schema';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const parsedBody = contactFormSchema.safeParse({ ...body });

        if (!parsedBody.success) {
            return Response.json(parsedBody.error.message, { status: 400 });
        }

        console.log(body.email);

        const { data, error } = await resend.emails.send({
            from: `${body.fullName} <onboarding@resend.dev>`,
            to: ['info.remusburlacu@gmail.com'],
            subject: 'Mail from portfolio',
            react: EmailTemplate({
                fullName: body.fullName,
                email: body.email,
                message: body.message,
            }) as React.ReactElement,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
