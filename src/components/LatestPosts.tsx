import { PostPreview } from "./PostPreview";
import "./LatestPosts.css";
import type { APIMessage as DiscordMessage } from "discord-api-types/v10";

const MESSAGES_LIMIT = 3;

export const LatestPosts = async () => {
  const fetchData = async () => {
    const channelId = process.env.DISCORD_CHANNEL_ID;
    const token = process.env.DISCORD_BOT_TOKEN;

    const fetchMessagesFromChannelUrl = `https://discord.com/api/v10/channels/${channelId}/messages?limit=${MESSAGES_LIMIT}`;
    console.log(fetchMessagesFromChannelUrl);
    const options = {
      headers: {
        Authorization: `Bot ${token}`,
      },
    };
    const data = await fetch(fetchMessagesFromChannelUrl, options).then((res) =>
      res.json(),
    );
    return data;
  };

  const posts = await fetchData();

  return (
    <div id="posts">
      <h2>
        <a href="/posts">News</a>
      </h2>

      {posts?.map((item: DiscordMessage) => (
        <PostPreview key={item.id} post={item} />
      ))}
    </div>
  );
};

export default LatestPosts;
