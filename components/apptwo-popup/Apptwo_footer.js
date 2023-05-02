import React from "react";
import Link from "next/link";
import Image from "next/image";
import icon1 from "../../public/images/001-internet-explorer.png";
import icon2 from "../../public/images/002-opera.png";
import icon3 from "../../public/images/003-chrome.png";
import icon4 from "../../public/images/004-facebook.png";
import icon5 from "../../public/images/005-twitter.png";
import icon6 from "../../public/images/006-firefox.png";
import icon7 from "../../public/images/007-app-store.png";
import icon8 from "../../public/images/008-telegram.png";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Apptwo_footer() {
  return (
    <>
      <div className="fixed bottom-0 left-[420px] right-0 z-[30] border-t border-gray-200 bg-gray-100 p-4 hidden lg:block">
        <div className="flex 2xl:gap-0 2xl:justify-between gap-4 items-center">
          <select
            name=""
            id=""
            className="text-gray-600 py-1 px-3 bg-white text-14px"
          >
            <option value="">English</option>
            <option value="">Freance</option>
          </select>
          <p className="text-gray-900 text-[12px]">
            {" "}
            ©
            <Link
              href=""
              className="mx-1 text-gray-900 text-[12px] underline underline-offset-1"
            >
              temp-mail.io
            </Link>{" "}
            2023
          </p>
          <div className="hidden 2xl:flex gap-3 items-center">
            <Link href="" className="w-[15px] h-[15px]">
              <Image src={icon1} alt="image" className="w-full" />
            </Link>
            <Link href="" className="w-[15px] h-[15px]">
              <Image src={icon2} alt="image" className="w-full" />
            </Link>
            <Link href="" className="w-[15px] h-[15px]">
              <Image src={icon3} alt="image" className="w-full" />
            </Link>
            <Link href="" className="w-[15px] h-[15px]">
              <Image src={icon6} alt="image" className="w-full" />
            </Link>
            <Link href="" className="w-[15px] h-[15px]">
              <Image src={icon7} alt="image" className="w-full" />
            </Link>
            <Link href="" className="w-[15px] h-[15px]">
              <Image src={icon8} alt="image" className="w-full" />
            </Link>
          </div>
          <div className="hidden 2xl:flex gap-3 items-center">
            <Link href="" className="w-[15px] h-[15px]">
              <Image src={icon5} alt="image" className="w-full" />
            </Link>
            <Link href="" className="w-[15px] h-[15px]">
              <Image src={icon4} alt="image" className="w-full" />
            </Link>
          </div>
          <div className="hidden 2xl:flex gap-3 items-center">
            <Link
              href=""
              className=" text-gray-900 text-[12px] hover:underline underline-offset-1"
            >
              Blog
            </Link>
            <Link
              href=""
              className=" text-gray-900 text-[12px] hover:underline underline-offset-1"
            >
              Extensions
            </Link>
            <Link
              href=""
              className=" text-gray-900 text-[12px] hover:underline underline-offset-1"
            >
              Donate
            </Link>
            <Link
              href=""
              className=" text-gray-900 text-[12px] hover:underline underline-offset-1"
            >
              FAQ
            </Link>
            <Link
              href=""
              className=" text-gray-900 text-[12px] hover:underline underline-offset-1"
            >
              Privacy Policy
            </Link>
            <Link
              href=""
              className=" text-gray-900 text-[12px] hover:underline underline-offset-1"
            >
              Terms of Service
            </Link>
            <Link
              href=""
              className=" text-gray-900 text-[12px] hover:underline underline-offset-1"
            >
              Contact us
            </Link>
          </div>
          <div className=" block 2xl:hidden ml-auto">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex items-center w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  <span>Menu</span>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 bottom-[40px] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Blog
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Extensions
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Donate
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          FAQ
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Privacy Policy
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Terms of Service
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Contact us
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
}
