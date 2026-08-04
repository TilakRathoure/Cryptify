import React from "react";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-2xl">
          <h2 className="mb-3 w-fit border-b border-cryptify-accent pb-1 text-lg text-white">
            About
          </h2>
          <p className="text-sm leading-relaxed text-white/70 md:text-base">
            Cryptify: Your go-to hub for cryptocurrency trading. Explore top
            trading websites, track prices, rankings, and trends with real-time
            updates and intuitive charts. Join us and dive into the world of
            crypto trading today!
          </p>
        </div>

        <div className="text-white">
          <p className="text-sm text-white/60">Created By</p>
          <p className="mt-1 text-lg">Tilak Rathoure</p>
          <div className="mt-3 flex gap-3">
            <a
              href="https://github.com/TilakRathoure"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img
                src={github}
                alt=""
                className="w-6 rounded-sm bg-white transition hover:-translate-y-0.5"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/tilakrathoure/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src={linkedin}
                alt=""
                className="w-7 transition hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
