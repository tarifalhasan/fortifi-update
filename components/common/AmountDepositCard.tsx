"use client";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import RSelect from "../RSelect";

const AmountDepositCard = () => {
  const [sliderValue, setSliderValue] = useState<number>(6.09);

  const handleSliderChange = (value: number) => {
    setSliderValue(value); // Update the state with the new slider value
  };

  return (
    <div className=" space-y-6">
      <div>
        <div style={{ marginTop: "20px" }}>
          <RSelect />
        </div>
        <div className="flex justify-center">
          <div className=" relative z-10 px-5 pt-9 grid grid-cols-2 gap-2">
            <Button className="h-[55px] !rounded-b-none rounded-[15px]">
              Deposit
            </Button>
            <Button
              className="h-[55px] !rounded-b-none rounded-[15px]"
              variant={"secondary"}
            >
              Withdraw
            </Button>
          </div>
        </div>
        <div
          className={`  relative z-40 overflow-hidden -mt-[4px]  bg-[#fff] border border-bb  rounded-[15px] card space-y-5`}
        >
          <p className="text-t-18 font-semibold">Amount</p>
          <div
            style={{ padding: "10px 15px" }}
            className="bg-transparent rounded-[10px] border border-primary flex items-center justify-between"
          >
            <h3 className="text-t-18 font-semibold">{sliderValue}</h3>
            <button
              style={{ padding: "10px 15px" }}
              className=" text-t-18 bg-secondary rounded-lg font-extrabold  text-dark"
            >
              + MAX
            </button>
          </div>
          <Slider
            value={[sliderValue]}
            min={0}
            max={100}
            step={1}
            // onChange={handleSliderChange}
            onValueChange={(i: any) => handleSliderChange(i)}
          />
          <div className=" grid grid-cols-4 gap-1">
            <button
              onClick={() => handleSliderChange(25)}
              className=" h-[46px] text-t-16  text-white sm:text-t-18 font-extrabold bg-[#101E33] border-2 border-secondary rounded-[5px] inline-flex items-center justify-center"
            >
              25%
            </button>
            <button
              onClick={() => handleSliderChange(50)}
              className="h-[46px] text-t-16  text-white  sm:text-t-18 font-extrabold bg-[#101E33] border-2 border-secondary rounded-[5px] inline-flex items-center justify-center"
            >
              50%
            </button>
            <button
              onClick={() => handleSliderChange(75)}
              className=" h-[46px] text-t-16 text-white   sm:text-t-18 font-extrabold bg-[#101E33] border-2 border-secondary rounded-[5px] inline-flex items-center justify-center"
            >
              75%
            </button>
            <button
              onClick={() => handleSliderChange(100)}
              className=" h-[46px] text-t-16 text-white  sm:text-t-18 font-extrabold bg-[#101E33] border-2 border-secondary rounded-[5px] inline-flex items-center justify-center"
            >
              100%
            </button>
          </div>
          <ul className=" space-y-4">
            <li className=" flex  items-center justify-between text-t-16 font-semibold font-comforta">
              <span className=" block">Deposit Fee</span>
              <span className=" block">0%</span>
            </li>
            <li className=" flex items-center justify-between text-t-16 font-semibold font-comforta">
              <span className=" block">Withdraw Fee</span>
              <span className=" block">0%</span>
            </li>
            <li className=" flex items-center justify-between text-t-16 font-semibold font-comforta">
              <span className=" block">Performance Fee</span>
              <span className=" block">0%</span>
            </li>
          </ul>
          <button
            style={{ padding: "15px 24px" }}
            className="border-2 border-secondary rounded-lg text-t-18 font-bold text-white  w-full inline-flex  items-center justify-center  bg-primary"
          >
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmountDepositCard;
