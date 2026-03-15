export const Post = ({post}) => {

    const content = {__html:post.excerpt.rendered}
    const createdAt = new Date(post.date).toDateString();
  return (
    <div>
      <h3>{post.title.rendered}</h3>
      <div dangerouslySetInnerHTML={content} />
      <div>{createdAt}</div>
    </div>
  )
};

export default Post;
