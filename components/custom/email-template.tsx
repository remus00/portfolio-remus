import * as React from 'react';

interface EmailTemplateProps {
    fullName: string;
    email: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    fullName,
    email,
    message,
}) => (
    <div className="flex flex-col gap-4">
        <h1>Hi there I&apos;m {fullName}!</h1>
        <p>{email}</p>
        <p>{message}</p>
    </div>
);
