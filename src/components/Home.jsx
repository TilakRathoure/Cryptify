import React from "react";
import { Link } from "react-router-dom";
import heroCoin from "../assests/1_VqKuTe9DmMZZRT0ERH2t4Q__1_-removebg.png";

const pills = ["Real-time", "Comprehensive", "Insightful"];

const Home = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-10.5rem)] flex-col items-center justify-center overflow-hidden bg-cryptify-bg px-4 py-12 text-center">
      <h1 className="text-4xl uppercase tracking-[0.28em] text-white sm:text-5xl md:text-6xl">
        Cryptify
      </h1>
      <p className="mt-4 max-w-xl text-sm text-white/70 sm:text-base">
        Track prices, compare exchanges, and analyze trends — your gateway to
        the crypto world.
      </p>

      <div
        id="move"
        className="relative z-0 my-8 flex h-[200px] w-full items-center justify-center overflow-hidden sm:h-[240px]"
      >
        <img
          src={heroCoin}
          alt=""
          className="relative z-10 max-h-full w-auto object-contain pointer-events-none"
        />
        <img
          src={heroCoin}
          alt=""
          className="pointer-events-none absolute top-[40px] max-h-full w-auto opacity-25 blur-sm"
        />
      </div>

      <ul className="relative z-10 mb-8 flex flex-wrap items-center justify-center gap-3">
        {pills.map((name) => (
          <li
            key={name}
            className="rounded-full border border-cryptify-accent/80 px-5 py-2 text-sm text-white sm:px-6 sm:py-2.5"
          >
            {name}
          </li>
        ))}
      </ul>

      <div className="relative z-10 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/coins"
          className="rounded-full bg-cryptify-accent px-6 py-2.5 text-sm font-medium text-black transition hover:bg-yellow-200"
        >
          Explore Coins
        </Link>
        <Link
          to="/exchange"
          className="rounded-full border border-white/30 px-6 py-2.5 text-sm text-white transition hover:border-cryptify-accent hover:text-cryptify-accent"
        >
          View Exchanges
        </Link>
      </div>
    </section>
  );
};

export default Home;
