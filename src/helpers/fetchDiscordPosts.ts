export const fetchDiscordPosts = async (MESSAGES_LIMIT: number) => {
  const channelId = process.env.DISCORD_NEWS_CHANNEL_ID || "";
  return fetchMessagesFromDiscordChannel(channelId, MESSAGES_LIMIT);
};

export const fetchDiscordModList = async () => {
  const channelId = process.env.DISCORD_MODLIST_CHANNEL_ID || "";
  return fetchMessagesFromDiscordChannel(channelId);
};

const fetchMessagesFromDiscordChannel = async (
  channelId: string,
  messageLimit: number | undefined = undefined,
) => {
  const token = process.env.DISCORD_BOT_TOKEN;

  let fetchMessagesFromChannelUrl = `https://discord.com/api/v10/channels/${channelId}/messages`;
  if (messageLimit) {
    fetchMessagesFromChannelUrl += `?limit=${messageLimit}`;
  }

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
