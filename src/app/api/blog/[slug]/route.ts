import axios from "axios";
import { NextRequest } from "next/server";

const strapiUrl =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337/api";

export async function GET(req: NextRequest) {
  const requestUrl = new URL(req.url);
  const slug = requestUrl.pathname.split("/").pop();

  if (!slug || typeof slug !== "string") {
    return new Response("Slug is required", { status: 400 });
  }

  try {
    const res = await axios
      .get(`${strapiUrl}/blog-posts?filters[slug][$eq]=${slug}`)
      .then((res) => res.data)
      .catch((error) => {
        throw new Error("Failed to fetch blog posts");
      });

    const blog = res?.data?.[0];

    console.log("blog post", {
      data: res?.data,
    });

    return new Response(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    return new Response("Error fetching blog posts", { status: 500 });
  }
}
