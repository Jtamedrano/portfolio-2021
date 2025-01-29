import { Blog } from "../models/cms";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "./sanity/live";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "./sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const strapiUrl =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1337/api";

const BLOGS_QUERY = defineQuery(`*[
      _type == "blog-post" && defined(slug.current)
    ]{_id, title, slug, excerpt, featuredImage, _updatedAt}|order(_updatedAt desc)`);

const BLOG_QUERY = defineQuery(`*[
      _type == "blog-post" && slug.current == $slug
    ]{..., author->}[0]`);

export const serverFetchBlogs = async () => {
  const res = await client.fetch(BLOGS_QUERY);

  return res;
};

export const serverFetchBlog = async (slug: string) => {
  const res = await client.fetch(BLOG_QUERY, { slug });

  return res;
};

export const fetchBlogs = async () => {
  const blogs = await sanityFetch({ query: BLOGS_QUERY });

  return blogs?.data || [];
};

export const fetchSanityImgUrl = (source: SanityImageSource) => {
  const { projectId, dataset } = client.config();
  return projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
};

export const fetchBlogBySlug = async (slug: string) => {
  const blog = await sanityFetch({ query: BLOG_QUERY, params: { slug } });

  return blog?.data;
};
