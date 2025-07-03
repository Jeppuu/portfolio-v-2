import type { Config } from "tailwindcss";

const palette = [
  "rosewater",
  "flamingo",
  "pink",
  "mauve",
  "red",
  "maroon",
  "peach",
  "yellow",
  "green",
  "teal",
  "sky",
  "sapphire",
  "blue",
  "lavender",
];

const gradientDirections = [
  "to-r",
  "to-l",
  "to-t",
  "to-b",
  "to-tr",
  "to-tl",
  "to-br",
  "to-bl",
];

function generateGradientSafelist(colors: string[], directions: string[]) {
  const stops = ["from", "via", "to"];
  const classes: string[] = [];

  for (const stop of stops) {
    for (const color of colors) {
      classes.push(`${stop}-${color}`);
    }
  }
  for (const dir of directions) {
    classes.push(`bg-gradient-${dir}`);
  }
  return classes;
}

const accentSafelist = [
  "border-lavender",
  "border-blue",
  "border-pink",
  "border-mauve",
  "hover:ring-lavender",
  "hover:ring-blue",
  "hover:ring-pink",
  "hover:ring-mauve",
  "text-lavender",
  "text-blue",
  "text-pink",
  "text-mauve",
];

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    ...generateGradientSafelist(palette, gradientDirections),
    ...accentSafelist,
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // extend catppuccin palette
        base: "rgb(var(--ctp-base) / <alpha-value>)",
        crust: "rgb(var(--ctp-crust) / <alpha-value>)",
        text: "rgb(var(--ctp-text) / <alpha-value>)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        space: ["var(--font-space_grotesk)", "sans-serif"],
      },
      spacing: {
        hero: "4rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        gradient: "gradientShift 10s ease infinite alternate",
        twinkle: "twinkle 2s ease-in-out infinite",
        nebulaBlob1: "nebulaBlob1 36s ease-in-out infinite alternate",
        nebulaBlob2: "nebulaBlob2 48s ease-in-out infinite alternate",
        nebulaBlob3: "nebulaBlob3 52s ease-in-out infinite alternate",
        marquee: "marquee 24s linear infinite",
        marqueeReverse: "marqueeReverse 24s linear infinite",
        bounceSlow: "bounce 3s infinite",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "1" },
        },
        nebulaBlob1: {
          "0%": { transform: "translateY(0px) scale(1) rotate(0deg)" },
          "100%": { transform: "translateY(-24px) scale(1.04) rotate(2deg)" },
        },
        nebulaBlob2: {
          "0%": { transform: "translateX(0px) scale(1) rotate(0deg)" },
          "100%": { transform: "translateX(32px) scale(1.07) rotate(-2deg)" },
        },
        nebulaBlob3: {
          "0%": { transform: "translateY(0px) scale(1) rotate(0deg)" },
          "100%": { transform: "translateY(18px) scale(1.02) rotate(2deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      backgroundSize: {
        "gradient-size": "300%",
      },
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      defaultFlavour: "macchiato",
      flavours: ["macchiato"],
      prefix: false,
    }),
  ],
};
export default config;
