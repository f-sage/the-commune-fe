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
