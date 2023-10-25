import { barSmallCrat } from "@/assets/images";
import Image from "next/image";

const SalesCard = () => {
  return (
    <div className="card">
      <div className=" flex items-center gap-3">
        <Image src={barSmallCrat} alt="bar" />
        <h2 className=" text-t-25 font-extrabold text-white">Fort Stats</h2>
      </div>
    </div>
  );
};

export default SalesCard;
