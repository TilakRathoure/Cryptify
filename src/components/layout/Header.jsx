import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/coins", label: "Coins" },
  { to: "/exchange", label: "Exchange" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isCoinsActive =
    pathname === "/coins" || pathname.startsWith("/coin/");

  const linkClass = (active) =>
    `text-base tracking-wide transition ${
      active
        ? "text-cryptify-accent"
        : "text-white hover:text-cryptify-accent/80"
    }`;

  const navLink = (link) => (
    <NavLink
      key={link.to}
      to={link.to}
      end={link.end}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        linkClass(link.to === "/coins" ? isCoinsActive : isActive)
      }
    >
      {link.label}
    </NavLink>
  );

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-xl uppercase tracking-[0.18em] text-white"
          onClick={() => setOpen(false)}
        >
          Cryptify.
        </Link>

        <nav className="hidden items-center gap-8 md:flex">{links.map(navLink)}</nav>

        <button
          type="button"
          className="text-2xl text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-white/10 px-4 py-4 md:hidden">
          {links.map(navLink)}
        </nav>
      )}
    </header>
  );
};

export default Header;
