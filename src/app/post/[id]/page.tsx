import type {
  WP_REST_API_Comments as WordpressComments,
  WP_REST_API_Post as WordpressPost,
} from "wp-types";
import { CommentSection } from "@/components/CommentSection";
import { Post } from "@/components/Post";

interface PostPageParams {
  params: {
    id: string;
  };
}

export default async function PostPage({ params }: PostPageParams) {
  const { id } = await params;
  const baseWordpressUrl = process.env.BASE_WP_URL;
  const fetchPostUrl = `${baseWordpressUrl}/wp-json/wp/v2/posts/${id}`;
  const post: WordpressPost = await fetch(fetchPostUrl).then((res) =>
    res.json(),
  );

  const fetchCommentsUrl = `${baseWordpressUrl}/wp-json/wp/v2/comments?post=${id}`;
  const comments: WordpressComments = await fetch(fetchCommentsUrl).then(
    (res) => res.json(),
  );

  return (
    <>
      <Post post={post} />

      <CommentSection comments={comments} />
    </>
  );
}
