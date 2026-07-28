import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../index";
import { currencySymbol, formatNumber, formatPercent } from "../constants";
import Chart from "./Chart";
import Chip from "./Chip";
import CurrencyToggle from "./CurrencyToggle";
import ErrorState from "./ErrorState";
import Loader from "./Loader";
import PageShell from "./PageShell";

const RANGE_BTNS = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];

const daysFromRange = (key) => {
  if (key === "1y") return "365d";
  return key;
};

const Coindetails = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [range, setRange] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const symbol = currencySymbol(currency);
  const days = daysFromRange(range);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        setLoading(true);
        setError(false);
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        const { data: chartData } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        setCoin(data);
        setChartArray(chartData.prices);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id, currency, days]);

  if (error) {
    return (
      <PageShell>
        <ErrorState />
      </PageShell>
    );
  }

  if (loading) {
    return (
      <PageShell>
        <Loader />
      </PageShell>
    );
  }

  const market = coin.market_data || {};
  const change = market.price_change_percentage_24h;
  const up = change == null ? null : change >= 0;
  const details = [
    { name: "Max Supply", value: formatNumber(market.max_supply, { compact: true }) },
    {
      name: "Circulating Supply",
      value: formatNumber(market.circulating_supply, { compact: true }),
    },
    {
      name: "Market Cap",
      value: `${symbol} ${formatNumber(market.market_cap?.[currency], { compact: true })}`,
    },
    {
      name: "All Time Low",
      value: `${symbol} ${formatNumber(market.atl?.[currency])}`,
    },
    {
      name: "All Time High",
      value: `${symbol} ${formatNumber(market.ath?.[currency])}`,
    },
  ];

  return (
    <PageShell>
      <div className="mb-6">
        <CurrencyToggle value={currency} onChange={setCurrency} />
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <div className="rounded-xl border border-white/15 p-4 sm:p-6">
          <div className="mb-4 flex flex-wrap gap-2">
            {RANGE_BTNS.map((item) => (
              <Chip
                key={item}
                active={range === item}
                onClick={() => setRange(item)}
              >
                {item}
              </Chip>
            ))}
          </div>
          <Chart arr={chartArray} currency={symbol} days={days} />
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-sm text-white/50">
            Last updated on{" "}
            {new Date(market.last_updated).toString().split("GMT")[0]}
          </p>

          <div className="flex items-center gap-4">
            <img
              src={coin.image?.large}
              alt=""
              className="h-16 w-16 object-contain"
            />
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl text-white">{coin.name}</h1>
                <span className="bg-white px-3 py-1 text-sm text-black">
                  #{coin.market_cap_rank}
                </span>
              </div>
              <p className="mt-1 text-lg">
                {symbol}
                {formatNumber(market.current_price?.[currency])}
              </p>
              <p
                className={`text-sm ${
                  up == null ? "text-white/50" : up ? "text-up" : "text-down"
                }`}
              >
                {formatPercent(change)}
              </p>
            </div>
          </div>

          <CustomBar
            high={market.high_24h?.[currency]}
            low={market.low_24h?.[currency]}
            current={market.current_price?.[currency]}
            symbol={symbol}
          />

          <div className="grid gap-3">
            {details.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between border-b border-white/10 py-2"
              >
                <p className="text-white/60">{item.name}</p>
                <p className="text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
};

const CustomBar = ({ current, high, low, symbol }) => {
  const span = high - low;
  const final = span > 0 ? ((current - low) / span) * 100 : 50;

  return (
    <div className="w-full">
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-cryptify-chart"
          style={{ width: `${Math.min(100, Math.max(0, final))}%` }}
        />
      </div>
      <div className="mt-2 flex items-center justify-between text-sm">
        <span className="rounded bg-down px-2 py-1 text-white">
          {symbol}
          {formatNumber(low)}
        </span>
        <span className="text-white/50">24H Range</span>
        <span className="rounded bg-up px-2 py-1 text-white">
          {symbol}
          {formatNumber(high)}
        </span>
      </div>
    </div>
  );
};

export default Coindetails;
