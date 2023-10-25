import { StaticImageData } from "next/image";

export interface DispositCardType {
  icon: StaticImageData | string;
  name: string;
  id: string;
  vaultTvl: string;
  apy: string;
  myTvl: string;
  assetsPrice: string;
  slug: string;
}
