import { LOCATIONS } from "../../constants/nav";
import { fetchBlogs, serverFetchBlogs } from "../../lib/blogs";

export const runtime = "edge";

const baseUrl = "https://www.jtamedrano.com";
const defaultChangeFreq = "weekly";

export async function GET() {
  const newRenderDate = new Date().toISOString().split("T")[0];
  const staticRoutes = [
    {
      loc: "/",
      lastmod: newRenderDate,
      priority: 1.0,
    },
    {
      loc: "/contact",
      lastmod: newRenderDate,
      priority: 0.8,
    },
    {
      loc: "/blog",
      lastmod: newRenderDate,
      priority: 0.8,
    },
    {
      loc: "/services",
      lastmod: newRenderDate,
      priority: 0.8,
    },
    {
      loc: "/services/websites-for-landscapers",
      lastmod: newRenderDate,
      priority: 0.8,
    },
  ];

  const blogs = await serverFetchBlogs();

  const blogRoutes = blogs.reduce<
    {
      loc: string;
      lastmod: string;
      priority: number;
    }[]
  >((acc, blog) => {
    if (!blog.slug?.current) {
      return acc;
    }

    const lastmod = new Date(blog._updatedAt).toISOString().split("T")[0];

    return [
      ...acc,
      {
        loc: `/blog-post/${blog.slug?.current}`,
        lastmod,
        priority: 0.6,
      },
    ];
  }, []);

  const locationRoutes = LOCATIONS.map((location) => {
    return {
      loc: `/locations/${location.slug}`,
      lastmod: newRenderDate,
      priority: 0.8,
    };
  });

  const urls = [...staticRoutes, ...blogRoutes, ...locationRoutes]
    .map(
      (route) => `
	<url>
		<loc>${baseUrl}${route.loc}</loc>
		<lastmod>${route.lastmod}</lastmod>
		<priority>${route.priority}</priority>
    <changefreq>${defaultChangeFreq}</changefreq>
	</url>
	`
    )
    .join("");

  const sitemap = `
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		${urls}
	</urlset>
	`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
