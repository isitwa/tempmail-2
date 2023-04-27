import React from "react";
import Link from "next/link";
import Image from "next/image";
import chrome from "../../public/images/Chrome.svg";
import Ftlogo from "../../public/images/ftlogo.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Footer_Home() {
  return (
    <>
      <footer className="block py-[80px]">
        <div className="w-full 2xl:w-[1440px] mx-auto px-[15px]">
          <div className="grid grid-cols-12 gap-[20px]">
            <div className="col-span-12 md:col-span-9">
              <div className="grid grid-cols-12 gap-[20px]">
                <div className="col-span-12">
                  <Link href="#" className="w-[120px] inline-block">
                    <Image src={Ftlogo} alt="image" className="w-full" />
                  </Link>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                  <div className="flex flex-col gap-[10px] mb-[30px] md:mb-[45px]">
                    <h4 className="text-black font-semibold text-[16px]">
                      Platform
                    </h4>
                    <Link href="#" className="text-black text-[14px]">
                      Product overview
                    </Link>
                    <Link href="#" className="text-black text-[14px]">
                      Prospecting & intelligence
                    </Link>
                    <Link href="#" className="text-black text-[14px]">
                      Enrichment & job change alerts
                    </Link>
                    <Link href="#" className="text-black text-[14px]">
                      Sales engagement & analytics
                    </Link>
                    <Link href="#" className="text-black text-[14px]">
                      NEW! Buying Intent Data
                    </Link>
                    <Link href="#" className="text-black text-[14px]">
                      API
                    </Link>
                    <Link href="#" className="text-black text-[14px]">
                      Integrations
                    </Link>
                    <Link href="#" className="text-black text-[14px]">
                      Security
                    </Link>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                  <div className="flex flex-col gap-[10px] mb-[30px] md:mb-[45px]">
                    <h4 className="text-black font-semibold text-[16px]">
                      Why Apollo?
                    </h4>
                    <Link href="#" className="text-black text-[14px]">
                      Our data{" "}
                    </Link>
                    <Link href="#" className="text-black text-[14px]">
                      Customer reviews{" "}
                    </Link>
                    <Link href="#" className="text-black text-[14px]">
                      G2 Crowd rankings{" "}
                    </Link>
                  </div>
                  <div className="flex flex-col gap-[10px] mb-[30px] md:mb-[45px]">
                    <h4 className="text-black font-semibold text-[16px]">
                      See how we compare
                    </h4>
                    <Link href="#" className="text-black text-[14px]">
                      ZoomInfo
                    </Link>
                    <Link href="#" className="text-black text-[14px]">
                      Lusha
                    </Link>
                    <Link href="#" className="text-black text-[14px]">
                      Seamless.ai
                    </Link>
                    <Link href="#" className="text-black text-[14px]">
                      RocketReach
                    </Link>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                  <div className="flex flex-col gap-[10px] mb-[30px] md:mb-[45px]">
                    <h4 className="text-black font-semibold text-[16px]">
                      Resources
                    </h4>
                    <Link href="#" className="text-black text-[14px]">
                      Blog
                    </Link>
                    <Link href="#" className="text-black text-[14px]">
                      Knowledge base
                    </Link>
                  </div>
                  <div className="flex flex-col gap-[10px] mb-[30px] md:mb-[45px]">
                    <h4 className="text-black font-semibold text-[16px]">
                      Company
                    </h4>
                    <Link href="#" className="text-black text-[14px]">
                      About Apollo{" "}
                    </Link>
                    <Link href="#" className="text-black text-[14px]">
                      Leadership{" "}
                    </Link>
                    <Link href="#" className="text-black text-[14px]">
                      Partners{" "}
                    </Link>
                    <Link href="#" className="text-black text-[14px]">
                      Careers{" "}
                    </Link>
                    <Link href="#" className="text-black text-[14px]">
                      In the news{" "}
                    </Link>
                    <Link href="#" className="text-black text-[14px]">
                      Apollo privacy center{" "}
                    </Link>
                    <Link href="#" className="text-black text-[14px]">
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-3">
              <div className="flex flex-col gap-[15px]">
                <div className="flex gap-[10px] items-center">
                  <Link
                    href="#"
                    className="bg-blue-500 text-whiite w-[35px] h-[35px] rounded-md text-white text-[16px] grid place-content-center"
                  >
                    <FaFacebookF className="" />
                  </Link>
                  <Link
                    href="#"
                    className="bg-blue-500 text-whiite w-[35px] h-[35px] rounded-md text-white text-[16px] grid place-content-center"
                  >
                    <FaTwitter className="" />
                  </Link>
                  <Link
                    href="#"
                    className="bg-blue-500 text-whiite w-[35px] h-[35px] rounded-md text-white text-[16px] grid place-content-center"
                  >
                    <FaLinkedinIn className="" />
                  </Link>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <h2 className="text-black text-[22px] font-semibold">
                    Prospect on LinkedIn
                  </h2>
                  <p className="text-black text-[17px]">
                    Gather verified email addresses & phone numbers directly
                    from LinkedIn, reach out, and see when they open your
                    emails.
                  </p>
                  <div className="mt-[5px]">
                    <Link
                      href="#"
                      className="inline-flex gap-[10px] items-center hover:border-yellow-300 border-2 border-yellow-400 rounded-md py-[15px] px-[20px]"
                    >
                      <div className="w-[35px] h-[35px]">
                        <Image
                          src={chrome}
                          alt="image"
                          className="w-full h-full"
                        />
                      </div>
                      <p className="text-black text-[15px] font-semibold">
                        Apollo Chrome extension
                      </p>
                      <AiOutlineArrowRight className="text-[19px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
