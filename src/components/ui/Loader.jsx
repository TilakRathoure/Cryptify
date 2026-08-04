import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex min-h-[40vh] w-full items-center justify-center bg-cryptify-bg">
      <TailSpin color="#0aabcf" height={72} width={72} />
    </div>
  );
};

export default Loader;
