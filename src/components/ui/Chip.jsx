import React from "react";

const Chip = ({ active = false, onClick, children, className = "" }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
        active
          ? "border-cryptify-accent bg-cryptify-accent/10 text-cryptify-accent"
          : "border-white/20 text-white/80 hover:border-white/50 hover:text-white"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Chip;
