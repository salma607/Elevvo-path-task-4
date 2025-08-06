import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LogoBrand from "./Logo";
import NavigationList from "./list";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-8 py-4 flex items-center justify-between bg-[var(--color-black)]">
      <LogoBrand />

      {/* Menu button for small screens */}
      <button
        className="lg:hidden flex justify-center items-center w-10 h-10 z-30"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation menu"
      >
        <MenuIcon sx={{ fontSize: 32, color: "var(--color-beige)" }} />
      </button>

      {/* Navigation */}
     <nav
  className={`
    fixed top-0 right-0 h-full w-64 bg-[var(--color-black)] z-40
    transform transition-transform duration-300 ease-in-out
    ${menuOpen ? "translate-x-0" : "translate-x-full"}
    flex flex-col items-center justify-center
    lg:static lg:translate-x-0 lg:flex-row lg:h-auto lg:w-auto lg:bg-transparent lg:transition-none
    ${menuOpen ? "" : "hidden lg:flex"}
  `}
>
  {/* Close button for mobile */}
  <button
    className="absolute top-4 right-4 lg:hidden"
    onClick={() => setMenuOpen(false)}
    aria-label="Close navigation menu"
  >
    <span className="text-3xl text-[var(--color-beige)]">&times;</span>
  </button>
  <NavigationList setMenuOpen={setMenuOpen} />
</nav>

      {/* Contact Me Button (desktop only) */}
      <a
        href="#contact"
        className="hidden lg:inline-block rounded-full px-8 py-3 text-[var(--color-beige)] font-semibold text-l border-1 border-[var(--color-beige)]"
      >
        Contact Me
      </a>
    </header>
  );
}
