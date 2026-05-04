export type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  file: string;
  type: "image" | "pdf";
};

export const certificates: Certificate[] = [
  { id: 1, title: "TESTING ANGULAR (KARMA-JASMINE)", issuer: "UDEMY", date: "JULY 10 2024", file: "certificates/UC-60aab9e2-56db-4050-b580-41203afb7654_page-0001.jpg", type: "image" },
  { id: 2, title: "TYPESCRIPT", issuer: "UDEMY", date: "MAY 4 2026", file: "/certificates/UC-5aaa4584-76fa-4dae-a762-2e38313fdab1_page-0001.jpg", type: "image" },
  { id: 3, title: "AI + CHATGPT", issuer: "UDEMY", date: "APRIL 9 2025", file: "/certificates/AI+ChatGPT_page-0001.jpg", type: "image" }
]; 