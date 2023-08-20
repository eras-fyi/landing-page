import Link from "next/link";
import { useRouter } from "next/router";

import { Background } from "@/background/Background";
import { Section } from "@/layout/Section";
import { blogData } from "@/services/blog";

const Blog = () => {
  const router = useRouter();

  return (
    <Background className="bg-blue-50 dark:bg-blue-950">
      <Section
        title="Want to learn more? Check out our blog"
        description="
              Get a deep dive on how we're helping individuals improve their
              financial habits."
        id="blog"
      >
        <div className="mx-auto max-w-screen-xl px-4 lg:px-6 lg:pb-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {blogData.map((post) => (
              <article
                key={post.id}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="mb-5 flex items-center justify-between text-gray-500">
                  <span className="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-200 dark:text-primary-800">
                    <img
                      className="mr-1 h-3 w-3"
                      src={`${router.basePath}${post.icon}`}
                      alt="icon"
                    />
                    {post.category}
                  </span>
                  <span className="text-sm">{post.date}</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href={post.link}>{post.title}</a>
                </h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      className="h-7 w-7 rounded-full"
                      src={post.authorImage}
                      alt={`${post.authorName} avatar`}
                    />
                    <span className="font-medium dark:text-white">
                      {post.authorName}
                    </span>
                  </div>
                  <Link
                    href={post.link}
                    target="_blank"
                    className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Link href="https://blog.eras.fyi" target="_blank">
              <button className="rounded bg-blue-500 px-4 py-2 text-white">
                See all posts
              </button>
            </Link>
          </div>
        </div>
      </Section>
    </Background>
  );
};

export { Blog };
