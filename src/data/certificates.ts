export type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  file: string;
  type: "image" | "pdf";
};

export const certificates: Certificate[] = [
  { id: 1, title: "ANGULAR", issuer: "UDEMY", date: "Month Year", file: "/certificates/UC-5aaa4584-76fa-4dae-a762-2e38313fdab1.pdf", type: "pdf" },
  { id: 2, title: "AMAZON Q DEVELOPER", issuer: "UDEMY", date: "Month Year", file: "/certificates/Amazon%20Q%20Developer.jpg", type: "image" },
  { id: 3, title: "TYPESCRIPT", issuer: "UDEMY", date: "Month Year", file: "certificates/UC-60aab9e2-56db-4050-b580-41203afb7654.pdf", type: "pdf" },
  { id: 4, title: "AI + CHATGPT", issuer: "UDEMY", date: "Month Year", file: "/certificates/AI%2BChatGPT.pdf", type: "pdf" }
]; 