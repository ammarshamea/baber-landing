import Image from "next/image";

/**
 * Nivx-logo.
 * Wil je een ander logo? Vervang de bestanden in `public/brand/`
 * (nivx-white.svg voor donkere achtergronden, nivx-color.svg voor lichte).
 */
export default function Logo({
  variant = "white",
  className = "",
  width = 118,
  height = 30,
}: {
  variant?: "white" | "color";
  className?: string;
  width?: number;
  height?: number;
}) {
  const src = variant === "white" ? "/brand/nivx-white.svg" : "/brand/nivx-color.svg";
  return (
    <Image
      src={src}
      alt="Nivx"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
