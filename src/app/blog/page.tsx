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
  title: "Web Design & SEO Tips for Small Businesses | J Medrano Design Blog",
  description:
    "Stay ahead with expert web design, SEO, and marketing insights tailored for small business owners. Learn how to grow your online presence with proven strategies. Read more now!",
  keywords: keywords.join(", "),
  robots: "index, follow",
};

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
            className="bg-white rounded-lg shadow-sm p-6 flex flex-col gap-4"
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
              className="text-2xl font-bold text-secondary-700 hover:text-secondary-600 transition-colors duration-300 hover:underline line-clamp-2"
            >
              {blog.title}
            </Link>
            <p className="text-gray-500 mt-2 text-sm line-clamp-4">
              {blog.excerpt}
            </p>
            <div className="flex items-center text-secondary-600 text-sm">
              <HiClock className="mr-2" />
              <p className="text-secondary-600 flex-1" title={publishedDate}>
                {publishedDate}
              </p>

              <Link
                href={`/blog-post/${blog.slug.current}`}
                className="text-secondary-600 hover:text-secondary-500 transition-colors duration-300 hover:underline"
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
