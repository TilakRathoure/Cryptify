import React from "react";
import { CURRENCIES } from "../constants";
import Chip from "./Chip";

const CurrencyToggle = ({ value, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Select currency">
      {CURRENCIES.map((item) => (
        <Chip
          key={item.value}
          active={value === item.value}
          onClick={() => onChange(item.value)}
        >
          {item.symbol} {item.name}
        </Chip>
      ))}
    </div>
  );
};

export default CurrencyToggle;
