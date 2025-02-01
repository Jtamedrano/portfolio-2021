import { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb/Breadcrumb";
import {
  fetchBlogBySlug,
  fetchSanityImgUrl,
  serverFetchBlog,
  serverFetchBlogs,
} from "../../../lib/blogs";
import { Blog } from "../../../models/cms";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import { PortableRichText } from "../../../components/RichTextRenderer/PortableTextItem";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await serverFetchBlog(slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found | J Medrano Design",
      description: "Blog post not found.",
      keywords: "blog, post, not found",
      robots: "noindex, nofollow",
    };
  }

  const blogImage = blog.featuredImage
    ? fetchSanityImgUrl(blog.featuredImage)
        ?.width(1200)
        .height(630)
        .fit("crop")
        .auto("format")
        .url()
    : null;

  return {
    title: blog.title + " | J Medrano Design",
    description: blog.seoDescription,
    keywords: (blog.seoKeywords ?? []).join(", "),
    robots: "index, follow",
    openGraph: {
      title: blog.title,
      description: blog.seoDescription,
      ...(!!blogImage && {
        images: [
          {
            url: blogImage,
            width: 1200,
            height: 630,
            alt: blog.title,
          },
        ],
      }),
    },
  };
}

export async function generateStaticParams() {
  const res = await serverFetchBlogs();

  const slugs = (res ?? []).map((blog) => ({
    slug: blog.slug?.current,
  }));

  return slugs;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await fetchBlogBySlug(slug);

  if (!blog) {
    return notFound();
  }

  const featuredImageUrl = blog.featuredImage
    ? fetchSanityImgUrl(blog.featuredImage)
        ?.width(1200)
        .height(630)
        .fit("crop")
        .auto("format")
        .url()
    : null;

  return (
    <>
      <div>
        <div className="container mx-auto pt-12 px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 max-w-5xl mx-auto">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                {
                  label: blog.title!,
                  href: `/blog-post/${blog.slug!.current}`,
                },
              ]}
            />
            {featuredImageUrl && (
              <Image
                src={featuredImageUrl}
                alt={blog.title!}
                width={1200}
                height={630}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
            )}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-secondary-700">
                {blog.title}
              </h1>
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-lg">By: {blog.author?.name}</p>
                <p className="text-gray-500 text-lg">
                  {new Date(blog._updatedAt).toLocaleDateString()}
                </p>
              </div>
              <p className="text-gray-500 text-sm">{blog.excerpt}</p>
            </div>
          </div>
          <hr className="my-8 border-t border-gray-200" />
        </div>
      </div>
      <div>
        <div className="container mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <PortableRichText items={blog.body} />
            <div className="flex flex-col gap-3 lg:items-start">
              <p className="text-2xl text-secondary-700 font-bold">
                Ask how you can get a free hero section redesign!
              </p>
              <Link
                href="/contact"
                className="text-center bg-secondary-700 text-slate-100 py-2 px-4 rounded-full text-lg font-semibold hover:bg-secondary-800 transition-colors duration-300"
              >
                Get Your Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
