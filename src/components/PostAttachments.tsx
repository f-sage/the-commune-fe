import type { APIAttachment } from "discord-api-types/v10";
import "./PostAttachments.css";

const PostAttachments = ({ data }: { data: APIAttachment[] }) => {
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

const Attachment = ({ item }: { item: APIAttachment }) => {
  const mimeType = item.content_type || "";

  if (mimeType.includes("image") && !mimeType.includes("svg")) {
    return <img src={item.url} alt="post attachment" />;
  } else if (mimeType.includes("video"))
    return (
      <video
        controls
        width={item.width || "auto"}
        height={item.height || "auto"}
      >
        <source src={item.url} type={mimeType}></source>
      </video>
    );
  else return <a href={item.url}>{item.filename}</a>;
};

export default PostAttachments;
