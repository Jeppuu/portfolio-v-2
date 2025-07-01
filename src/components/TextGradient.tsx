import React, { useMemo } from "react";

interface TextGradientProps {
  children: React.ReactNode;
  from?: string;
  via?: string;
  to?: string;
  direction?:
    | "to-r"
    | "to-l"
    | "to-t"
    | "to-b"
    | "to-tr"
    | "to-tl"
    | "to-br"
    | "to-bl";
  className?: string;
  animate?: boolean;
}

const TextGradient: React.FC<TextGradientProps> = ({
  children,
  from = "pink",
  via = "mauve",
  to = "blue",
  direction = "to-br",
  className = "",
  animate = true,
}) => {
  const classNames = useMemo(
    () =>
      [
        "text-transparent",
        "bg-clip-text",
        "bg-gradient-size",
        animate ? "animate-gradient" : "",
        `bg-gradient-${direction}`,
        `from-${from}`,
        `via-${via}`,
        `to-${to}`,
        className,
      ]
        .filter(Boolean)
        .join(" "),
    [from, via, to, direction, className, animate]
  );

  return <span className={classNames}>{children}</span>;
};

export default TextGradient;
