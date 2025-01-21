import { Contacts } from '@/types/contacts';
import axios from 'axios';

export const axiosInstace = axios.create({
    baseURL:
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : 'https://remus-burlacu.com',
});

export const sendEmail = async (data: Contacts) => {
    await axiosInstace.post('/api/send', data);
};
