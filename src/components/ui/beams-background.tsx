import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedGradientBackgroundProps {
    id?: string;
    className?: string;
    children?: React.ReactNode;
    intensity?: "subtle" | "medium" | "strong";
}

interface Beam {
    x: number;
    y: number;
    width: number;
    length: number;
    angle: number;
    speed: number;
    opacity: number;
    hue: number;
    saturation: number;
    lightness: number;
    pulse: number;
    pulseSpeed: number;
}

// Deep purple & near-black hue palette
// Purple hues sit around 270–300deg on the color wheel
function createBeam(width: number, height: number): Beam {
    const angle = -35 + Math.random() * 10;
    // 40% near-black, 60% deep purple — purple dominates
    const isBlack = Math.random() < 0.4;
    const hue = 270 + Math.random() * 30;           // 270–300 (violet-purple range)
    const saturation = isBlack
        ? 20 + Math.random() * 20                   // 20–40% — near-black
        : 65 + Math.random() * 30;                  // 65–95% — vivid deep purple
    const lightness = isBlack
        ? 5 + Math.random() * 8                     // 5–13% — almost black
        : 28 + Math.random() * 22;                  // 28–50% — rich deep purple
    return {
        x: Math.random() * width * 1.5 - width * 0.25,
        y: Math.random() * height * 1.5 - height * 0.25,
        width: 60 + Math.random() * 80,
        length: height * 2.5,
        angle,
        speed: 0.6 + Math.random() * 1.2,
        opacity: isBlack
            ? 0.12 + Math.random() * 0.12           // subtle for blacks
            : 0.35 + Math.random() * 0.30,          // strong for purples
        hue,
        saturation,
        lightness,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
    };
}

export function BeamsBackground({
    id,
    className,
    children,
    intensity = "strong",
}: AnimatedGradientBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const beamsRef = useRef<Beam[]>([]);
    const animationFrameRef = useRef<number>(0);
    const MINIMUM_BEAMS = 20;

    const opacityMap = {
        subtle: 0.7,
        medium: 0.85,
        strong: 1,
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const updateCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);

            const totalBeams = MINIMUM_BEAMS * 1.5;
            beamsRef.current = Array.from({ length: totalBeams }, () =>
                createBeam(canvas.width, canvas.height)
            );
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);

        function resetBeam(beam: Beam, index: number, totalBeams: number) {
            if (!canvas) return beam;

            const column = index % 3;
            const spacing = canvas.width / 3;

            beam.y = canvas.height + 100;
            beam.x =
                column * spacing +
                spacing / 2 +
                (Math.random() - 0.5) * spacing * 0.5;
            const isBlack = Math.random() < 0.4;
            beam.width = 120 + Math.random() * 100;
            beam.speed = 0.5 + Math.random() * 0.4;
            beam.hue = 270 + ((index * 30) / totalBeams);
            beam.saturation = isBlack ? 20 + Math.random() * 20 : 65 + Math.random() * 30;
            beam.lightness  = isBlack ? 5  + Math.random() * 8  : 28 + Math.random() * 22;
            beam.opacity    = isBlack ? 0.12 + Math.random() * 0.12 : 0.35 + Math.random() * 0.30;
            return beam;
        }

        function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
            ctx.save();
            ctx.translate(beam.x, beam.y);
            ctx.rotate((beam.angle * Math.PI) / 180);

            const pulsingOpacity =
                beam.opacity *
                (0.8 + Math.sin(beam.pulse) * 0.2) *
                opacityMap[intensity];

            const { hue, saturation, lightness } = beam;

            const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
            gradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness}%, 0)`);
            gradient.addColorStop(0.1, `hsla(${hue}, ${saturation}%, ${lightness}%, ${pulsingOpacity * 0.5})`);
            gradient.addColorStop(0.4, `hsla(${hue}, ${saturation}%, ${lightness}%, ${pulsingOpacity})`);
            gradient.addColorStop(0.6, `hsla(${hue}, ${saturation}%, ${lightness}%, ${pulsingOpacity})`);
            gradient.addColorStop(0.9, `hsla(${hue}, ${saturation}%, ${lightness}%, ${pulsingOpacity * 0.5})`);
            gradient.addColorStop(1, `hsla(${hue}, ${saturation}%, ${lightness}%, 0)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
            ctx.restore();
        }

        function animate() {
            if (!canvas || !ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.filter = "blur(22px)";

            const totalBeams = beamsRef.current.length;
            beamsRef.current.forEach((beam, index) => {
                beam.y -= beam.speed;
                beam.pulse += beam.pulseSpeed;

                if (beam.y + beam.length < -100) {
                    resetBeam(beam, index, totalBeams);
                }

                drawBeam(ctx, beam);
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [intensity]);

    return (
        <div
            id={id}
            className={cn(
                "relative min-h-screen w-full overflow-hidden",
                "bg-[#0d0010]",  /* very dark purple base instead of pure black */
                className
            )}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0"
                style={{ filter: "blur(8px)" }}
            />

            {/* Lighter dark overlay so purple beams breathe */}
            <div className="absolute inset-0 bg-black/20" />

            <motion.div
                className="absolute inset-0 bg-purple-950/10"
                animate={{
                    opacity: [0.1, 0.25, 0.1],
                }}
                transition={{
                    duration: 10,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                }}
                style={{
                    backdropFilter: "blur(50px)",
                }}
            />

            {/* Content slot — renders children or nothing */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
}
