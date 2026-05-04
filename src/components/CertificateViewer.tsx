import { X } from "lucide-react";
import { useEffect } from "react";
import type { Certificate } from "@/data/certificates";

type Props = {
  cert: Certificate | null;
  onClose: () => void;
};

const CertificateViewer = ({ cert, onClose }: Props) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (cert) {
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div
      onClick={onClose}
      className="fade-in"
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.85)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "900px",
          width: "100%",
          maxHeight: "90vh",
          backgroundColor: "#1C1C1E",
          borderRadius: "16px",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div style={{ color: "#fff", fontSize: "16px", fontWeight: 700 }}>{cert.title}</div>
            <div style={{ color: "#A0A0A0", fontSize: "13px", marginTop: "2px" }}>{cert.issuer}</div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="transition-smooth hover:opacity-80"
            style={{ color: "#3ECFA4", background: "transparent", border: "none", cursor: "pointer" }}
          >
            <X size={24} />
          </button>
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1, overflow: "auto" }}>
          {cert.type === "image" ? (
            <img
              src={cert.file}
              alt={cert.title}
              style={{ maxWidth: "100%", maxHeight: "70vh", objectFit: "contain", borderRadius: "8px" }}
            />
          ) : (
            <iframe
              src={cert.file}
              title={cert.title}
              style={{ width: "100%", height: "70vh", border: "none", borderRadius: "8px", backgroundColor: "#fff" }}
            />
          )}
        </div>

        <div className="flex justify-end">
          <a
            href={cert.file}
            download
            className="transition-smooth hover:opacity-80"
            style={{
              color: "#3ECFA4",
              fontSize: "13px",
              fontWeight: 500,
              border: "0.5px solid #3ECFA4",
              borderRadius: "8px",
              padding: "8px 16px",
              textDecoration: "none",
            }}
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificateViewer;
