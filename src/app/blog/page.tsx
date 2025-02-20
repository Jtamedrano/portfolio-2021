import Link from "next/link";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { HiClock } from "react-icons/hi2";
import { fetchBlogs, fetchSanityImgUrl } from "../../lib/blogs";
import { Suspense } from "react";
import Image from "next/image";

const keywords = [
  "Custom Web Development",
  "Small Business Solutions",
  "React Development",
  "Next.js Applications",
  "Strapi CMS",
  "Scalable Web Solutions",
  "Enterprise App Development",
  "Responsive Design",
  "User Experience",
  "Technology Trends",
  "Free Consultation",
  "Web Design Insights",
];

export const metadata = {
  title:
    "Small Business Web Design, SEO, and Marketing Insights | J Medrano Design LLC",
  description:
    "Stay ahead with expert web design, SEO, and marketing insights tailored for small business owners. Learn how to grow your online presence with proven strategies. Read more now!",
  keywords: keywords.join(", "),
  robots: "index, follow",
};

export const dynamic = "force-dynamic";

export default async function BlogsPage() {
  const blogs = await fetchBlogs();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {blogs.map((blog, index) => {
        const featuredImageUrl = blog.featuredImage
          ? fetchSanityImgUrl(blog.featuredImage)?.width(500).height(150).url()
          : null;

        if (!blog || !blog.slug?.current) {
          return null;
        }

        const publishedDate = new Date(blog._updatedAt).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        );

        return (
          <div
            key={blog._id}
            className="bg-gray-200 dark:bg-slate-600 rounded-lg shadow-lg p-6 flex flex-col gap-4 border "
          >
            {featuredImageUrl && (
              <Image
                src={featuredImageUrl}
                width={500}
                height={150}
                alt={blog.title || " "}
              />
            )}
            <Link
              href={`/blog-post/${blog.slug.current}`}
              className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors duration-300 hover:underline line-clamp-2"
            >
              {blog.title}
            </Link>
            <p className="dark:text-gray-200 mt-2 text-sm line-clamp-4">
              {blog.excerpt}
            </p>
            <div className="flex items-center dark:text-secondary-200 text-sm">
              <HiClock className="mr-2" />
              <p
                className="dark:text-secondary-200 flex-1"
                title={publishedDate}
              >
                {publishedDate}
              </p>

              <Link
                href={`/blog-post/${blog.slug.current}`}
                className="dark:text-secondary-200 underline hover:text-blue-500 transition-colors duration-300 hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
