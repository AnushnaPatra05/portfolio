import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import { useReveal } from "@/hooks/use-reveal";
import { useEffect, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
};

const PageLayout = ({ children, title, description }: Props) => {
  useReveal();

  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
  }, [title, description]);

  return (
    <div className="min-h-screen flex flex-col fade-in bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
