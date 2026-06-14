"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/ilustraciones/proyectos", label: "Proyectos" },
  { href: "/ilustraciones/libros", label: "Libros" },
  { href: "/ilustraciones/carteles", label: "Carteles" },
  { href: "/ilustraciones/logos", label: "Logos" },
  { href: "/ilustraciones/animaciones", label: "Animaciones" },
];

export const IllustrationsLinks = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-4 sm:gap-10  text-xl sm:text-2xl ">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${
            pathname === link.href
              ? "font-semibold text-red-600 "
              : "text-zinc-800 hover:text-red-600"
          } transition-colors`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
