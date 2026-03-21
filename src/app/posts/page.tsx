import { Flex } from "@radix-ui/themes";
import type { WP_REST_API_Post as WordpressPost } from "wp-types";
import PostPreview from "@/components/PostPreview";

export default async function PostsPage() {
  const baseWordpressUrl = process.env.BASE_WP_URL;
  const res = await fetch(`${baseWordpressUrl}/wp-json/wp/v2/posts`);
  const posts = await res.json();

  return (
    <Flex direction="column" align="center">
      <h1>Posts</h1>

      <Flex gap="3" direction="column">
        {posts?.map((item: WordpressPost) => (
          <PostPreview key={item.id} post={item} />
        ))}
      </Flex>
    </Flex>
  );
}
