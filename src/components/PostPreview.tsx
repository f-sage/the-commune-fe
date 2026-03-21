import { Box, Heading, Link, Separator, Text } from "@radix-ui/themes";
import type { WP_REST_API_Post as WordpressPost } from "wp-types";
import "./PostPreview.css";

export const PostPreview = ({ post }: { post: WordpressPost }) => {
  const content = { __html: post.excerpt.rendered };
  const createdAt = new Date(post.date).toDateString();
  return (
    <article>
      <Box maxWidth="500px">
        <Heading as="h3">
          <Link href={`/post/${post.id}`}>{post.title.rendered}</Link>
        </Heading>
        <div dangerouslySetInnerHTML={content} />
        <Text as="div" size="2" color="gray">
          <time dateTime={post.date}>{createdAt}</time>
        </Text>
        <Separator my="3" size="4" />
      </Box>
    </article>
  );
};

export default PostPreview;
