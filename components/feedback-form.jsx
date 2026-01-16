'use client';

import { useState } from 'react';
import { Alert } from './alert';
import { Card } from './card';

export function FeedbackForm() {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            setStatus('pending');
            setError(null);
            const myForm = event.target;
            const formData = new FormData(myForm);
            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            if (res.status === 200) {
                setStatus('ok');
            } else {
                setStatus('error');
                setError(`${res.status} ${res.statusText}`);
            }
        } catch (e) {
            setStatus('error');
            setError(`${e}`);
        }
    };

    return (
        <div className="w-full md:max-w-md" style={{ width: 'max(320px, 50vw)', maxWidth: '800px', justifySelf: 'center', marginBottom: '6vw' }}>
            <Card title="Connect with Us">
                <form name="connect-with-us" onSubmit={handleFormSubmit} className="flex flex-col gap-3 align-center" >
                    <input type="hidden" name="form-name" value="connect-with-us" />
                    <input name="name" type="text" placeholder="Name" required className="input" />
                    <input name="email" type="email" placeholder="Email (optional)" className="input" />
                    <input name="message" type="text" placeholder="Message" required className="input" />
                    <button className="btn" type="submit" disabled={status === 'pending'} style={{fontSize: '1rem'}}>
                        Submit
                    </button>
                    {status === 'ok' && <Alert type="success">Submitted!</Alert>}
                    {status === 'error' && <Alert type="error">{error}</Alert>}
                </form>
            </Card>
        </div>
    );
}
