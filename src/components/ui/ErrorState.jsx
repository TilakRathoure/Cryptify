import React from "react";

const ErrorState = ({
  message = "An error occurred while fetching data. Try changing page or reloading.",
}) => {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center px-4 text-center">
      <p className="max-w-md text-lg text-white/80">{message}</p>
    </div>
  );
};

export default ErrorState;
