import { barSmallCrat, platform, satistics } from "@/assets/images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { PiCurrencyCircleDollar } from "react-icons/pi";
const Page1 = () => {
  const fortStar = [
    {
      name: "FORT Price",
      price: "$100.14 USD",
    },
    {
      name: "Fully Diluted VAlue ( FDV )",
      price: "$1,902,407.00 USD",
    },
    {
      name: "Maximum Supply",
      price: "$19,000.00 FORT",
    },
    {
      name: "Circulating Supply",
      price: "$500.00 FORT",
    },
  ];
  const platformData = [
    {
      name: "Total Value Licked ( TVL )",
      price: " $2,902,407.00 USD",
    },
    {
      name: "AVAX TVL",
      price: "4400 AVAX",
    },
    {
      name: "BTC.b TVL",
      price: "2.001 BTC.b",
    },
    {
      name: "Stables TVL",
      price: "1,902,407.00 USD",
    },
  ];

  const myPosition = [
    {
      valutName: "sAVAX Vault",

      amount: "$1100.14",
    },
    {
      valutName: "BTC.b Vault",

      amount: "$400.21",
    },
    {
      valutName: "USDC Vault",

      amount: "$0.12",
    },
    {
      valutName: "L1 BAL Vault",

      amount: "$100.14",
    },
  ];
  return (
    <div className=" space-y-6">
      {/* Profile */}
      <div
        className=" flex gap-5 sm:flex-row flex-col items-center  justify-between  p-4 rounded-lg"
        style={{ background: "#122739" }}
      >
        <div className="flex items-center gap-4">
          <Avatar className=" w-[75px] h-[75px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className=" space-y-2">
            <h4 className=" text-t-18 font-bold text-white">Daisy Phelps</h4>
            <p className=" text-t-18 sm:text-t-25 text-secondary font-extrabold">
              0x3e5678....b567th56777
            </p>
          </div>
        </div>
        <div className="">
          <div className=" inline-flex items-center space-x-2">
            <PiCurrencyCircleDollar className="text-white text-3xl" />
            <h6 className=" text-t-18 font-bold text-white">My TVL</h6>
          </div>
          <p className=" text-t-18 sm:text-t-25 text-secondary font-extrabold">
            $2521.55
          </p>
        </div>
      </div>
      {/* details */}
      <div className=" grid   gap-6 grid-cols-11">
        <div className="col-span-11 xl:col-span-5  sm:grid-cols-2 xl:grid-cols-1 grid gap-6">
          {/* Sales */}
          <div>
            <div className="card">
              <div className=" flex items-center gap-3">
                <Image src={barSmallCrat} alt="bar" />
                <h2 className=" text-t-25 font-extrabold text-darken">
                  Fort Stats
                </h2>
              </div>
              <ul className=" py-5 space-y-4">
                {fortStar.map((data, index) => (
                  <li
                    key={index}
                    className={` ${
                      index % 2 === 0 && "bg-primary text-white"
                    } flex items-center justify-between py-3 px-2 rounded-md`}
                  >
                    <span className="block text-t-14 sm:text-t-16 font-semibold">
                      {data.name}
                    </span>
                    <span className="block text-t-14 sm:text-t-16  font-extrabold">
                      {data.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Platform Info */}
          <div>
            <div className="card">
              <div className=" flex items-center gap-3">
                <Image src={platform} alt="bar" />
                <h2 className=" text-t-25 font-extrabold text-darken">
                  Platform Info
                </h2>
              </div>
              <ul className=" py-5 space-y-4">
                {platformData.map((data, index) => (
                  <li
                    key={index}
                    className={` ${
                      index % 2 === 0 && "bg-primary text-white "
                    } flex items-center justify-between py-3 px-2 rounded-md`}
                  >
                    <span className="block text-t-14 sm:text-t-16 font-semibold">
                      {data.name}
                    </span>
                    <span className="block text-t-14 sm:text-t-16  font-extrabold">
                      {data.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-11 overflow-hidden card max-h-[739px] h-full overflow-y-scroll scrollbar scrollbar-thumb-secondary scrollbar-track-gray-100 xl:col-span-6">
          {/* my position */}
          <div className=" relative ">
            <div className=" h-11    py-5   flex items-center gap-3">
              <Image src={satistics} alt="bar" />
              <h2 className=" text-t-25 font-extrabold text-darken">
                My Positions
              </h2>
            </div>
            <ul className="  space-y-4 py-5">
              {myPosition.map((data, index) => (
                <li
                  key={index}
                  className=" flex text-white h-16 justify-between items-center rounded-md py-3 px-3 bg-dark"
                >
                  <span className=" text-t-14 sm:text-t-18 font-semibold block flex-1">
                    {data.valutName}
                  </span>
                  <span className="text-t-14 sm:text-t-18 font-semibold inline-flex items-center gap-3">
                    Amount{" "}
                    <span className=" text-t-18 sm:text-t-20 font-extrabold">
                      {data.amount}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
