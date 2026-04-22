export const revalidate = 60;

import { playfair } from "@/fonts/fonts";
import { client } from "@/lib/sanity/sanity";
import type { Blog } from "@/types/blog";
import { formatDate } from "@/lib/utils/date";

async function getBlogs(): Promise<Blog[]> {
  const query = `*[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    publishedAt,
    excerpt
  }`;
  return (client.fetch as any)(query) as Promise<Blog[]>;
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <main className="min-h-screen py-16 px-6 bg-[#f5f1eb] text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1
          className={`${playfair.className} text-3xl md:text-4xl font-bold text-center mb-6`}
        >
          Journal & Insights
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Thoughts, stories and guidance to help you slow down, reconnect, and
          find clarity through mindful retreats.
        </p>
        <div className="space-y-6">
          {blogs.map((blog) => (
            <article
              key={blog._id}
              className="bg-white p-6 border border-gray-200 rounded-lg text-center"
            >
              {blog.publishedAt && (
                <p className="text-sm text-gray-500 mb-2">
                  {formatDate(blog.publishedAt)}
                </p>
              )}
              <h2
                className={`${playfair.className} text-xl md:text-2xl font-semibold mb-2`}
              >
                {blog.title}
              </h2>
              <div className="w-10 h-[1px] bg-gray-200 mx-auto mb-4"></div>
              <p className="text-gray-700 leading-relaxed">{blog.excerpt}</p>
            </article>
          ))}
        </div>
        {blogs.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg italic">Blogs are coming soon ✍️</p>
          </div>
        )}
      </div>
    </main>
  );
}
