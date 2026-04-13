import type { APIAttachment } from "discord-api-types/v10";
import "./PostAttachments.css";

const PostAttachments = ({ data }: { data: APIAttachment[] }) => {
  console.log(data);

  return (
    <div className="post-attachments">
      {data.map((item) => (
        <div key={item.id}>
          <Attachment item={item} />
        </div>
      ))}
    </div>
  );
};

//toodo handle svg
const Attachment = ({ item }: { item: APIAttachment }) => {
  if (item.content_type?.includes("image"))
    return <img src={item.url} alt="post attachment" />;
  else if (item.content_type?.includes("video"))
    return (
      <video controls>
        <source src={item.url} type={item.content_type}></source>
      </video>
    );
  else return <a href={item.url}>attachment</a>;
};

export default PostAttachments;
