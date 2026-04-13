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

// Source - https://stackoverflow.com/a/16947614
// Posted by n1xx1, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-05, License - CC BY-SA 3.0

export const textToHtmlMarkup = (text: string) => {
  const markupMatchers = {
    bold: /\*\*(.*?)\*\*/g,
    italic: /\*(.*?)\*/g,
    underlined: /__(.*?)__/g,
    strikethrough: /~~(.*?)~~/g,
    link: /\[(.*?)\]\((.*?)\)/g,
    spoiler: /\|\|(.*?)\|\|/g,
  };

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
