import React from "react";

// Catppuccin color mapping for inline styles (fallback for boxShadow)
const catppuccinColors: Record<string, string> = {
  mauve: "#c6a0f6",
  blue: "#8aadf4",
  pink: "#f5bde6",
  peach: "#f5a97f",
  lavender: "#b7bdf8",
};

const blobs = [
  {
    className: "animate-nebulaBlob1",
    style: {
      left: "20%",
      top: "10%",
      width: "60vw",
      height: "25vw",
      background: "mauve",
      opacity: 0.5,
      blur: 6,
      boxShadow: "0 0 120px 60px",
    },
  },
  {
    className: "animate-nebulaBlob2",
    style: {
      left: "40%",
      top: "20%",
      width: "30vw",
      height: "12vw",
      background: "blue",
      opacity: 0.7,
      blur: 10,
      boxShadow: "0 0 80px 40px",
    },
  },
  {
    className: "animate-nebulaBlob3",
    style: {
      left: "30%",
      top: "30%",
      width: "18vw",
      height: "8vw",
      background: "pink",
      opacity: 0.4,
      blur: 14,
      boxShadow: "0 0 60px 30px",
    },
  },
];

const NebulaCloud: React.FC = React.memo(() => {
  return (
    <>
      {/* SVG filter definition (hidden) */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <filter id="nebula-filter" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".01"
            numOctaves="4"
            seed="8517"
            result="turb"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turb"
            scale="120"
            xChannelSelector="R"
            yChannelSelector="G"
          />
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </svg>

      {/* Nebula blobs */}
      <div className="absolute left-[55%] top-[18%] w-[80vw] h-[40vw] -translate-x-1/2 pointer-events-none  z-10">
        {blobs.map((blob, i) => (
          <div
            key={i}
            className={`absolute ${blob.className}`}
            style={{
              left: blob.style.left,
              top: blob.style.top,
              width: blob.style.width,
              height: blob.style.height,
              background: `rgb(var(--ctp-${blob.style.background}))`,
              opacity: blob.style.opacity,
              borderRadius: "50%",
              filter: `url(#nebula-filter) blur(${blob.style.blur}px)`,
              boxShadow: `${blob.style.boxShadow} ${
                catppuccinColors[blob.style.background]
              }`,
            }}
          />
        ))}
      </div>
    </>
  );
});

export default NebulaCloud;
