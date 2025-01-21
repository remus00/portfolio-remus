'use client';
import { Contacts } from '@/types/contacts';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { sendEmail } from './api';

export const useSendEmail = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: (data: Contacts) => sendEmail(data),
        onSuccess: () => {
            toast.success('Email sent successfully');
            router.push('/thanks');
        },
        onError: () => {
            toast.error('Something went wrong');
        },
    });
};
