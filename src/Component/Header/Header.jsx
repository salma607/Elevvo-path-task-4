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
          flex-1 flex justify-center
          ${
            menuOpen
              ? "fixed inset-0 flex flex-col justify-center items-center bg-[var(--color-black)] z-10"
              : "hidden"
          }
          lg:flex lg:static lg:bg-transparent lg:flex-row
        `}
      >
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
