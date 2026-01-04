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
            gravity: 0.8, // Floatier
            decay: 0.94,
            startVelocity: 10, // Very Slow start
            shapes: ['circle'] as confetti.Shape[],
            colors: ['#007BFF', '#FFD700', '#FF69B4', '#00FF00', '#FF0000', '#800080'],
            scalar: 0.7,
            ticks: 60
        };

        const hw = w / 2;
        const hh = h / 2;

        // Function to fire a small dot from a specific point
        const fireDot = (ox: number, oy: number, angle: number, extraOpts = {}) => {
            confetti({
                ...defaults,
                particleCount: 3, // More objects total, but small per burst
                origin: { x: ox, y: oy },
                spread: 15, // Tight spread per point
                angle: angle,
                ...extraOpts
            });
        };

        // Fire along the Top Edge (Left to Right)
        const topSteps = 15;
        for (let i = 0; i <= topSteps; i++) {
            setTimeout(() => {
                const ratio = i / topSteps;
                // linear interpolation from (x - hw) to (x + hw)
                const ox = (x - hw) + (w * ratio);
                const oy = y - hh;

                // Randomly mix in stars/balloons
                const isStar = Math.random() > 0.8;
                const isBalloon = Math.random() > 0.9;

                let opts: any = {};
                if (isStar) opts = { shapes: ['star'], scalar: 1.0, colors: ['#FFD700', '#FF69B4'] };
                if (isBalloon) opts = { shapes: ['circle'], scalar: 1.5, colors: ['#FF0000', '#0000FF', '#00FF00'] };

                fireDot(ox, oy, 90, opts); // Upwards
            }, i * 20); // 20ms delay per step -> "Slow" popping
        }

        // Fire along Left and Right Edges (Top to Bottom)
        const sideSteps = 10;
        for (let i = 0; i <= sideSteps; i++) {
            setTimeout(() => {
                const ratio = i / sideSteps;
                // down from top
                const oy = (y - hh) + (h * ratio);

                // Left side
                fireDot(x - hw, oy, 135 + (45 * ratio), { startVelocity: 12 }); // Angle pointing left-ish

                // Right side
                fireDot(x + hw, oy, 45 - (45 * ratio), { startVelocity: 12 }); // Angle pointing right-ish
            }, i * 30); // Slightly slower down the sides
        }

    } catch (e) {
        console.error('Celebration effect failed:', e);
    }
};
