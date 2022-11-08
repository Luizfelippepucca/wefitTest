export type WrappeNumberOfStartPorps = {
  route: string;
};

export interface CardProps {
  full_name: string;
  description: string;
  stargazers_count: string;
  language: string;
  html_url: string;
  id: number;
  avatar: string;
  cLick?: () => void;
}
