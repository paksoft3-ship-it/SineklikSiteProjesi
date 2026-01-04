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

export const triggerAddToCartCelebration = (x: number, y: number, w: number, h: number) => {
    try {
        const defaults = {
            zIndex: 9999,
            gravity: 1.5, // Slightly heavier to keep them close
            decay: 0.92,
            startVelocity: 15,
            shapes: ['star', 'circle'] as confetti.Shape[],
            colors: ['#FF0000', '#FF1493', '#FF69B4'], // Red and Pink only
            scalar: 0.8,
            ticks: 50
        };

        const hw = w / 2;
        const hh = h / 2;

        // Function to fire a small dot from a specific point
        const fireDot = (ox: number, oy: number, angle: number, extraOpts = {}) => {
            confetti({
                ...defaults,
                particleCount: 2,
                origin: { x: ox, y: oy },
                spread: 10,
                angle: angle,
                ...extraOpts
            });
        };

        // Fire along the Top Edge
        const topSteps = 12;
        for (let i = 0; i <= topSteps; i++) {
            setTimeout(() => {
                const ratio = i / topSteps;
                const ox = (x - hw) + (w * ratio);
                const oy = y - hh;

                // Mostly stars for that "sparkle" look
                const isCircle = Math.random() > 0.7;

                let opts: any = {};
                if (!isCircle) opts = { shapes: ['star'], scalar: 1.0 };
                else opts = { shapes: ['circle'], scalar: 0.6 };

                fireDot(ox, oy, 90, opts);
            }, i * 15);
        }

        // Fire along Side Edges
        const sideSteps = 8;
        for (let i = 0; i <= sideSteps; i++) {
            setTimeout(() => {
                const ratio = i / sideSteps;
                const oy = (y - hh) + (h * ratio);

                // Left side
                fireDot(x - hw, oy, 135, { startVelocity: 10 });

                // Right side
                fireDot(x + hw, oy, 45, { startVelocity: 10 });
            }, i * 20);
        }

    } catch (e) {
        console.error('Celebration effect failed:', e);
    }
};
