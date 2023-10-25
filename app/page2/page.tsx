import { bitcoin } from "@/assets/icons";
import { savax, usdc } from "@/assets/images";
import Card, { CardProps } from "./Card";
const Page2 = () => {
  const staticData: CardProps[] = [
    {
      icon: bitcoin,
      name: "FortiFi BTC.b Vault",
      id: "#3455",
      vaultTvl: "$80K",
      apy: "5.2%",
      myTvl: "0.0001 BTC.b",
      assetsPrice: "$31,069.01",
      slug: "/page4",
    },
    {
      icon: savax,
      name: "FortiFi sAVAX Vault",
      id: "#3455",
      vaultTvl: "$80K",
      apy: "5.2%",
      myTvl: "0.0001 BTC.b",
      assetsPrice: "$31,069.01",
      slug: "/page5",
    },
    {
      icon: usdc,
      name: "FortiFi USDC Vault",
      id: "#3455",
      vaultTvl: "$80K",
      apy: "5.2%",
      myTvl: "0.0001 BTC.b",
      assetsPrice: "$31,069.01",
      slug: "page6",
    },
  ];

  return (
    <div className=" min-h-[79vh] h-full space-y-7 pt-5">
      <div className="flex w-full justify-end"></div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {staticData.map((data) => (
          <Card
            key={data.name}
            icon={data.icon}
            name={data.name}
            id={data.id}
            vaultTvl={data.vaultTvl}
            myTvl={data.myTvl}
            apy={data.apy}
            assetsPrice={data.assetsPrice}
            slug={data.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Page2;
