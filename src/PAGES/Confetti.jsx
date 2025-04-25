import React, { useEffect } from 'react';

export default function ConfettiBurst() {
    useEffect(() => {
        const canvas = document.createElement('canvas');
        canvas.id = 'confetti-canvas';
        canvas.style.position = 'fixed';
        canvas.style.top = 0;
        canvas.style.left = 0;
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = 9999;
        document.body.appendChild(canvas);

        const confetti = require('canvas-confetti');
        const myConfetti = confetti.create(canvas, { resize: true });

        myConfetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
        });

        const timer = setTimeout(() => {
            canvas.remove();
        }, 1500); // remove after animation

        return () => {
            clearTimeout(timer);
            canvas.remove();
        };
    }, []);

    return null;
}
