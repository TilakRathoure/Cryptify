export const CURRENCIES = [
  { name: "INR", value: "inr", symbol: "₹" },
  { name: "EUR", value: "eur", symbol: "€" },
  { name: "USD", value: "usd", symbol: "$" },
];

export const currencySymbol = (currency) =>
  CURRENCIES.find((item) => item.value === currency)?.symbol ?? "$";

export const formatNumber = (value, { compact = false } = {}) => {
  if (value == null || value === "") return "—";
  const num = Number(value);
  if (Number.isNaN(num)) return "—";
  if (compact) {
    return num.toLocaleString(undefined, {
      notation: "compact",
      maximumFractionDigits: 2,
    });
  }
  return num.toLocaleString(undefined, {
    maximumFractionDigits: num < 1 ? 6 : 2,
  });
};

export const formatPercent = (value) => {
  if (value == null || Number.isNaN(Number(value))) return "—";
  const num = Number(value);
  const sign = num > 0 ? "+" : "";
  return `${sign}${num.toFixed(2)}%`;
};
