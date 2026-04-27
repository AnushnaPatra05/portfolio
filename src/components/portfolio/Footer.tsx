const Footer = () => {
  return (
    <footer className="border-t border-mint/60 bg-[hsl(var(--footer))]">
      <div className="container-narrow py-8 text-center text-sm text-secondary-muted">
        Anushna Patra · Angular Frontend Developer · © {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
