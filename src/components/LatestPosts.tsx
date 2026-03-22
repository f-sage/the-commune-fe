import { PostPreview } from "./PostPreview";
import "./LatestPosts.css";
import type { WP_REST_API_Post as WordpressPost } from "wp-types";

export const LatestPosts = async () => {
  const postCount = 2;
  const baseWordpressUrl = process.env.BASE_WP_URL;
  const res = await fetch(
    `${baseWordpressUrl}/wp-json/wp/v2/posts?per_page=${postCount}`,
  );
  const posts = await res.json();
  return (
    <div id="posts">
      <h2>
        <a href="/posts">News</a>
      </h2>

      {posts?.map((item: WordpressPost) => (
        <PostPreview key={item.id} post={item} />
      ))}
    </div>
  );
};

export default LatestPosts;
