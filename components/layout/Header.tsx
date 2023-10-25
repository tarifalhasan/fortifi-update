"use client";
import { logo } from "@/assets/images";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const router = useRouter();

  const hangleChange = (value: any) => {
    router.push(value);
    // router.refresh();
  };

  return (
    <header className=" py-6 container  flex items-center justify-between">
      <Link href={"/"}>
        <Image className=" w-[55%] md:w-full" alt="logo" src={logo} />
      </Link>

      <div className="  grid grid-cols-2 gap-3 w-auto md:w-[calc(181px*2)]">
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Chain" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="/">AVAX</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(v) => hangleChange(v)}>
          <SelectTrigger className="">
            <SelectValue placeholder="Address" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="/page1">Profile</SelectItem>
            <SelectItem value="/connect">Connect</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </header>
  );
};

export default Header;
