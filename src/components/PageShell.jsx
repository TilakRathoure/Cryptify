import React from "react";

const PageShell = ({ children, className = "" }) => {
  return (
    <main className="min-h-[calc(100vh-10.5rem)] bg-cryptify-bg">
      <div className={`mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 ${className}`}>
        {children}
      </div>
    </main>
  );
};

export default PageShell;
