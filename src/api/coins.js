import client from "./client";

export const getMarkets = (currency, page) =>
  client.get("/coins/markets", {
    params: { vs_currency: currency, page },
  });

export const getCoin = (id) =>
  client.get(`/coins/${encodeURIComponent(id)}`);

export const getCoinMarketChart = (id, currency, days) =>
  client.get(`/coins/${encodeURIComponent(id)}/market_chart`, {
    params: { vs_currency: currency, days },
  });
