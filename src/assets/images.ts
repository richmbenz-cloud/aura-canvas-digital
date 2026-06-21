// Centralized optimized image assets via vite-imagetools.
// Each export is { src, srcSet, thumb, width, height } — used by <Picture/>.

import h_src from "./hero.jpg?w=1920&format=webp&as=url";
import h_set from "./hero.jpg?w=640;1024;1600;1920&format=webp&as=srcset";
import h_thumb from "./hero.jpg?w=24&format=webp&blur=8&as=url";

import a_src from "./about.jpg?w=1280&format=webp&as=url";
import a_set from "./about.jpg?w=480;800;1280&format=webp&as=srcset";
import a_thumb from "./about.jpg?w=24&format=webp&blur=8&as=url";

import p1_src from "./project-1.jpg?w=1600&format=webp&as=url";
import p1_set from "./project-1.jpg?w=480;800;1280;1600&format=webp&as=srcset";
import p1_thumb from "./project-1.jpg?w=24&format=webp&blur=8&as=url";

import p2_src from "./project-2.jpg?w=1920&format=webp&as=url";
import p2_set from "./project-2.jpg?w=640;1024;1600;1920&format=webp&as=srcset";
import p2_thumb from "./project-2.jpg?w=24&format=webp&blur=8&as=url";

import p3_src from "./project-3.jpg?w=1600&format=webp&as=url";
import p3_set from "./project-3.jpg?w=480;800;1280;1600&format=webp&as=srcset";
import p3_thumb from "./project-3.jpg?w=24&format=webp&blur=8&as=url";

import p4_src from "./project-4.jpg?w=1920&format=webp&as=url";
import p4_set from "./project-4.jpg?w=640;1024;1600;1920&format=webp&as=srcset";
import p4_thumb from "./project-4.jpg?w=24&format=webp&blur=8&as=url";

import p5_src from "./project-5.jpg?w=1600&format=webp&as=url";
import p5_set from "./project-5.jpg?w=480;800;1280;1600&format=webp&as=srcset";
import p5_thumb from "./project-5.jpg?w=24&format=webp&blur=8&as=url";

import p6_src from "./project-6.jpg?w=1920&format=webp&as=url";
import p6_set from "./project-6.jpg?w=640;1024;1600;1920&format=webp&as=srcset";
import p6_thumb from "./project-6.jpg?w=24&format=webp&blur=8&as=url";

export type ImgAsset = {
  src: string;
  srcSet: string;
  thumb: string;
  width: number;
  height: number;
};

export const hero: ImgAsset = { src: h_src, srcSet: h_set, thumb: h_thumb, width: 1920, height: 1280 };
export const about: ImgAsset = { src: a_src, srcSet: a_set, thumb: a_thumb, width: 1280, height: 1600 };
export const p1: ImgAsset = { src: p1_src, srcSet: p1_set, thumb: p1_thumb, width: 1280, height: 1600 };
export const p2: ImgAsset = { src: p2_src, srcSet: p2_set, thumb: p2_thumb, width: 1920, height: 1080 };
export const p3: ImgAsset = { src: p3_src, srcSet: p3_set, thumb: p3_thumb, width: 1280, height: 1600 };
export const p4: ImgAsset = { src: p4_src, srcSet: p4_set, thumb: p4_thumb, width: 1920, height: 1080 };
export const p5: ImgAsset = { src: p5_src, srcSet: p5_set, thumb: p5_thumb, width: 1280, height: 1600 };
export const p6: ImgAsset = { src: p6_src, srcSet: p6_set, thumb: p6_thumb, width: 1920, height: 1080 };
