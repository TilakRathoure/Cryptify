import React, { useEffect, useState } from "react";
import { getExchanges } from "../api/exchanges";
import ExchangeCard from "../components/exchanges/ExchangeCard";
import ErrorState from "../components/ui/ErrorState";
import Loader from "../components/ui/Loader";
import PageShell from "../components/layout/PageShell";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await getExchanges();
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

export default Exchanges;
