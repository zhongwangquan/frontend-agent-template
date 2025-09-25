import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import imgData from "../../img.json";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 图片信息接口
interface ImageInfo {
  filename: string;
  path: string;
  category: string;
  type: string;
  tags: string[];
  description: string;
  people: string[];
  style: string;
  color_scheme: string;
  theme: string;
  // features: {
  //   setting: string;
  //   equipment?: string;
  //   composition?: string;
  //   activity: string;
  //   mood: string;
  // };
}

// 获取随机图片的方法
export function getImageByIdentifier(identifier?: string): {
  src: string;
  info: ImageInfo;
} {
  const images = imgData.images;

  // 如果没有图片数据，返回占位图片
  if (!images || images.length === 0) {
    return {
      src: "https://picsum.photos/800/600",
      info: {
        filename: "placeholder.jpg",
        path: "placeholder.jpg",
        category: "placeholder",
        type: "placeholder",
        tags: ["placeholder"],
        description: "Placeholder image",
        people: [],
        style: "placeholder",
        color_scheme: "neutral",
        theme: "placeholder",
        // features: {}
      },
    };
  }

  // 如果没有传入identifier，返回随机图片
  if (!identifier) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
    return {
      src: `/images/${selectedImage.path}`,
      info: selectedImage,
    };
  }

  const identifierLower = identifier.toLowerCase();

  // 1. 精确匹配文件名
  for (const img of images) {
    if (img.filename === identifier) {
      return {
        src: `/images/${img.path}`,
        info: img,
      };
    }
  }

  // 2. 模糊匹配文件名（不区分大小写）
  for (const img of images) {
    if (img.filename.toLowerCase().includes(identifierLower)) {
      return {
        src: `/images/${img.path}`,
        info: img,
      };
    }
  }

  // 3. 标签匹配
  for (const img of images) {
    const tags = img.tags || [];
    for (const tag of tags) {
      if (tag.toLowerCase().includes(identifierLower)) {
        return {
          src: `/images/${img.path}`,
          info: img,
        };
      }
    }
  }

  // 4. 类别匹配
  for (const img of images) {
    if (img.category && img.category.toLowerCase() === identifierLower) {
      return {
        src: `/images/${img.path}`,
        info: img,
      };
    }
  }

  // 5. 人物匹配
  for (const img of images) {
    const people = img.people || [];
    for (const person of people) {
      if (person.toLowerCase().includes(identifierLower)) {
        return {
          src: `/images/${img.path}`,
          info: img,
        };
      }
    }
  }

  // 如果没有找到匹配，返回随机图片
  const randomIndex = Math.floor(Math.random() * images.length);
  const selectedImage = images[randomIndex];
  return {
    src: `/images/${selectedImage.path}`,
    info: selectedImage,
  };
}
