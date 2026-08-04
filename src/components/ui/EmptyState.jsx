import React from "react";

const EmptyState = ({ message = "Nothing to show yet." }) => {
  return (
    <div className="flex min-h-[24vh] items-center justify-center px-4 text-center">
      <p className="text-white/60">{message}</p>
    </div>
  );
};

export default EmptyState;
