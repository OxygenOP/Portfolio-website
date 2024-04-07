import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hassamsohail.com",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/schedule",
      lastModified: new Date(),
    },
  ];
}
