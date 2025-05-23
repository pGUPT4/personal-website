export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Chat Application",
    year: 2025,
    description: "Chat with users present on the platform",
    url: "https://github.com/pGUPT4/chat-application",
  },
  {
    title: "News Application",
    year: 2025,
    description: "Get personal preferences news",
    url: "https://github.com/pGUPT4/nyt-news",
  },
  {
    title: "Credit Card Fraud Detection",
    year: 2025,
    description: "AI Model that predicts credit card frauds",
    url: "https://github.com/pGUPT4/credit-card-fraud-detection",
  },
];
