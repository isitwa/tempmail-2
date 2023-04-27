import React, { Fragment, useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import Email from "../public/images/mail.png";
import checkimg from "../public/images/checkbox.png";
import user from "../public/images/user.bmp";
import { Listbox } from "@headlessui/react";
import { Menu } from "@headlessui/react";
import { Dialog, Transition } from "@headlessui/react";

import LeftSidebar from "../components/inbox_components/LeftSidebar";

import { RxCaretSort } from "react-icons/rx";
import { AiOutlineMail } from "react-icons/ai";
import { RiMailCheckLine } from "react-icons/ri";
import { IoArrowUndoOutline, IoArrowRedoOutline } from "react-icons/io5";
import {
  Bars3CenterLeftIcon,
  XMarkIcon,
  BellIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import {
  BanknotesIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { BsCode } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";

import LeftSidebarDomain from "../components/domain_components/LeftSidebarDomain";
import SidenavLink_Inbox2 from "../components/SidenavLink_Inbox2";
const cards = [
  { name: "Mail Domain", href: "#", icon: AiOutlineMail, amount: "$30,659.45" },
  {
    name: "Total Email Account",
    href: "#",
    icon: AiOutlineMail,
    amount: "$30,659.45",
  },
  {
    name: "Mail Group Account",
    href: "#",
    icon: RiMailCheckLine,
    amount: "$30,659.45",
  },
  // More items...
];
const statusStyles = {
  success: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-gray-100 text-gray-800",
};
const transactions = [
  {
    id: 1,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "USD",
    status: "success",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  // More transactions...
];
const people = [
  {
    number: "1",
    name: "tony@gamil.com",
    pic: user,
  },
  {
    number: "2",
    name: "chris@gamil.com",
    pic: user,
  },
  {
    number: "3",
    name: "jhon@gamil.com",
    pic: user,
  },
  {
    number: "4",
    name: "willy@gamil.com",
    pic: user,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Inbox2() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selected, setSelected] = useState(people[3]);
  return (
    <>
      {/* ///////////////////////////// */}
      <div className="flex h-full flex-col">
        {/* Top nav*/}

        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xxl grow flex-1 flex-col bg-white">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-gray-600"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <SidenavLink_Inbox2 />
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-0 flex-shrink-0"></div>
            </div>
          </Dialog>
        </Transition.Root>
        {/* Bottom section */}
        <div className="flex min-h-0 flex-1 overflow-hidden">
          {/* Narrow sidebar*/}
          <LeftSidebar />

          {/* Main area */}
          <main className=" flex flex-col lg:ml-52 xl:ml-60 md:px-3 lg:px-0 w-full">
            <div className="sticky bg-gray-900 top-0 z-10 sm:pl-3 sm:pt-3 flex justify-between md:hidden">
              <button
                type="button"
                className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-white hover:text-gray-900 "
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
              {/* top header icons */}
              <div className="flex md:hidden justify-end gap-3 items-center pr-3">
                <button className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
                <button className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>
                <button className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                </button>
                <button className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                </button>
                <Menu as="div" className="relative inline-block text-left">
                  <div className="w-[30px] h-[30px]">
                    <Menu.Button className="inline-flex w-full justify-center">
                      <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                        <Image src={user} alt="image" />
                      </div>
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                              Account settings
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
                              Support
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
                              License
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full px-4 py-2 text-left text-sm"
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <div className="hidden md:grid grid-cols-12 gap-4 items-center bg-white py-2 px-5 border-b border-gray-200">
              <div className="col-span-6 md:col-span-5">
                <div className="flex items-center border border-gray-200 rounded-md p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search messages"
                    className="text-[13px] p-1 w-[300px]"
                  />
                </div>
              </div>
              <div className="col-span-6 md:col-span-2 hidden md:block"></div>
              <div className=" col-span-6 md:col-span-5">
                <div className="flex justify-end gap-3 items-center ">
                  <button className="text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  </button>
                  <button className="text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                      />
                    </svg>
                  </button>
                  <button className="text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                  </button>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex w-full justify-center">
                        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                          <Image src={user} alt="image" />
                        </div>
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                                Account settings
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
                                Support
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
                                License
                              </a>
                            )}
                          </Menu.Item>
                          <form method="POST" action="#">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  type="submit"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block w-full px-4 py-2 text-left text-sm"
                                  )}
                                >
                                  Sign out
                                </button>
                              )}
                            </Menu.Item>
                          </form>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div class="grid md:grid-cols-12 h-full bg-white">
                <div className=" border-r border-gray-200 md:col-span-5">
                  <div className="flex items-center justify-between border-b border-gray-200 py-1 px-4 bg-white">
                    <div className="flex gap-3 items-center grow">
                      <div>
                        <input
                          type="checkbox"
                          className="border-1 border-gray-400"
                        />
                      </div>

                      <button className="text-[12px] text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                      <div className="border-l border-gray-300 h-[20px] w-[1px]"></div>
                      {/* <button
                        type="button"
                        className="text-gray-800 py-1 px-2 text-[14px] rounded-md bg-gray-300 hidden md:block"
                      >
                        All
                      </button>
                      <button
                        type="button"
                        className="text-gray-800 py-1 px-2 text-[14px] rounded-md hidden md:block"
                      >
                        Read
                      </button>
                      <button
                        type="button"
                        className="text-gray-800 py-1 px-2 text-[14px] rounded-md hidden md:block"
                      >
                        Unread
                      </button> */}
                      <div className="flex gap-2 items-center grow mr-4">
                        <Listbox value={selected} onChange={setSelected}>
                          {({ open }) => (
                            <>
                              <div className="relative w-full">
                                <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-200 bg-white py-[3px] pl-3 pr-10 text-left  sm:text-sm">
                                  <div className="flex gap-2 items-center">
                                    <div className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] rounded-full overflow-hidden">
                                      <Image
                                        src={selected.pic}
                                        alt="imaege"
                                        width="100"
                                        height="100"
                                      />
                                    </div>
                                    <span className="block truncate text-[12px] md:text-[14px]">
                                      {selected.name}
                                    </span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                      <ChevronUpDownIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </div>
                                </Listbox.Button>

                                <Transition
                                  show={open}
                                  as={Fragment}
                                  leave="transition ease-in duration-100"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {people.map((person) => (
                                      <Listbox.Option
                                        key={person.id}
                                        className={({ active }) =>
                                          classNames(
                                            active
                                              ? "text-white bg-indigo-600"
                                              : "text-gray-900",
                                            "relative cursor-default select-none py-2 pl-3 pr-9"
                                          )
                                        }
                                        value={person}
                                      >
                                        {({ selected, active }) => (
                                          <div className="flex items-center gap-2">
                                            <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                                              <Image
                                                src={person.pic}
                                                alt="imaege"
                                                width="100"
                                                height="100"
                                              />
                                            </div>
                                            <span
                                              className={classNames(
                                                selected
                                                  ? "font-semibold"
                                                  : "font-normal",
                                                "block truncate"
                                              )}
                                            >
                                              {person.name}
                                            </span>

                                            {selected ? (
                                              <span
                                                className={classNames(
                                                  active
                                                    ? "text-white"
                                                    : "text-indigo-600",
                                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                                )}
                                              >
                                                <CheckIcon
                                                  className="h-5 w-5"
                                                  aria-hidden="true"
                                                />
                                              </span>
                                            ) : null}
                                          </div>
                                        )}
                                      </Listbox.Option>
                                    ))}
                                  </Listbox.Options>
                                </Transition>
                              </div>
                            </>
                          )}
                        </Listbox>
                        <button
                          type="button"
                          className="text-[14px] text-gray-500"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        className="text-gray-500 text-[14px]"
                      >
                        <div className="flex items-center gap-2">
                          {/* <span className=" hidden md:block">
                            {" "}
                            Newest first
                          </span> */}
                          <RxCaretSort className="text-[20px]" />
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 py-3 px-2 md:p-4 overflow-y-auto h-[81vh]">
                    <div className="flex justify-between p-2 md:p-3 rounded-md bg-blue-500  ">
                      <div className="flex gap-3">
                        <div className="w-[30px] h-[30px] rounded-md">
                          <Image
                            src={user}
                            alt="image"
                            className=" object-cover  rounded-md "
                          />
                        </div>
                        <div className="flex flex-col">
                          <h5 className="text-white text-[14px]">
                            admin@gmail.com
                          </h5>
                          <h6 className="text-white text-[14px]">
                            Reset your password on Sinplelogin
                          </h6>
                        </div>
                      </div>
                      <div>
                        <h6 className="text-white text-[12px] md:text-[14px]">
                          8:34 PM
                        </h6>
                      </div>
                    </div>
                    <div className="flex justify-between p-2 rounded-md ">
                      <div className="flex gap-3  relative">
                        <span className=" absolute bg-blue-500 w-[8px] h-[8px] rounded-full -left-[12px] top-[10px] z-[10]"></span>
                        <div className="w-[30px] h-[30px] rounded-md">
                          <Image
                            src={checkimg}
                            alt="image"
                            className=" object-cover  rounded-md"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h5 className="text-gray-800 text-[14px] font-medium md:font-semibold ">
                            admin@gmail.com
                          </h5>
                          <h6 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            Reset your password on Sinplelogin
                          </h6>
                        </div>
                      </div>
                      <div>
                        <h6 className="text-gray-800 text-[12px] md:text-[14px] font-semibold">
                          8:34 PM
                        </h6>
                      </div>
                    </div>
                    <div className="flex justify-between p-2 rounded-md ">
                      <div className="flex gap-3  relative">
                        <span className=" absolute bg-blue-500 w-[8px] h-[8px] rounded-full -left-[12px] top-[10px] z-[10]"></span>
                        <div className="w-[30px] h-[30px] rounded-md">
                          <Image
                            src={user}
                            alt="image"
                            className=" object-cover  rounded-md"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h5 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            admin@gmail.com
                          </h5>
                          <h6 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            Reset your password on Sinplelogin
                          </h6>
                        </div>
                      </div>
                      <div>
                        <h6 className="text-gray-800 text-[12px] md:text-[14px] font-semibold">
                          8:34 PM
                        </h6>
                      </div>
                    </div>
                    <div className="flex justify-between p-2 rounded-md ">
                      <div className="flex gap-3  relative">
                        <span className=" absolute bg-blue-500 w-[8px] h-[8px] rounded-full -left-[12px] top-[10px] z-[10]"></span>
                        <div className="w-[30px] h-[30px] rounded-md">
                          <Image
                            src={user}
                            alt="image"
                            className=" object-cover  rounded-md"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h5 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            admin@gmail.com
                          </h5>
                          <h6 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            Reset your password on Sinplelogin
                          </h6>
                        </div>
                      </div>
                      <div>
                        <h6 className="text-gray-800 text-[12px] md:text-[14px] font-semibold">
                          8:34 PM
                        </h6>
                      </div>
                    </div>
                    <div className="flex justify-between p-2 rounded-md ">
                      <div className="flex gap-3  relative">
                        <span className=" absolute bg-blue-500 w-[8px] h-[8px] rounded-full -left-[12px] top-[10px] z-[10]"></span>
                        <div className="w-[30px] h-[30px] rounded-md">
                          <Image
                            src={user}
                            alt="image"
                            className=" object-cover  rounded-md"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h5 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            admin@gmail.com
                          </h5>
                          <h6 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            Reset your password on Sinplelogin
                          </h6>
                        </div>
                      </div>
                      <div>
                        <h6 className="text-gray-800 text-[12px] md:text-[14px] font-semibold">
                          8:34 PM
                        </h6>
                      </div>
                    </div>
                    <div className="flex justify-between p-2 rounded-md ">
                      <div className="flex gap-3  relative">
                        <span className=" absolute bg-blue-500 w-[8px] h-[8px] rounded-full -left-[12px] top-[10px] z-[10]"></span>
                        <div className="w-[30px] h-[30px] rounded-md">
                          <Image
                            src={user}
                            alt="image"
                            className=" object-cover  rounded-md"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h5 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            admin@gmail.com
                          </h5>
                          <h6 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            Reset your password on Sinplelogin
                          </h6>
                        </div>
                      </div>
                      <div>
                        <h6 className="text-gray-800 text-[12px] md:text-[14px] font-semibold">
                          8:34 PM
                        </h6>
                      </div>
                    </div>
                    <div className="flex justify-between p-2 rounded-md ">
                      <div className="flex gap-3  relative">
                        <span className=" absolute bg-blue-500 w-[8px] h-[8px] rounded-full -left-[12px] top-[10px] z-[10]"></span>
                        <div className="w-[30px] h-[30px] rounded-md">
                          <Image
                            src={user}
                            alt="image"
                            className=" object-cover  rounded-md"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h5 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            admin@gmail.com
                          </h5>
                          <h6 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            Reset your password on Sinplelogin
                          </h6>
                        </div>
                      </div>
                      <div>
                        <h6 className="text-gray-800 text-[12px] md:text-[14px] font-semibold">
                          8:34 PM
                        </h6>
                      </div>
                    </div>
                    <div className="flex justify-between p-2 rounded-md ">
                      <div className="flex gap-3  relative">
                        <span className=" absolute bg-blue-500 w-[8px] h-[8px] rounded-full -left-[12px] top-[10px] z-[10]"></span>
                        <div className="w-[30px] h-[30px] rounded-md">
                          <Image
                            src={user}
                            alt="image"
                            className=" object-cover  rounded-md"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h5 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            admin@gmail.com
                          </h5>
                          <h6 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            Reset your password on Sinplelogin
                          </h6>
                        </div>
                      </div>
                      <div>
                        <h6 className="text-gray-800 text-[12px] md:text-[14px] font-semibold">
                          8:34 PM
                        </h6>
                      </div>
                    </div>
                    <div className="flex justify-between p-2 rounded-md ">
                      <div className="flex gap-3  relative">
                        <span className=" absolute bg-blue-500 w-[8px] h-[8px] rounded-full -left-[12px] top-[10px] z-[10]"></span>
                        <div className="w-[30px] h-[30px] rounded-md">
                          <Image
                            src={user}
                            alt="image"
                            className=" object-cover  rounded-md"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h5 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            admin@gmail.com
                          </h5>
                          <h6 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            Reset your password on Sinplelogin
                          </h6>
                        </div>
                      </div>
                      <div>
                        <h6 className="text-gray-800 text-[12px] md:text-[14px] font-semibold">
                          8:34 PM
                        </h6>
                      </div>
                    </div>
                    <div className="flex justify-between p-2 rounded-md ">
                      <div className="flex gap-3  relative">
                        <span className=" absolute bg-blue-500 w-[8px] h-[8px] rounded-full -left-[12px] top-[10px] z-[10]"></span>
                        <div className="w-[30px] h-[30px] rounded-md">
                          <Image
                            src={user}
                            alt="image"
                            className=" object-cover  rounded-md"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h5 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            admin@gmail.com
                          </h5>
                          <h6 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            Reset your password on Sinplelogin
                          </h6>
                        </div>
                      </div>
                      <div>
                        <h6 className="text-gray-800 text-[12px] md:text-[14px] font-semibold">
                          8:34 PM
                        </h6>
                      </div>
                    </div>
                    <div className="flex justify-between p-2 rounded-md ">
                      <div className="flex gap-3  relative">
                        <span className=" absolute bg-blue-500 w-[8px] h-[8px] rounded-full -left-[12px] top-[10px] z-[10]"></span>
                        <div className="w-[30px] h-[30px] rounded-md">
                          <Image
                            src={user}
                            alt="image"
                            className=" object-cover  rounded-md"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h5 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            admin@gmail.com
                          </h5>
                          <h6 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            Reset your password on Sinplelogin
                          </h6>
                        </div>
                      </div>
                      <div>
                        <h6 className="text-gray-800 text-[12px] md:text-[14px] font-semibold">
                          8:34 PM
                        </h6>
                      </div>
                    </div>
                    <div className="flex justify-between p-2 rounded-md ">
                      <div className="flex gap-3  relative">
                        <span className=" absolute bg-blue-500 w-[8px] h-[8px] rounded-full -left-[12px] top-[10px] z-[10]"></span>
                        <div className="w-[30px] h-[30px] rounded-md">
                          <Image
                            src={user}
                            alt="image"
                            className=" object-cover  rounded-md"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h5 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            admin@gmail.com
                          </h5>
                          <h6 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            Reset your password on Sinplelogin
                          </h6>
                        </div>
                      </div>
                      <div>
                        <h6 className="text-gray-800 text-[12px] md:text-[14px] font-semibold">
                          8:34 PM
                        </h6>
                      </div>
                    </div>
                    <div className="flex justify-between p-2 rounded-md ">
                      <div className="flex gap-3  relative">
                        <span className=" absolute bg-blue-500 w-[8px] h-[8px] rounded-full -left-[12px] top-[10px] z-[10]"></span>
                        <div className="w-[30px] h-[30px] rounded-md">
                          <Image
                            src={user}
                            alt="image"
                            className=" object-cover  rounded-md"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h5 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            admin@gmail.com
                          </h5>
                          <h6 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            Reset your password on Sinplelogin
                          </h6>
                        </div>
                      </div>
                      <div>
                        <h6 className="text-gray-800 text-[12px] md:text-[14px] font-semibold">
                          8:34 PM
                        </h6>
                      </div>
                    </div>
                    <div className="flex justify-between p-2 rounded-md ">
                      <div className="flex gap-3  relative">
                        <span className=" absolute bg-blue-500 w-[8px] h-[8px] rounded-full -left-[12px] top-[10px] z-[10]"></span>
                        <div className="w-[30px] h-[30px] rounded-md">
                          <Image
                            src={user}
                            alt="image"
                            className=" object-cover  rounded-md"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h5 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            admin@gmail.com
                          </h5>
                          <h6 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            Reset your password on Sinplelogin
                          </h6>
                        </div>
                      </div>
                      <div>
                        <h6 className="text-gray-800 text-[12px] md:text-[14px] font-semibold">
                          8:34 PM
                        </h6>
                      </div>
                    </div>
                    <div className="flex justify-between p-2 rounded-md ">
                      <div className="flex gap-3  relative">
                        <span className=" absolute bg-blue-500 w-[8px] h-[8px] rounded-full -left-[12px] top-[10px] z-[10]"></span>
                        <div className="w-[30px] h-[30px] rounded-md">
                          <Image
                            src={user}
                            alt="image"
                            className=" object-cover  rounded-md"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h5 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            admin@gmail.com
                          </h5>
                          <h6 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            Reset your password on Sinplelogin
                          </h6>
                        </div>
                      </div>
                      <div>
                        <h6 className="text-gray-800 text-[12px] md:text-[14px] font-semibold">
                          8:34 PM
                        </h6>
                      </div>
                    </div>
                    <div className="flex justify-between p-2 rounded-md ">
                      <div className="flex gap-3  relative">
                        <span className=" absolute bg-blue-500 w-[8px] h-[8px] rounded-full -left-[12px] top-[10px] z-[10]"></span>
                        <div className="w-[30px] h-[30px] rounded-md">
                          <Image
                            src={user}
                            alt="image"
                            className=" object-cover  rounded-md"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h5 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            admin@gmail.com
                          </h5>
                          <h6 className="text-gray-800 text-[14px] font-medium md:font-semibold">
                            Reset your password on Sinplelogin
                          </h6>
                        </div>
                      </div>
                      <div>
                        <h6 className="text-gray-800 text-[12px] md:text-[14px] font-semibold">
                          8:34 PM
                        </h6>
                      </div>
                    </div>
                    <div className="flex justify-between p-2 rounded-md bg-slate-200">
                      <div className="flex gap-3">
                        <div className="w-[30px] h-[30px] rounded-md">
                          <Image
                            src={user}
                            alt="image"
                            className=" object-cover  rounded-md"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h5 className="text-gray-800 text-[14px] font-light md:font-normal">
                            admin@gmail.com
                          </h5>
                          <h6 className="text-gray-800 text-[14px] font-light md:font-normal">
                            Reset your password on Sinplelogin
                          </h6>
                        </div>
                      </div>
                      <div>
                        <h6 className="text-gray-800 text-[12px] md:text-[14px] font-light md:font-normal">
                          8:34 PM
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" overflow-y-auto h-[86vh] md:col-span-7">
                  <div className="flex flex-col gap-4  py-8 px-0 md:px-5">
                    <div className="block md:hidden md:hidden bg-gray-900 py-4 px-3">
                      <Link
                        href=""
                        className="flex items-center gap-1 text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                          />
                        </svg>
                        <span>Back</span>{" "}
                      </Link>
                    </div>
                    <h3 className="text-[18px] md:text-[20px] text-gray-800 font-semibold px-4">
                      Reset your password on SimpleLogin
                    </h3>
                    <div className="flex flex-col border border-gray-200 rounded-md bg-white overflow-hidden">
                      <div className="flex justify-between border-b border-gray-200  p-6 ">
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-3">
                            <h4 className="text-gray-800 font-semibold text-[14px]  md:text-[16px]">
                              From
                            </h4>
                            <h4 className=" text-gray-800  text-[14px]  md:text-[16px] flex gap-2 items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>admin@gmail.com</span>
                            </h4>
                          </div>
                          <div className="flex gap-3">
                            <h4 className="text-gray-800 font-semibold  text-[14px]  md:text-[16px]">
                              To
                            </h4>
                            <h4 className=" text-gray-800  text-[14px]  md:text-[16px] flex gap-2 items-center">
                              <span>Isitwa#=@pm.me</span>
                            </h4>
                          </div>
                          <div className="div">
                            <div className=" inline-flex gap-1 border border-gray-200 rounded-md items-center">
                              <button className="p-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-4 h-4 text-gray-500"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                  />
                                </svg>
                              </button>
                              <div className="border-r border-gray-300 w-[1px] h-[20px]"></div>
                              <button className="p-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-4 h-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </button>
                              <div className="border-r border-gray-300 w-[1px] h-[20px]"></div>
                              <button className="p-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-4 h-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                                  />
                                </svg>
                              </button>
                              <div className="border-r border-gray-300 w-[1px] h-[20px]"></div>
                              <button className="p-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-4 h-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 6h.008v.008H6V6z"
                                  />
                                </svg>
                              </button>
                              <div className="border-r border-gray-300 w-[1px] h-[20px]"></div>
                              <button className="p-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-4 h-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1 items-center">
                            <button type="button" className="p-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                              </svg>
                            </button>
                            <button type="button" className="p-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                                />
                              </svg>
                            </button>
                            <h3 className="text-[14px] text-gray-600">
                              8:34 PM
                            </h3>
                          </div>
                          <div className="flex justify-end">
                            <button type="button" className="p-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </button>
                          </div>
                          <div className="flex justify-end">
                            <div className=" inline-flex gap-1 border border-gray-200 rounded-md items-center">
                              <button className="p-2">
                                <IoArrowUndoOutline />
                              </button>
                              <div className="border-r border-gray-300 w-[1px] h-[20px]"></div>
                              <button className="p-2">
                                <IoArrowUndoOutline />
                              </button>
                              <div className="border-r border-gray-300 w-[1px] h-[20px]"></div>
                              <button className="p-2">
                                <IoArrowRedoOutline />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="block p-6">
                        <Image src={Email} alt="image" className=" w-full" />
                        <div className="block border rounded-lg border-gray-200 mt-5">
                          <div className="flex gap-3 items-center justify-between border-gray-200 border-b p-3">
                            <div className="flex items-center gap-3">
                              <h5 className="text-[14px] text-gray-400">
                                Reply to:
                              </h5>
                              <div className="flex items-center gap-2 px-2 py-1 rounded-lg text-gray-500 bg-gray-200">
                                <h6 className="text-[14px] text-gray-500 ">
                                  admin@gmail.com
                                </h6>
                                <button type="button">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-3 h-3"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M6 18L18 6M6 6l12 12"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div className="flex gap-3 items-center">
                              <button
                                type="button"
                                className="text-gray-400 text-[14px]"
                              >
                                Cc
                              </button>
                              <button
                                type="button"
                                className="text-gray-400 text-[14px]"
                              >
                                Bcc
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-col p-3 h-[300px]">
                            <div className="flex flex-col gap-3">
                              <h3 className="text-[14px] text-black">Hello</h3>
                              <h3 className="text-[14px] text-black">
                                Thank You.
                              </h3>
                            </div>
                            <div className="flex justify-between items-center mt-auto">
                              <div className="flex gap-3 items-center">
                                <button type="button" className="text-gray-400">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                                    />
                                  </svg>
                                </button>
                                <button type="button" className="text-gray-400">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                    />
                                  </svg>
                                </button>
                                <button type="button" className="text-gray-400">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                    />
                                  </svg>
                                </button>
                              </div>
                              <div className="flex gap-3 items-center">
                                <button type="button">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-three-dots w-4 h-4 rotate-90 text-gray-400"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                  </svg>
                                </button>
                                <button
                                  type="button"
                                  className="bg-blue-600 text-white text-[14px] rounded-lg px-4 py-2"
                                >
                                  Send Message
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message list*/}
            {/* Right sidebar */}
          </main>
        </div>
      </div>
      {/* Mobile Footer Nav */}
      {/* <FooterFixNav /> */}
    </>
  );
}
