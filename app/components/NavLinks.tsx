"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/ilustraciones", label: "Ilustraciones" },
  { href: "/arte", label: "+Arte" },
  { href: "/bio", label: "Bio" },
  { href: "/contacto", label: "Contacto" },
];

export const NavLinks = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6 md:gap-10 justify-center">
      {links.map(({ href, label }) => {
        const isActive = pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            className={`transition-colors ${
              isActive
                ? "font-semibold text-red-600 border-b border-red-600 bg-[#f5efe6]"
                : "text-zinc-800 hover:text-red-600"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};
