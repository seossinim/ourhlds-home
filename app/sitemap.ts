import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ourhlds.com",
      lastModified: new Date(),
    },
  ];
}