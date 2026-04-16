export const fetchDiscordPosts = async (MESSAGES_LIMIT: number) => {
  const channelId = process.env.DISCORD_CHANNEL_ID;
  const token = process.env.DISCORD_BOT_TOKEN;

  const fetchMessagesFromChannelUrl = `https://discord.com/api/v10/channels/${channelId}/messages?limit=${MESSAGES_LIMIT}`;

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
