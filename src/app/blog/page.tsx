import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
        <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="space-y-8 mb-16">
                {/* Hero Section */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <h1 className="font-medium text-4xl tracking-tighter">
                            Hey there!
                        </h1>
                        <h1 className="w-8 h-8 text-yellow-500 animate-wave">👋</h1>
                    </div>
                    <div className="prose dark:prose-invert">
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            My name is <span className="font-medium text-primary">Salin Chhun</span>,
                            and I work as a software engineer. Nowadays, I  m building and exploring
                            new technologies, solving problems, and continuously learning.
                        </p>
                    </div>
                </div>
            </div>
        </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">Latest Posts</p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
