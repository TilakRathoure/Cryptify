import React from "react";
import { Link } from "react-router-dom";
import { formatNumber, formatPercent } from "../../utils/format";

const CoinCard = ({
  id,
  name,
  symbol,
  price,
  img,
  change,
  rank,
  currencySymbol,
}) => {
  const up = change == null ? null : change >= 0;

  return (
    <Link to={`/coin/${encodeURIComponent(id)}`} className="block">
      <article className="flex h-full flex-col items-center gap-3 rounded-xl border border-white/15 bg-black p-5 text-center shadow-card transition duration-200 hover:-translate-y-1 hover:border-cryptify-accent/70 hover:shadow-glow">
        {rank != null && (
          <span className="self-end rounded bg-white px-2 py-0.5 text-xs text-black">
            #{rank}
          </span>
        )}
        <img src={img} alt="" className="h-16 w-16 object-contain sm:h-20 sm:w-20" />
        <h2 className="text-base text-white sm:text-lg">{name}</h2>
        <p className="text-xs uppercase tracking-wider text-white/50">{symbol}</p>
        <p className="text-sm text-white sm:text-base">
          {currencySymbol} {formatNumber(price)}
        </p>
        <p className={`text-sm ${up == null ? "text-white/50" : up ? "text-up" : "text-down"}`}>
          {formatPercent(change)}
        </p>
      </article>
    </Link>
  );
};

export default CoinCard;
