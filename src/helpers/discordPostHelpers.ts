import type { APIMessage as DiscordMessage } from "discord-api-types/v10";

// Source - https://stackoverflow.com/a/17701213
// Posted by David Sherret, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-05, License - CC BY-SA 3.0
export const getRestOfText = (text: string) => {
  const index: number | undefined = text.indexOf("\n");
  if (index === -1) return "";
  return text.substring(index);
};

export const separateTitleAndContent = (postContent: string) => {
  let title: string, content: string;
  const split = postContent.split("\n");

  if (split.length > 1) {
    // post contains multiple lines: the title is the first line of text
    title = split[0];
    content = getRestOfText(postContent);
  } else {
    // post contains one line: use a generic title
    title = "An update";
    content = postContent;
  }
  return { title, content };
};

export const stripMarkup = (text: string) => {
  text = text.replace(/\*\*(.*?)\*\*/g, "$1");
  text = text.replace(/__(.*?)__/g, "$1");
  text = text.replace(/~~(.*?)~~/g, "$1");

  return text;
};

export const markupMatchers = {
  bold: /\*\*(.*?)\*\*/g,
  italic: /\*(.*?)\*/g,
  underlined: /__(.*?)__/g,
  strikethrough: /~~(.*?)~~/g,
  link: /\[(.*?)\]\((.*?)\)/g,
  spoiler: /\|\|(.*?)\|\|/g,
};

// Source - https://stackoverflow.com/a/16947614
// Posted by n1xx1, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-05, License - CC BY-SA 3.0

export const textToHtmlMarkup = (text: string) => {
  text = text.replace(markupMatchers.bold, "<strong>$1</strong>");
  text = text.replace(markupMatchers.underlined, "<u>$1</u>");
  text = text.replace(markupMatchers.italic, "<em>$1</em>");
  text = text.replace(markupMatchers.strikethrough, "<del>$1</del>");
  text = text.replace(markupMatchers.link, '<a href="$2">$1</a>');
  text = text.replace(
    markupMatchers.spoiler,
    "<span class='spoiler'>$1</span>",
  );

  return text;
};

export const htmlWithLineBreaksToParagraphs = (htmlWithLineBreaks: string) => {
  const paragraphsAsStrings = htmlWithLineBreaks.split("\n");

  for (let i = 0; i < paragraphsAsStrings.length; ++i) {
    const str = paragraphsAsStrings[i];
    paragraphsAsStrings[i] = `<p>${str}</p>`;
  }

  return paragraphsAsStrings.join(" ");
};

export const resolveDiscordLinks = async (
  post: DiscordMessage,
): Promise<DiscordMessage> => {
  await resolveChannelMentions(post);
  resolveUserMentions(post);

  return post;
};

const resolveUserMentions = (post: DiscordMessage) => {
  post.mentions.forEach((userMention) => {
    const matcher = `<@${userMention.id}>`;
    //glonal_name is display name
    const username = userMention.global_name || userMention.username;
    post.content = post.content.replaceAll(matcher, `@${username}`);
  });

  return post;
};

export const resolveChannelMentions = async (
  post: DiscordMessage,
): Promise<DiscordMessage> => {
  const channelMentions = post.content.matchAll(/<#(\d+)>/g);

  for (const mention of channelMentions) {
    const token = process.env.DISCORD_BOT_TOKEN;
    const channelId = mention[1];
    const fetchChannelInfoUrl = `https://discord.com/api/v10/channels/${channelId}`;
    const options = {
      headers: {
        Authorization: `Bot ${token}`,
      },
    };
    const data = await fetch(fetchChannelInfoUrl, options).then((res) =>
      res.json(),
    );

    post.content = post.content.replaceAll(`<#${channelId}>`, `#${data.name}`);
  }

  return post;
};
