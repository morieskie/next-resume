export interface IPortfoliItem {
  id?: number | string;
  project: string;
  description?: string;
  imgUrl: string;
  altTitle?: string;
  categories: string[];
  technologies: string[];
  url: string;
  date?: string;
  images: string[];
}
