import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/ftlogo.png";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";

export default function Header_Home() {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className=" hidden xl:block bg-white py-[24px]">
        <div className="w-full 2xl:w-[1440px] mx-auto px-[15px]">
          <div className="flex items-center justify-between">
            <div className="flex gap-[60px] items-center ">
              <Link href="#" className="w-[120px] inline-block">
                <Image src={logo} alt="logo" />
              </Link>
              <div className="flex items-center gap-[30px]">
                <Link
                  href="#"
                  className="text-black text-[14px] font-semibold flex items-center gap-[5px]"
                >
                  <span>Why Apollo</span>
                  <AiOutlineArrowDown />
                </Link>
                <Link
                  href="#"
                  className="text-black text-[14px] font-semibold flex items-center gap-[5px]"
                >
                  <span>Platform</span>
                  <AiOutlineArrowDown />
                </Link>
                <Link
                  href="#"
                  className="text-black text-[14px] font-semibold flex items-center gap-[5px]"
                >
                  <span>Solutions</span>
                  <AiOutlineArrowDown />
                </Link>
                <Link
                  href="#"
                  className="text-black text-[14px] font-semibold flex items-center gap-[5px]"
                >
                  <span>Pricing</span>
                  <AiOutlineArrowDown />
                </Link>
                <Link
                  href="#"
                  className="text-black text-[14px] font-semibold flex items-center gap-[5px]"
                >
                  <span>Resources</span>
                  <AiOutlineArrowDown />
                </Link>
              </div>
            </div>
            <div className="flex gap-[30px] items-center">
              <Link
                href="#"
                className="text-black text-[14px] font-semibold flex items-center gap-[5px]"
              >
                <span>Schedule demo</span>
              </Link>
              <Link
                href="#"
                className="flex py-[15px] gap-2 items-center bg-white hover:border-yellow-300 border-2 border-yellow-400 text-black text-[16px] h-full px-[15px] font-medium rounded-md"
              >
                <span>Log in</span> <BsArrowRight className="text-[20px]" />
              </Link>
              <Link
                href="#"
                className="flex py-[15px] gap-2 items-center hover:bg-yellow-300 bg-yellow-400 text-black text-[16px] h-full px-[15px] font-medium rounded-md"
              >
                <span>Sign up for free</span>{" "}
                <BsArrowRight className="text-[20px]" />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <header className="block xl:hidden bg-white">
        <div className="flex justify-between py-[30px] px-[15px] items-center">
          <div>
            <Link href="#" className="w-[120px] inline-block">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <div>
            <button onClick={() => setShow(!show)} className="text-[40px]">
              <HiMenu />
            </button>
          </div>
        </div>
        <div>
          {show ? (
            <div className="flex flex-col gap-[15px]">
              <Link
                href="#"
                className="text-black text-[14px] font-semibold flex items-center gap-[5px] justify-between p-[15px] border-b border-gray-300"
              >
                <span>Why Apollo</span>
                <AiOutlineArrowDown />
              </Link>
              <Link
                href="#"
                className="text-black text-[14px] font-semibold flex items-center gap-[5px] justify-between p-[15px] border-b border-gray-300"
              >
                <span>Platform</span>
                <AiOutlineArrowDown />
              </Link>
              <Link
                href="#"
                className="text-black text-[14px] font-semibold flex items-center gap-[5px] justify-between p-[15px] border-b border-gray-300"
              >
                <span>Solutions</span>
                <AiOutlineArrowDown />
              </Link>
              <Link
                href="#"
                className="text-black text-[14px] font-semibold flex items-center gap-[5px] justify-between p-[15px] border-b border-gray-300"
              >
                <span>Pricing</span>
                <AiOutlineArrowDown />
              </Link>
              <Link
                href="#"
                className="text-black text-[14px] font-semibold flex items-center gap-[5px] justify-between p-[15px] border-b border-gray-300"
              >
                <span>Resources</span>
                <AiOutlineArrowDown />
              </Link>
            </div>
          ) : null}
        </div>
      </header>
    </>
  );
}
