"use client";

import { f_logo_dark } from "@/assets/images";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <section className="min-h-[80vh] h-full bg-[#122739] px-5 grid place-items-center rounded-3xl">
      <div className=" space-y-5 grid place-items-center">
        <Image
          className=" block mx-auto  max-w-[55%]"
          src={f_logo_dark}
          alt="sds"
        />
        <h2 className=" text-center text-t-25 text-white font-extrabold ">
          A next-gen yield <br /> aggregation protocol
        </h2>
        <Button
          onClick={() => router.push("/page3")}
          variant={"secondary"}
          className=" rounded-full px-9"
        >
          Enter
        </Button>
      </div>
    </section>
  );
}
