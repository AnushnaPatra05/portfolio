export type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  file: string;
  type: "image" | "pdf";
};

export const certificates: Certificate[] = [
  { id: 1, title: "Certification Title 1", issuer: "Issuing Organization", date: "Month Year", file: "/certificates/cert-1.jpg", type: "image" },
  { id: 2, title: "Certification Title 2", issuer: "Issuing Organization", date: "Month Year", file: "/certificates/cert-2.jpg", type: "image" },
  { id: 3, title: "Certification Title 3", issuer: "Issuing Organization", date: "Month Year", file: "/certificates/cert-3.jpg", type: "image" },
  { id: 4, title: "Certification Title 4", issuer: "Issuing Organization", date: "Month Year", file: "/certificates/cert-4.jpg", type: "image" },
  { id: 5, title: "Certification Title 5", issuer: "Issuing Organization", date: "Month Year", file: "/certificates/cert-5.jpg", type: "image" },
];
