import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
];

const Nav = React.memo(() => {
  const pathName = usePathname();
  return (
    <nav className="w-auto bg-base/70 border border-lavender/80 backdrop-blur-md rounded-xl py-3 px-3 md:px-6 shadow-lg shadow-lavender/80">
      <div className="flex flex-row justify-center items-center gap-x-2">
        {navLinks.map(({ href, label }) => {
          const isActive = pathName === href;
          return (
            <Link href={href} key={href} passHref>
              <button
                className={[
                  "font-bold py-2 px-5 text-text transition-colors duration-200 border-b-2",
                  isActive
                    ? "border-mauve"
                    : "border-transparent hover:border-mauve/60",
                ].join(" ")}
                type="button"
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </button>
            </Link>
          );
        })}
        {/* Language toggle placeholder */}
        <button
          className="ml-2 py-2 px-4 text-text hover:border-b-2 hover:border-lavender/60 border-b-2 border-transparent transition-colors duration-200"
          type="button"
          aria-label="Toggle language"
        >
          EN/FI
        </button>
      </div>
    </nav>
  );
});

export default Nav;
