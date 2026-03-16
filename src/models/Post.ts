interface RenderedHtml {
  rendered: string;
}
export interface WordpressPost {
  id: number;
  title: RenderedHtml;
  date: string;
  excerpt: RenderedHtml;
  content: RenderedHtml;
}

export type PostsResponse = WordpressPost[];
