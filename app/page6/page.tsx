import { chart, usdc } from "@/assets/images";
import Image from "next/image";
import DepositCard from "./DepositCard";
import VaultStrategies from "./VaultStrategies";

export default function Page6() {
  return (
    <section className="bg-card rounded-[15px] w-full p-0 sm:p-5">
      {/* Top */}
      <div className=" gap-5 flex flex-col lg:flex-row items-center justify-between">
        <div className="inline-flex items-center gap-4">
          <Image src={usdc} alt="bitcoin" />
          <div>
            <h4 className=" text-darken text-t-22 font-extrabold">
              USDC Vault
            </h4>
            <p className=" text-darken font-medium">Vault ID #3456</p>
          </div>
        </div>
        <div className="  grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="rounded-md space-y-2  px-5 py-2 bg-primary grid place-items-center">
            <h4 className=" text-t-16 text-secondary font-bold text-center  ">
              Vault TVL
            </h4>
            <div className=" w-6 h-[2px] bg-white" />
            <h3 className=" text-t-18 font-extrabold  text-white "> $80K</h3>
          </div>
          <div className="rounded-md space-y-2  px-5 py-2 bg-primary grid place-items-center">
            <h4 className=" text-t-16 text-secondary font-bold text-center ">
              APY
            </h4>
            <div className=" w-6 h-[2px] bg-white" />
            <h3 className=" text-t-18 font-extrabold text-white">5.2%</h3>
          </div>
          <div className="rounded-md space-y-2  px-5 py-2 bg-primary grid place-items-center">
            <h4 className=" text-t-16 text-secondary font-bold text-center ">
              My TVL
            </h4>
            <div className=" w-6 h-[2px] bg-white" />
            <h3 className=" text-t-18 font-extrabold text-white">
              0.0001 BTC.b
            </h3>
          </div>
          <div className="rounded-md space-y-2  px-5 py-2 bg-primary grid place-items-center">
            <h4 className=" text-t-16 text-secondary font-bold text-center ">
              Asset Price
            </h4>
            <div className=" w-6 h-[2px] bg-white" />
            <h3 className=" text-t-18 font-extrabold text-white">$31,069.01</h3>
          </div>
        </div>
      </div>
      {/* Details */}
      <div className=" gap-6 grid grid-cols-12">
        <div className="col-span-12 xl:col-span-4">
          <DepositCard />
        </div>
        <div className="col-span-12 space-y-6 xl:col-span-8">
          <VaultStrategies />
          <div>
            <Image
              className=" w-full h-full object-cover"
              src={chart}
              alt="chart"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
