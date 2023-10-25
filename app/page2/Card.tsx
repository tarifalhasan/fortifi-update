import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

export interface CardProps {
  icon: StaticImageData | string;
  name: string;
  id: string;
  vaultTvl: string;
  apy: string;
  myTvl: string;
  assetsPrice: string;
  slug: string;
}

const Card: React.FC<CardProps> = ({
  icon,
  name,
  id,
  vaultTvl,
  myTvl,
  assetsPrice,
  apy,
  slug,
}) => {
  return (
    <div className="card rounded-[15px]">
      <div className=" flex items-center gap-5 px-3">
        <Image src={icon} alt="bitcoin" />
        <div className=" space-y-1">
          <Link href={slug} className=" text-t-22 font-extrabold">
            {name}
          </Link>
          <p className="text-t-18 font-medium">Vault ID {id}</p>
        </div>
      </div>
      <div className=" pt-8 grid grid-cols-2 gap-5">
        <div className="rounded-[15px] space-y-2 p-4 bg-primary grid place-items-center">
          <h4 className=" text-t-16 text-secondary font-bold text-center  ">
            Vault TVL
          </h4>
          <div className=" w-6 h-[2px] bg-white" />
          <h3 className=" text-t-18 font-extrabold  text-white ">{vaultTvl}</h3>
        </div>
        <div className="rounded-[15px] space-y-2 p-4 bg-primary grid place-items-center">
          <h4 className=" text-t-16 text-secondary font-bold text-center ">
            APY
          </h4>
          <div className=" w-6 h-[2px] bg-white" />
          <h3 className=" text-t-18 font-extrabold text-white">{apy}</h3>
        </div>
        <div className="rounded-[15px] space-y-2 p-4 bg-primary grid place-items-center">
          <h4 className=" text-t-16 text-secondary font-bold text-center ">
            My TVL
          </h4>
          <div className=" w-6 h-[2px] bg-white" />
          <h3 className=" text-t-18 font-extrabold text-white">{myTvl}</h3>
        </div>
        <div className="rounded-[15px] space-y-2 p-4 bg-primary grid place-items-center">
          <h4 className=" text-t-16 text-secondary font-bold text-center ">
            Asset Price
          </h4>
          <div className=" w-6 h-[2px] bg-white" />
          <h3 className=" text-t-18 font-extrabold text-white">
            {assetsPrice}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
