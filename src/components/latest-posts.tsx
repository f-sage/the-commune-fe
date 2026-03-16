import { Post } from "./post";
import "./latest-posts.css";
import type { WordpressPost } from "@/models/Post";

export const LatestPosts = async () => {
  const baseWordpressUrl = process.env.BASE_WP_URL;
  const res = await fetch(`${baseWordpressUrl}/wp-json/wp/v2/posts`);
  const posts = await res.json();
  return (
    <div id="posts">
      <h2>News</h2>

      {
        posts?.map((item: WordpressPost) => <Post key={item.id} post={item} />)
      }
    </div>
  );
};

export default LatestPosts;
