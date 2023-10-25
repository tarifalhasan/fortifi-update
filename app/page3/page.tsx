import { bitcoin } from "@/assets/icons";
import { savax, usdc } from "@/assets/images";
import DipositCard from "@/components/common/DipositCard";
import { DispositCardType } from "@/interfaces";
import { BiSearchAlt2 } from "react-icons/bi";
const Page2 = () => {
  const staticData: DispositCardType[] = [
    {
      icon: bitcoin,
      name: "BTC.b Vault",
      id: "#3455",
      vaultTvl: "$80K",
      apy: "5.2%",
      myTvl: "0.0001 BTC.b",
      assetsPrice: "$31,069.01",
      slug: "/page4",
    },
    {
      icon: savax,
      name: "sAVAX Vault",
      id: "#3455",
      vaultTvl: "$80K",
      apy: "5.2%",
      myTvl: "0.0001 BTC.b",
      assetsPrice: "$31,069.01",
      slug: "/page5",
    },
    {
      icon: usdc,
      name: "USDC Vault",
      id: "#3455",
      vaultTvl: "$80K",
      apy: "5.2%",
      myTvl: "0.0001 BTC.b",
      assetsPrice: "$31,069.01",
      slug: "page6",
    },
  ];
  return (
    <div className=" min-h-[80vh] h-full space-y-7 pt-5">
      <div className="flex w-full justify-end">
        <div className=" px-4 w-full max-w-xl flex items-center justify-center   search rounded-full  h-[50px]">
          <input
            type="text"
            className="font-comforta text-white bg-transparent outline-none focus:outline-none text-t-18 font-bold flex-1"
            placeholder="Search"
          />
          <BiSearchAlt2 size={25} className="text-secondary" />
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {staticData.map((data) => (
          <DipositCard key={data.name} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Page2;
