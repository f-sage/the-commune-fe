import type { WP_REST_API_Post as WordpressPost } from "wp-types";
import PostPreview from "@/components/PostPreview";
import "./posts-page.css";

export default async function PostsPage() {
  const baseWordpressUrl = process.env.BASE_WP_URL;
  const res = await fetch(`${baseWordpressUrl}/wp-json/wp/v2/posts`);
  const posts = await res.json();

  return (
    <>
      <h1>News</h1>

      <div id="posts">
        {posts?.map((item: WordpressPost) => (
          <PostPreview key={item.id} post={item} />
        ))}
      </div>
    </>
  );
}
