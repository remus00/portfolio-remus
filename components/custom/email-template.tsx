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
    <div>
        <h1 style={{ lineHeight: '36px', fontSize: '30px' }}>
            Hi there <span style={{ color: '#ffaa00' }}>I&apos;m {fullName}</span>!
        </h1>
        <p style={{ fontWeight: 500, color: '#78716c' }}>Email address: {email}</p>
        <p>
            <span style={{ fontWeight: 500, color: '#78716c' }}>Message: </span>
            {message}
        </p>
    </div>
);
