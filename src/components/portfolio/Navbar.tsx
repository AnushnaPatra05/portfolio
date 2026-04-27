import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/academics", label: "Academics" },
  { to: "/hobbies", label: "Hobbies" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-subtle" : "bg-transparent"
      }`}
    >
      <nav className="container-narrow flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-md border border-mint text-mint grid place-items-center font-bold tracking-tight">
            AP
          </span>
          <span className="font-semibold text-foreground hidden sm:inline">Anushna Patra</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium transition-smooth hover:text-mint ${
                    isActive ? "text-mint" : "text-foreground/80"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href={pathname === "/" ? "#contact" : "/#contact"}
              className="text-sm font-medium text-foreground/80 hover:text-mint transition-smooth"
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-subtle">
          <ul className="container-narrow py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `block py-3 font-medium ${isActive ? "text-mint" : "text-foreground/80"}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a href={pathname === "/" ? "#contact" : "/#contact"} className="block py-3 text-foreground/80">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
