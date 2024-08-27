export interface PagesProps {
  id: number;
  key: string;
  title: string;
  exerpt: InnerHTML;
  description: string;
  thumbnail: {
    url: string;
  };
}

export interface PageProps {
  id: number;
  key: string;
  title: string;
  latest: {
    id: number;
    timestamp: Date;
  };
  source: InnerHTML
}