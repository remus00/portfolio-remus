import { Contacts } from '@/types/contacts';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { sendEmail } from './api';

export const useSendEmail = () => {
    return useMutation({
        mutationFn: (data: Contacts) => sendEmail(data),
        onSuccess: () => {
            toast.success('Email sent successfully');
        },
        onError: () => {
            toast.error('Something went wrong');
        },
    });
};
