import { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb/Breadcrumb";
import { RichTextRenderer } from "../../../components/RichTextRenderer/RichTextRenderer";

const fetchBlogBySlug = async (slug: string) => {
  const blog = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res && res.status !== 200) {
        throw new Error("Failed to fetch blog post");
      }

      return res.json();
    })
    .catch((error) => {
      console.error("Error fetching blog post", error);
    });

  return blog;
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await fetchBlogBySlug(slug);

  return {
    title: blog.title + " | J Medrano Design",
    description: blog.metaDescription,
    keywords: (blog.keywords ?? []).join(", "),
    robots: "index, follow",
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const blog = await fetchBlogBySlug(slug);

  return (
    <>
      <div>
        <div className="container mx-auto pt-12 px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 max-w-5xl mx-auto">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: blog.title, href: `/blog/${blog.slug}` },
              ]}
            />
            <h1 className="text-4xl font-bold text-secondary-700">
              {blog.title}
            </h1>
            <p className="text-gray-500 text-lg">By: {blog.author}</p>
            <p className="text-gray-500 text-sm">{blog.excerpt}</p>
          </div>
          <hr className="my-8 border-t border-gray-200" />
        </div>
      </div>
      <div>
        <div className="container mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <RichTextRenderer richText={blog.body} />
          </div>
        </div>
      </div>
    </>
  );
}
