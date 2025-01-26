import axios from "axios";

const strapiUrl = process.env.API_URL || "http://127.0.0.1:1337/api";

export async function GET(req: Request) {
  try {
    const res = await axios
      .get(`${strapiUrl}/blog-posts`)
      .then((res) => res.data)
      .catch((error) => {
        throw new Error("Failed to fetch");
      });

    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new Response("Error fetching blog posts", { status: 500 });
  }
}
