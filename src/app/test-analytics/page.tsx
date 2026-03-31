'use client';

import { useState } from 'react';
import * as gtag from '../../lib/gtag';

export default function TestAnalytics() {
    const [eventCount, setEventCount] = useState(0);

    const testEvents = [
        {
            name: 'Button Click',
            action: () => gtag.event({
                action: 'click',
                category: 'test',
                label: 'test-button',
                value: 1,
            }),
        },
        {
            name: 'Form Submit',
            action: () => gtag.event({
                action: 'submit',
                category: 'form',
                label: 'test-form',
            }),
        },
        {
            name: 'Purchase Event',
            action: () => {
                if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'purchase', {
                        transaction_id: `test_${Date.now()}`,
                        value: 29.99,
                        currency: 'USD',
                        items: [{
                            item_id: 'test_product',
                            item_name: 'Test Product',
                            category: 'test',
                            quantity: 1,
                            price: 29.99,
                        }],
                    });
                }
            },
        },
    ];

    const handleTestEvent = (eventAction: () => void, eventName: string) => {
        eventAction();
        setEventCount(prev => prev + 1);
        console.log(`✅ Fired: ${eventName}`);
    };

    return (
        <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
            <h1>Analytics Testing Page</h1>
            <p>Events fired: {eventCount}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
                {testEvents.map((event, index) => (
                    <button
                        key={index}
                        onClick={() => handleTestEvent(event.action, event.name)}
                        style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: '#0070f3',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                    >
                        Test {event.name}
                    </button>
                ))}
            </div>

            <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f5f5f5' }}>
                <h3>Instructions:</h3>
                <ol>
                    <li>Open browser console (F12)</li>
                    <li>Click the buttons above</li>
                    <li>Check console for GA event logs</li>
                    <li>In production, check Google Analytics Real-time reports</li>
                </ol>
            </div>
        </div>
    );
}