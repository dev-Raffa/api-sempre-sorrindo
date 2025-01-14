export interface IBlog {
  id: number;
  title: string;
  resume?: string;
  tag?: string;
  text: string;
  date: unknown;
  time: unknown;
  home?: number;
  status: number;
  image: string;
}
