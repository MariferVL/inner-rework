/**
 * Generates a sitemap for the application.
 * This function returns an array of objects, each representing a URL
 * and its last modified date.
 * The URLs are for the Spanish and English versions of the site.
 * @returns {Array} An array of objects containing URLs and last modified dates.
 */
export default function sitemap() {
  const baseUrl = "https://marifervl.vercel.app";

  return [
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
    },
  ];
}