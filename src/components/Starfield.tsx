"use client";
import React, { useEffect, useRef } from "react";
import NebulaCloud from "./NebulaCloud";

const STAR_COUNTS = {
  distant: 60,
  mid: 30,
  foreground: 10,
};

const GLOW_COLORS = [
  "rgba(127,90,240,0.25)", // mauve
  "rgba(44,189,251,0.25)", // blue
  "rgba(241,91,181,0.18)", // pink
  "rgba(198,160,246,0.18)", // lavender
  "rgba(120,170,255,0.18)", // sky
];

const randomBetween = ([min, max]: [number, number]) => {
  return Math.random() * (max - min) + min;
};

const Starfield: React.FC = React.memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<any[]>([]);

  const generateStars = (
    count: number,
    sizeRange: [number, number],
    opacityRange: [number, number],
    extraClass: string = ""
  ) =>
    Array.from({ length: count }).map(() => {
      const glowColor =
        GLOW_COLORS[Math.floor(Math.random() * GLOW_COLORS.length)];
      return {
        x: Math.random(),
        y: Math.random(),
        size: randomBetween(sizeRange),
        baseOpacity: randomBetween(opacityRange),
        twinkleSpeed: randomBetween([0.5, 1.5]),
        twinklePhase: Math.random() * Math.PI * 2,
        glowColor,
        className: `${extraClass}`,
      };
    });

  useEffect(() => {
    // Generate stars and store them in the ref
    starsRef.current = [
      ...generateStars(
        STAR_COUNTS.distant,
        [0.3, 0.7],
        [0.08, 0.18],
        "blur-[1px]"
      ),
      ...generateStars(STAR_COUNTS.mid, [0.7, 1.2], [0.15, 0.28]),
      ...generateStars(
        STAR_COUNTS.foreground,
        [1.2, 2.2],
        [0.18, 0.32],
        "blur-[0.5px]"
      ),
    ];

    let animationId: number;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const drawStars = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Resize canvas if needed
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.offsetWidth * dpr;
      const height = canvas.offsetHeight * dpr;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
      }

      ctx.clearRect(0, 0, width, height);

      const now = performance.now() / 1000;

      for (const star of starsRef.current) {
        const opacity = prefersReducedMotion
          ? star.baseOpacity
          : star.baseOpacity +
            0.2 * Math.sin(now * star.twinkleSpeed + star.twinklePhase);

        // Draw blurred glow
        ctx.globalAlpha = Math.max(0, Math.min(1, opacity * 0.5));
        ctx.shadowColor = star.glowColor;
        ctx.shadowBlur = star.size * 8 * dpr; // More blur for glow
        ctx.beginPath();
        ctx.arc(
          star.x * width,
          star.y * height,
          star.size * dpr + star.size * 2 * dpr,
          0,
          2 * Math.PI
        );
        ctx.fillStyle = star.glowColor;
        ctx.fill();
        ctx.restore();

        // Draw star with blur
        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, opacity));
        ctx.shadowColor = "rgba(200,220,255,0.85)";
        ctx.shadowBlur = star.size * 6 * dpr;
        ctx.beginPath();
        ctx.arc(
          star.x * width,
          star.y * height,
          star.size * dpr,
          0,
          2 * Math.PI
        );
        ctx.fillStyle = "rgba(200,220,255,0.85)";
        ctx.fill();
        ctx.restore();
      }
      ctx.globalAlpha = 1;

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(drawStars);
      }
    };
    drawStars();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 w-full h-full overflow-hidden
      bg-gradient-to-b
      from-base via-blue/20 to-crust"
      style={{ pointerEvents: "none" }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          position: "absolute",
          inset: 0,
        }}
      />
      <NebulaCloud />
    </div>
  );
});

export default Starfield;
