'use client';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
    contactFormSchema,
    ContactFormSchemaType,
} from '@/validators/contact-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

export const ContactForm = () => {
    const form = useForm<ContactFormSchemaType>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            fullName: '',
            email: '',
            message: '',
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: ContactFormSchemaType) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <div className="w-full flex-col rounded-[32px] bg-card p-8">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl className="space-x-0">
                                        <Input
                                            placeholder="John Doe"
                                            {...field}
                                            error={form.formState.errors.fullName}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="john.doe@example.com"
                                            {...field}
                                            error={form.formState.errors.email}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>How can I help you?</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Type you message..."
                                            className="resize-none"
                                            {...field}
                                            error={form.formState.errors.message}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button>Send a message</Button>
                </form>
            </Form>
        </div>
    );
};
