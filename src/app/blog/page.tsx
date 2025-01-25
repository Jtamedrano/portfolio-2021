import Link from "next/link";
import { PageHeader } from "../../components/PageHeader/PageHeader";

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

  return blogs;
};

export default async function BlogsPage() {
  const blogs = await fetchBlogs();

  return (
    <>
      <PageHeader
        title="Blog Posts & Articles"
        description="Read our latest blog posts and articles on a variety of topics."
      />
      <div className="bg-gradient-to-br from-slate-300 to-slate-400 flex-1">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {(blogs?.data ?? []).map((blog) => (
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
