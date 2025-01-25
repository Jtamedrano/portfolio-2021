export interface ServiceBundle {
  id: string;
  title: string;
  description: string;
  points: { title: string; description: string }[];
  price: number;
  target: string;
  startingAt?: boolean;
}
