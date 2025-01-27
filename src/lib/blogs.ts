import axios, { AxiosRequestConfig } from "axios";
import { Blog, CMSResponse } from "../models/cms";

const strapiUrl =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1337/api";

export const fetchBlogs = async (config?: AxiosRequestConfig) => {
  try {
    const res = await axios
      .get<CMSResponse<Blog[]>>(`${strapiUrl}/blog-posts`, config)
      .then((res) => res.data)
      .catch((error) => {
        throw new Error("Failed to fetch");
      });

    return res.data;
  } catch (error) {
    throw new Error("Error fetching blog posts");
  }
};

export const fetchBlogBySlug = async (slug: string) => {
  try {
    const res = await axios
      .get(`${strapiUrl}/blog-posts?filters[slug][$eq]=${slug}`)
      .then((res) => res.data)
      .catch((error) => {
        throw new Error("Failed to fetch blog posts");
      });

    const blog = res?.data?.[0];

    return blog;
  } catch (error) {
    throw new Error("Error fetching blog post");
  }
};
