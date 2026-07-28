import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "..";
import ErrorState from "./ErrorState";
import Loader from "./Loader";
import PageShell from "./PageShell";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

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
        Discover top cryptocurrency trading platforms. Click to access each site
        directly. Stay informed, trade smarter with Cryptify.
      </p>

      {loading ? (
        <Loader />
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {exchanges.map((item) => (
            <ExchangeCard
              key={item.id}
              name={item.name}
              img={item.image}
              rank={item.trust_score_rank}
              url={item.url}
            />
          ))}
        </div>
      )}
    </PageShell>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block">
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
    </a>
  );
};

export default Exchanges;
