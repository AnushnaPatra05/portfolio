const Footer = () => {
  return (
    <footer className="bg-navy text-white/70 border-t border-white/10">
      <div className="container-narrow py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-white font-semibold">Anushna Patra</div>
          <div className="text-sm">Programmer Analyst · Angular Frontend Developer</div>
        </div>
        <div className="text-sm">
          © {new Date().getFullYear()} Anushna Patra. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
