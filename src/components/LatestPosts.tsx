import { PostPreview } from "./PostPreview";
import "./LatestPosts.css";
import { Flex } from "@radix-ui/themes";
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
      <h2>News</h2>

      <Flex gap="3" direction="column">
        {posts?.map((item: WordpressPost) => (
          <PostPreview key={item.id} post={item} />
        ))}
      </Flex>
    </div>
  );
};

export default LatestPosts;
