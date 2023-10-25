"use client";
import { DispositCardType } from "@/interfaces";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import RSelect from "../RSelect";
interface Props {
  data: DispositCardType;
}

const DipositCard: React.FC<Props> = ({ data }) => {
  const [sliderValue, setSliderValue] = useState<number>(6.09);
  const [openCard, setOpenCard] = useState(false);
  const [clickedButton, setClickedButton] = useState("");
  const handleSliderChange = (value: number) => {
    setSliderValue(value); // Update the state with the new slider value
  };

  const handleCardOpen = (clicked: string) => {
    setClickedButton(clicked);
    setOpenCard((prev) => !prev);
  };

  return (
    <div className="  overflow-hidden !rounded-[15px]">
      {/* top card */}
      <div className="card px-4 lg:px-8 rounded-b-none !rounded-[15px]">
        <div className=" flex items-center  gap-7 px-5">
          <Image src={data.icon} alt="bitcoin" />
          <div className=" space-y-1">
            <Link href={data.slug} className=" text-t-22 font-extrabold">
              {data.name}
            </Link>
            <p className="text-t-18 font-medium">Vault ID {data.id}</p>
          </div>
        </div>
        <div className=" pt-8 grid grid-cols-2 gap-5">
          <div className="rounded-[15px] space-y-2 p-4 bg-primary grid place-items-center">
            <h4 className=" text-t-16 text-secondary font-bold text-center  ">
              Vault TVL
            </h4>
            <div className=" w-6 h-[2px] bg-white" />
            <h3 className=" text-t-18 font-extrabold  text-white ">
              {data.vaultTvl}
            </h3>
          </div>
          <div className="rounded-[15px] space-y-2 p-4 bg-primary grid place-items-center">
            <h4 className=" text-t-16 text-secondary font-bold text-center ">
              APY
            </h4>
            <div className=" w-6 h-[2px] bg-white" />
            <h3 className=" text-t-18 font-extrabold text-white">{data.apy}</h3>
          </div>
          <div className="rounded-[15px] space-y-2 p-4 bg-primary grid place-items-center">
            <h4 className=" text-t-16 text-secondary font-bold text-center ">
              My TVL
            </h4>
            <div className=" w-6 h-[2px] bg-white" />
            <h3 className=" text-t-18 font-extrabold text-white">
              {data.myTvl}
            </h3>
          </div>
          <div className="rounded-[15px] space-y-2 p-4 bg-primary grid place-items-center">
            <h4 className=" text-t-16 text-secondary font-bold text-center ">
              Asset Price
            </h4>
            <div className=" w-6 h-[2px] bg-white" />
            <h3 className=" text-t-18 font-extrabold text-white">
              {data.assetsPrice}
            </h3>
          </div>
        </div>
        {openCard && (
          <div className=" flex justify-center pt-7 pb-0">
            <Button
              onClick={() => setOpenCard(false)}
              className="w-[180px] rounded-full h-[50px] bg-secondary !text-darken"
            >
              <span className=" !text-darken">Collapse</span>
              <MdKeyboardArrowDown
                className={`${openCard ? " rotate-180" : ""}`}
                size={25}
              />
            </Button>
          </div>
        )}

        <RSelect showPortal={true} />

        <div className="relative px-5 pt-9 grid grid-cols-2 gap-2">
          <Button
            onClick={() => handleCardOpen("deposit")}
            className="h-[55px] rounded-[15px]"
          >
            Deposit
          </Button>
          <Button
            onClick={() => handleCardOpen("withdraw")}
            className="h-[55px] rounded-[15px]"
            variant={"secondary"}
          >
            Withdraw
          </Button>
        </div>
      </div>
      {/* bottom card */}
      {openCard && (
        <div
          className={`  relative  overflow-hidden -mt-[20px]  card   rounded-[15px] card space-y-5`}
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

          {clickedButton === "deposit" ? (
            <button
              style={{ padding: "15px 24px" }}
              className="border-2 border-secondary rounded-lg text-t-18 font-bold text-white  w-full inline-flex  items-center justify-center  bg-primary"
            >
              Deposit
            </button>
          ) : (
            <button
              style={{ padding: "15px 24px" }}
              className="border-2 bg-secondary border-darken rounded-lg text-t-18 font-bold text-darken  w-full inline-flex  items-center justify-center  "
            >
              Withdraw
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(DipositCard), { ssr: false });
