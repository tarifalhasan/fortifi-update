"use-client";
import React from "react";
const Rebalance = () => {
  return (
    <div
      className={`relative z-40 overflow-hidden -mt-[4px]  bg-[#fff] border border-bb  rounded-[15px] card space-y-5`}
    >
      <p
        className="text-t-16  sm:text-t-18 font-normal"
        style={{ textAlign: "center", fontWeight: "bold" }}
      >
        Depositors can rebalance positions below
      </p>
      <button
        style={{ padding: "12px 24px" }}
        className="border-2 border-secondary rounded-lg text-t-18 font-bold text-white  w-full inline-flex  items-center justify-center  bg-primary"
      >
        Rebalnce
      </button>
    </div>
  );
};

export default Rebalance;
