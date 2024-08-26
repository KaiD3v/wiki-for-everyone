export interface PageData {
  id: number;
  key: string;
  title: string;
  exerpt: InnerHTML;
  description: string;
  thumbnail: {
    url: string;
  };
}
