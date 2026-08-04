import React, { useEffect, useState } from "react";
import { getMarkets } from "../api/coins";
import { currencySymbol } from "../utils/format";
import CoinCard from "../components/coins/CoinCard";
import Chip from "../components/ui/Chip";
import CurrencyToggle from "../components/ui/CurrencyToggle";
import EmptyState from "../components/ui/EmptyState";
import ErrorState from "../components/ui/ErrorState";
import Loader from "../components/ui/Loader";
import PageShell from "../components/layout/PageShell";

const TOTAL_PAGES = 132;

const pageWindow = (current, total) => {
  const pages = [];
  const start = Math.max(1, current - 2);
  const end = Math.min(total, current + 2);

  if (start > 1) pages.push(1);
  if (start > 2) pages.push("…");
  for (let i = start; i <= end; i += 1) pages.push(i);
  if (end < total - 1) pages.push("…");
  if (end < total) pages.push(total);
  return pages;
};

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const symbol = currencySymbol(currency);

  const filtered = coins.filter((coin) =>
    coin.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        setLoading(true);
        setError(false);
        const { data } = await getMarkets(currency, page);
        setCoins(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  const changePage = (next) => {
    if (next < 1 || next > TOTAL_PAGES || next === page) return;
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (error) {
    return (
      <PageShell>
        <ErrorState />
      </PageShell>
    );
  }

  return (
    <PageShell>
      <p className="max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
        Explore all cryptocurrencies with detailed{" "}
        <span className="text-cryptify-accent">charts</span> and information.
        Click to access comprehensive data and make informed decisions.
        Cryptify: Your gateway to the crypto world, empowering you to trade
        with confidence.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <CurrencyToggle
          value={currency}
          onChange={(value) => {
            setCurrency(value);
            setPage(1);
          }}
        />
        <input
          type="search"
          value={query}
          placeholder="Search coins"
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-full border border-white/20 bg-transparent px-4 py-2 text-white placeholder:text-white/40 focus:border-cryptify-accent focus:outline-none sm:max-w-xs"
        />
      </div>

      {loading ? (
        <Loader />
      ) : filtered.length === 0 ? (
        <EmptyState message="No coins match your search." />
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {filtered.map((coin) => (
            <CoinCard
              key={coin.id}
              id={coin.id}
              name={coin.name}
              symbol={coin.symbol}
              price={coin.current_price}
              img={coin.image}
              change={coin.price_change_percentage_24h}
              rank={coin.market_cap_rank}
              currencySymbol={symbol}
            />
          ))}
        </div>
      )}

      {!loading && (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <Chip onClick={() => changePage(page - 1)} className={page === 1 ? "opacity-40" : ""}>
            Prev
          </Chip>
          {pageWindow(page, TOTAL_PAGES).map((item, index) =>
            item === "…" ? (
              <span key={`ellipsis-${index}`} className="px-1 text-white/50">
                …
              </span>
            ) : (
              <Chip
                key={item}
                active={item === page}
                onClick={() => changePage(item)}
              >
                {item}
              </Chip>
            )
          )}
          <Chip
            onClick={() => changePage(page + 1)}
            className={page === TOTAL_PAGES ? "opacity-40" : ""}
          >
            Next
          </Chip>
        </div>
      )}
    </PageShell>
  );
};

export default Coins;
