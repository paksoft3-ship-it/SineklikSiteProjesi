import confetti from 'canvas-confetti';

export const triggerCelebration = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
    };

    const interval: any = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        // since particles fall down, start a bit higher than random
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            colors: ['#007BFF', '#FFD700', '#FF69B4', '#00FF00'], // Blue, Gold, Pink, Green
            shapes: ['circle', 'square'],
            scalar: 1.2, // Make them a bit bigger
        });
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            colors: ['#007BFF', '#FFD700', '#FF69B4', '#00FF00'],
            shapes: ['circle', 'square'],
            scalar: 1.2,
        });
    }, 250);
};

export const triggerAddToCartCelebration = (x = 0.5, y = 0.5) => {
    try {
        const defaults = {
            origin: { x, y },
            zIndex: 9999,
            ticks: 40, // Very short life (disappears quickly)
            gravity: 1.2, // Fall slightly faster
            decay: 0.94, // Slow down faster
            startVelocity: 15, // Low starting speed (stays close)
            shapes: ['circle'] as confetti.Shape[],
            colors: ['#007BFF', '#FFD700', '#FF69B4', '#00FF00'],
        };

        const particleCount = 20;

        // Small burst of circles (the main "pop")
        confetti({
            ...defaults,
            particleCount,
            scalar: 0.5, // Tiny
            spread: 80, // Around the button
        });

        // A few "flowers" (stars) for accent
        confetti({
            ...defaults,
            particleCount: 5,
            scalar: 0.7,
            shapes: ['star'],
            colors: ['#FF69B4', '#FFD700'], // Pink & Gold
        });

        // A few "balloons" (slightly larger circles)
        confetti({
            ...defaults,
            particleCount: 3,
            scalar: 0.8,
            shapes: ['circle'],
            colors: ['#FF0000', '#00FF00', '#0000FF'],
            startVelocity: 18, // Slightly higher
        });

    } catch (e) {
        console.error('Celebration effect failed:', e);
    }
};
