import { LOCATIONS } from "../../constants/nav";
import { fetchBlogs } from "../../lib/blogs";

export const runtime = "edge";

const baseUrl = "https://jtamedrano.com";

export async function GET() {
  const staticRoutes = [
    {
      loc: "/",
      lastmod: "2025-01-03",
      priority: 1.0,
    },
    {
      loc: "/contact",
      lastmod: "2025-01-03",
      priority: 0.8,
    },
    {
      loc: "/blog",
      lastmod: "2025-01-24",
      priority: 0.8,
    },
    {
      loc: "/service-bundles",
      lastmod: "2025-01-24",
      priority: 0.8,
    },
    {
      loc: "/services",
      lastmod: "2025-01-03",
      priority: 0.8,
    },
  ];

  const blogs = await fetchBlogs();

  const blogRoutes = blogs.map((blog) => {
    const lastmod = new Date(blog.publishedAt).toISOString().split("T")[0];

    return {
      loc: `/blog-post/${blog.slug}`,
      lastmod,
      priority: 0.6,
    };
  });

  const locationRoutes = LOCATIONS.map((location) => {
    return {
      loc: `/locations/${location.slug}`,
      lastmod: "2025-01-27",
      priority: 0.6,
    };
  });

  const urls = [...staticRoutes, ...blogRoutes, ...locationRoutes]
    .map(
      (route) => `
	<url>
		<loc>${baseUrl}${route.loc}</loc>
		<lastmod>${route.lastmod}</lastmod>
		<priority>${route.priority}</priority>
	</url>
	`
    )
    .join("");

  const sitemap = `
	<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		${urls}
	</urlset>
	`;

  return new Response(sitemap.trim(), {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
