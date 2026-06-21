import { useState } from "react";
import type { ImgAsset } from "@/assets/images";

type Props = {
  img: ImgAsset;
  alt: string;
  sizes?: string;
  className?: string;
  eager?: boolean;
  priority?: boolean;
};

/**
 * Optimized image component:
 * - Build-time WebP + responsive srcset (vite-imagetools)
 * - Tiny blurred LQIP shown as background until full image loads
 * - Lazy + async decoding by default
 */
export function Picture({ img, alt, sizes = "100vw", className = "", eager, priority }: Props) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      className={`relative overflow-hidden bg-muted ${className}`}
      style={{
        backgroundImage: `url(${img.thumb})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src={img.src}
        srcSet={img.srcSet}
        sizes={sizes}
        alt={alt}
        width={img.width}
        height={img.height}
        loading={eager ? "eager" : "lazy"}
        decoding={eager ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
