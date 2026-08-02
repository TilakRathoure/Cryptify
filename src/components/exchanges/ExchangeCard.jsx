import React from "react";
import { safeHttpUrl } from "../../utils/url";

const ExchangeCard = ({ name, img, rank, url }) => {
  const href = safeHttpUrl(url);
  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper {...wrapperProps} className="block">
      <article className="flex h-full flex-col items-center gap-3 rounded-xl border border-white/15 bg-black p-5 text-center shadow-card transition duration-200 hover:-translate-y-1 hover:border-cryptify-accent/70 hover:shadow-glow">
        {rank != null && (
          <span className="self-end rounded bg-white px-2 py-0.5 text-xs text-black">
            #{rank}
          </span>
        )}
        <img src={img} alt="" className="h-16 w-16 object-contain sm:h-20 sm:w-20" />
        <h2 className="text-base text-white sm:text-lg">{name}</h2>
        <p className="text-sm text-white/50">Trust rank</p>
      </article>
    </Wrapper>
  );
};

export default ExchangeCard;
