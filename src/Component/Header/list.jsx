import { useState } from "react";

// Constants
const buttonStyle = {
  fontSize: "15px",
  color: "var(--color-beige)",
  margin: "2px",
  padding: "2px",
};

const useList = () => {
  const [setMenuOpen] = useState(false);
  return { setMenuOpen };
};

export default function List() {
  const { setMenuOpen } = useList();

  return (
    <ul
      className={`flex flex-col items-center gap-8 lg:flex-row lg:space-x-10`}
      style={buttonStyle}
      onClick={() => setMenuOpen(false)}
    >
      <li>
        <a href="#home"> Home</a>
      </li>

      <li>
        <a href="#service">Services</a>
      </li>

      <li>
         <a href="#Projects">Projects</a>
      </li>

      {/* Contact button in mobile menu */}
      <li className="block lg:hidden">
        <a
          href="#contact"
          className="rounded-full px-8 py-3 text-[var(--color-beige)] font-semibold text-l border-1 border-[var(--color-beige)]"
        >
          Contact Me
        </a>
      </li>
    </ul>
  );
}
