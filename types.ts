
export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  content: string;
  image: string;
  date: string;
  likes: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}
