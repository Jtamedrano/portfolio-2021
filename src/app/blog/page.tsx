import Link from "next/link";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { HiClock } from "react-icons/hi2";

const fetchBlogs = async () => {
  const blogs = await fetch("http://localhost:3000/api/blog", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res !== undefined && res.status !== 200) {
        throw new Error("Failed to fetch blog posts");
      }

      return res.json();
    })
    .catch((error) => {
      console.error("Error fetching blog posts", error);
    });

  return blogs.data;
};

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
    "J Medrano Design Blog | Insights on Custom Web Development and Technology",
  description:
    "Explore expert insights and case studies on custom web development, scalable solutions, and technology trends. Discover how J Medrano Design empowers small businesses with tailored web solutions using React, Next.js, and Strapi CMS. Schedule a free consultation today!",
  keywords: keywords.join(", "),
  canonical: "https://jtamedrano.com/blog",
  robots: "index, follow",
};

export default async function BlogsPage() {
  const blogs = await fetchBlogs();

  const blogArray = Array(blogs.length < 6 ? 6 : blogs.length)
    .fill(null)
    .map((_, index) => {
      return blogs[index];
    });

  return (
    <>
      <PageHeader
        title="Blog Posts & Articles"
        description="Read our latest blog posts and articles on a variety of topics."
      />
      <div className="bg-gradient-to-br from-slate-300 to-slate-400 flex-1">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogArray.map((blog, index) =>
              blog ? (
                <div
                  key={blog.id}
                  className="bg-white rounded-lg shadow-sm p-6 flex flex-col gap-4"
                >
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-2xl font-bold text-secondary-700 hover:text-secondary-600 transition-colors duration-300 hover:underline"
                  >
                    {blog.title}
                  </Link>
                  <p className="text-gray-500 mt-2 text-sm line-clamp-5">
                    {blog.excerpt}
                  </p>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-secondary-600 hover:text-secondary-500 transition-colors duration-300 hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              ) : (
                <div
                  key={`coming-soon-${index}`}
                  className="bg-gray-200 rounded-lg shadow-sm p-6 flex flex-col items-center justify-center gap-4"
                >
                  {/* Coming Soon */}
                  <p className="text-2xl font-bold text-secondary-700">
                    Coming Soon
                  </p>
                  <HiClock className="text-4xl text-gray-500" />
                  <p className="text-gray-500 mt-2 text-sm">
                    Check back soon for more blog posts.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
