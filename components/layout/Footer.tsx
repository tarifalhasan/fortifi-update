import { logo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" pt-8  flex-wrap  gap-4 py-6 container flex items-center justify-center md:justify-between">
      <Link href={"/"}>
        <Image className=" max-w-[80%]" src={logo} alt="logo" />
      </Link>
      <div className=" flex-wrap justify-center md:justify-normal flex items-center gap-4">
        <p className=" font-light text-t-17">© Copyright 2023</p>
        <ul className=" flex items-center gap-2">
          <li>
            <Link
              className=" transition-all duration-300 hover:bg-secondary w-12 h-12 rounded-full bg-black grid place-items-center"
              href=""
              target="_blank"
            >
              <FaFacebookF className="text-xl text-white" />
            </Link>
          </li>
          <li>
            <Link
              className=" transition-all duration-300 hover:bg-secondary w-12 h-12 rounded-full bg-black grid place-items-center"
              href=""
              target="_blank"
            >
              <FaInstagram className="text-xl text-white" />
            </Link>
          </li>
          <li>
            <Link
              className=" transition-all duration-300 hover:bg-secondary w-12 h-12 rounded-full bg-black grid place-items-center"
              href=""
              target="_blank"
            >
              <FaTwitter className="text-xl text-white" />
            </Link>
          </li>
          <li>
            <Link
              className=" transition-all duration-300 hover:bg-secondary w-12 h-12 rounded-full bg-black grid place-items-center"
              href=""
              target="_blank"
            >
              <FaLinkedinIn className="text-xl text-white" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
