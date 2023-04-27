import Link from "next/link";
import React from "react";
import Image from "next/image";
import w1 from "../public/images/w1.png";
import w2 from "../public/images/w2.png";
import w3 from "../public/images/w3.jpg";
import Email from "../public/images/mail.png";
import checkimg from "../public/images/checkbox.png";
import user from "../public/images/user.bmp";
import person from "../public/images/person.jpg";
import robot from "../public/images/robot.jpg";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { RxCaretSort } from "react-icons/rx";
import { AiOutlineMail } from "react-icons/ai";
import { RiMailCheckLine } from "react-icons/ri";
import { IoArrowUndoOutline, IoArrowRedoOutline } from "react-icons/io5";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { MdPublishedWithChanges, MdOutlineArrowForward } from "react-icons/md";
import { AiFillFastForward, AiOutlineDelete } from "react-icons/ai";
import { SlEyeglass } from "react-icons/sl";
import { CiLogin } from "react-icons/ci";
import { BiHistory, BiUserPlus } from "react-icons/bi";
import sm1 from "../public/images/sm1.webp";
import sm2 from "../public/images/sm2.webp";
import sm3 from "../public/images/sm3.webp";
import sm4 from "../public/images/sm4.webp";
import {
  BsQuestion,
  BsArrowClockwise,
  BsDownload,
  BsCode,
  BsPrinter,
} from "react-icons/bs";
import ads1 from "../public/images/ads1.jpg";
import { FaMedal } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { BiRefresh } from "react-icons/bi";

import { Menu, Transition } from "@headlessui/react";
import {
  ArchiveBoxIcon,
  ArrowRightCircleIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
  UserPlusIcon,
} from "@heroicons/react/20/solid";

import { Fragment } from "react";

import ads from "../public/images/ads.png";
import icon1 from "../public/images/001-internet-explorer.png";
import icon2 from "../public/images/002-opera.png";
import icon3 from "../public/images/003-chrome.png";
import icon4 from "../public/images/004-facebook.png";
import icon5 from "../public/images/005-twitter.png";
import icon6 from "../public/images/006-firefox.png";
import icon7 from "../public/images/007-app-store.png";
import icon8 from "../public/images/008-telegram.png";

import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Moblie_List_Mail from "@/components/Moblie_List_Mail";
import Apptwo_footer from "@/components/apptow-popup/Apptwo_footer";

import CreateAcc_popup from "@/components/apptow-popup/CreateAcc_popup";
import Login_Acc_Popup from "@/components/apptow-popup/Login_Acc_Popup";
import AppTwo_HeaderFull from "@/components/apptow-popup/AppTwo_HeaderFull";

const people = [
  { id: 1, name: "Wade Cooper.com" },
  { id: 2, name: "Arlene Mccoy.com" },
  { id: 3, name: "Devon Webb.com" },
  { id: 4, name: "Tom Cook.com" },
  { id: 5, name: "Tanya Fox.com" },
  { id: 6, name: "Hellen Schmidt.com" },
  { id: 7, name: "Caroline Schultz.com" },
  { id: 8, name: "Mason Heaney.com" },
  { id: 9, name: "Claudie Smitham.com" },
  { id: 10, name: "Emil Schaefer.com" },
];

const people1 = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
  { id: 7, name: "Caroline Schultz" },
  { id: 8, name: "Mason Heaney" },
  { id: 9, name: "Claudie Smitham" },
  { id: 10, name: "Emil Schaefer" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AppTwo() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [selected, setSelected] = useState(people[3]);
  const [selected1, setSelected1] = useState(people[3]);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  return (
    <>
      {modalOpen2 && <Login_Acc_Popup setOpenModal2={setModalOpen2} />}
      {modalOpen1 && <CreateAcc_popup setOpenModa1={setModalOpen1} />}
      {/* popup  Create Acc */}
      <Transition.Root show={open2} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen2}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform rounded-lg bg-harry-100 text-left shadow-xl transition-all sm:my-8 sm:w-full  md:w-[1000px]">
                  <button
                    onClick={() => setOpen2(false)}
                    className="text-white absolute top-[10px] right-[10px] z-[5]"
                  >
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  {/*  */}
                  <div className="flex flex-col md:flex-row items-stretch">
                    <div className=" bg-harry-200 relative rounded-md w-[50%]">
                      <table className="w-full -mt-[15px] border-b border-harry-50">
                        <thead>
                          <tr>
                            <th className="w-[300px] px-[10px]"></th>
                            <th className="w-[90px] px-[10px]">
                              <h4 className="text-white text-center text-[12px] bg-harry-50 uppercase rounded-full py-[4px] px-[8px]">
                                Free
                              </h4>
                            </th>
                            <th className="w-[90px] px-[10px]">
                              <h4 className="text-white text-center text-[12px] bg-orange-500 uppercase rounded-full py-[4px] px-[8px]">
                                Premium
                              </h4>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-harry-50 hover:text-white">
                            <td className="py-2 px-[20px] ">
                              <div className="flex gap-2 items-center">
                                <h3 className="text-white text-[14px]">
                                  Custom domains
                                </h3>
                                <button className="bg-white text-harry-100 rounded-full">
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
                                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                                    />
                                  </svg>
                                </button>
                                <h4 className="text-white text-[12px] bg-harry-50 uppercase rounded-full py-[4px] px-[10px]">
                                  New
                                </h4>
                              </div>
                            </td>
                            <td className="text-center p-2 border-x border-harry-50">
                              <h3 className="text-white text-[14px]">-</h3>
                            </td>
                            <td className="text-center p-2">
                              <h3 className="text-white text-[14px]">10</h3>
                            </td>
                          </tr>
                          <tr className="hover:bg-harry-50 hover:text-white">
                            <td className="py-2 px-[20px]">
                              <div className="flex gap-2 items-center">
                                <h3 className="text-white text-[14px]">
                                  No ads
                                </h3>
                              </div>
                            </td>
                            <td className="text-center p-2 border-x border-harry-50">
                              <h3 className="text-white text-[14px]">-</h3>
                            </td>
                            <td className="text-center p-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-green-500 mx-auto"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </td>
                          </tr>
                          <tr className="hover:bg-harry-50 hover:text-white">
                            <td className="py-2 px-[20px]">
                              <div className="flex gap-2 items-center">
                                <h3 className="text-white text-[14px]">
                                  Emails at the same time
                                </h3>
                              </div>
                            </td>
                            <td className="text-center p-2 border-x border-harry-50">
                              <h3 className="text-white text-[14px]">-</h3>
                            </td>
                            <td className="text-center p-2">
                              <h3 className="text-white text-[14px]">10</h3>
                            </td>
                          </tr>
                          <tr className="hover:bg-harry-50 hover:text-white">
                            <td className="py-2 px-[20px]">
                              <div className="flex gap-2 items-center">
                                <h3 className="text-white text-[14px]">
                                  Messages storage time (days)
                                </h3>
                              </div>
                            </td>
                            <td className="text-center p-2 border-x border-harry-50">
                              <h3 className="text-white text-[14px]">-</h3>
                            </td>
                            <td className="text-center p-2">
                              <h3 className="text-white text-[14px]">30</h3>
                            </td>
                          </tr>
                          <tr className="hover:bg-harry-50 hover:text-white">
                            <td className="py-2 px-[20px]">
                              <div className="flex gap-2 items-center">
                                <h3 className="text-white text-[14px]">
                                  History size
                                </h3>
                              </div>
                            </td>
                            <td className="text-center p-2 border-x border-harry-50">
                              <h3 className="text-white text-[14px]">50</h3>
                            </td>
                            <td className="text-center p-2">
                              <h3 className="text-white text-[14px]">500</h3>
                            </td>
                          </tr>
                          <tr className="hover:bg-harry-50 hover:text-white">
                            <td className="py-2 px-[20px]">
                              <div className="flex gap-2 items-center">
                                <h3 className="text-white text-[14px]">
                                  Cloud history sync
                                </h3>
                              </div>
                            </td>
                            <td className="text-center p-2 border-x border-harry-50">
                              <h3 className="text-white text-[14px]">-</h3>
                            </td>
                            <td className="text-center p-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-green-500 mx-auto"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </td>
                          </tr>
                          <tr className="hover:bg-harry-50 hover:text-white">
                            <td className="py-2 px-[20px]">
                              <div className="flex gap-2 items-center">
                                <h3 className="text-white text-[14px]">
                                  Unlimited forwarding
                                </h3>
                              </div>
                            </td>
                            <td className="text-center p-2 border-x border-harry-50">
                              <h3 className="text-white text-[14px]">-</h3>
                            </td>
                            <td className="text-center p-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-green-500 mx-auto"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </td>
                          </tr>
                          <tr className="hover:bg-harry-50 hover:text-white">
                            <td className="py-2 px-[20px]">
                              <div className="flex gap-2 items-center">
                                <h3 className="text-white text-[14px]">
                                  Inbox in extensions
                                </h3>
                                <button className="bg-white text-harry-100 rounded-full">
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
                                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </td>
                            <td className="text-center p-2 border-x border-harry-50">
                              <h3 className="text-white text-[14px]">-</h3>
                            </td>
                            <td className="text-center p-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-green-500 mx-auto"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="flex flex-col pb-[10px]">
                        <h4 className="text-harry-50 text-[13px] uppercase py-[15px] px-[20px]">
                          Will Be Available Soon
                        </h4>
                        <div className="flex gap-2 hover:bg-harry-50 hover:text-white py-[6px] px-[20px]">
                          <button className="bg-white text-harry-100 rounded-full shrink-0 w-[20px]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4 ml-[2px]"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                              />
                            </svg>
                          </button>
                          <h3 className="text-white text-[14px] uppercase">
                            API
                          </h3>
                        </div>
                        <div className="flex gap-2 hover:bg-harry-50 hover:text-white py-[6px] px-[20px]">
                          <button className="bg-white text-harry-100 rounded-full shrink-0 w-[20px]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4 ml-[2px]"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                              />
                            </svg>
                          </button>
                          <h3 className="text-white text-[14px] uppercase">
                            and more
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 w-[50%]">
                      <h3 className="text-[30px] font-semibold text-white mb-3">
                        tempmailplus
                      </h3>

                      <div className="mb-5 block border-l-2 border-green-600 bg-lime-800 p-[10px]">
                        <p className="text-white text-[14px]">
                          You can make a refund within 30 days after the
                          subscription. VAT included. Cancel anytime.
                        </p>
                      </div>
                      <form action="">
                        <div className="flex flex-col gap-4">
                          <input
                            type="text"
                            placeholder="Enter your real email"
                            className="border border-harry-50  py-[6px] px-[20px] fs-14px text-white bg-harry-200 w-full  rounded-l-md"
                          />
                          <div className="flex items-center gap-2">
                            <p className="text-white text-[12px]">
                              By clicking "Subscribe" you agree to
                            </p>
                            <Link href="" className="text-white text-[12px]">
                              Terms of Service
                            </Link>
                          </div>
                          <button
                            type="submit"
                            className=" bg-orange-500 text-white text-[14px] py-[8px] text-center rounded-md"
                          >
                            Subscribe
                          </button>

                          <p className="text-white text-[12px] text-center">
                            Secure payment by Paddle
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* forwarding */}
      <Transition.Root show={open1} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen1}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-thor-300 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full  md:w-[700px] sm:p-6">
                  <form action="">
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between">
                        <div className="flex gap-3 items-center">
                          <h2 className="text-white text-[24px] font-semibold">
                            Forwarding
                          </h2>
                          <p className="bg-white text-harry-100 rounded-sm text-[12px] py-[2px] px-[4px]">
                            v2.0
                          </p>
                        </div>

                        <button
                          onClick={() => setOpen1(false)}
                          className="text-white"
                        >
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
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="block p-[10px] bg-harry-300 border-l-2 border-blue-300">
                        <h3 className="text-white text-[14px] font-light ">
                          input your real email and choose duration
                        </h3>
                      </div>

                      <div className="flex gap-2 items-end justify-between">
                        <div className="flex flex-col gap-3">
                          <div className="flex gap-3">
                            <label htmlFor="" className="text-harry-50">
                              Email from
                            </label>
                            <div className="flex gap-1">
                              <button className="text-zinc-800 text-[12px] py-[2px] px-[4px] rounded-md bg-harry-50">
                                Random
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-[50%]">
                              <input
                                type="text"
                                placeholder="Email name"
                                className="border border-harry-50  py-[6px] px-[20px] fs-14px text-white bg-transparent w-full  "
                              />
                            </div>
                            <div className="w-[50%]">
                              <Listbox value={selected} onChange={setSelected}>
                                {({ open }) => (
                                  <>
                                    <div className="relative">
                                      <Listbox.Button className="relative w-full cursor-default border border-l-0 border-harry-50 bg-transparent py-2 pl-3 pr-10 text-left sm:text-sm">
                                        <span className="block truncate">
                                          {selected.name}
                                        </span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                          <ChevronUpDownIcon
                                            className="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      </Listbox.Button>

                                      <Transition
                                        show={open}
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                      >
                                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                          {people1.map((person) => (
                                            <Listbox.Option
                                              key={person.id}
                                              className={({ active }) =>
                                                classNames(
                                                  active
                                                    ? "text-white bg-blue-600"
                                                    : "text-gray-900",
                                                  "relative cursor-default select-none py-2 pl-3 pr-9"
                                                )
                                              }
                                              value={person}
                                            >
                                              {({ selected, active }) => (
                                                <>
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
                                                          : "text-blue-600",
                                                        "absolute inset-y-0 right-0 flex items-center pr-4"
                                                      )}
                                                    >
                                                      <CheckIcon
                                                        className="h-5 w-5"
                                                        aria-hidden="true"
                                                      />
                                                    </span>
                                                  ) : null}
                                                </>
                                              )}
                                            </Listbox.Option>
                                          ))}
                                        </Listbox.Options>
                                      </Transition>
                                    </div>
                                  </>
                                )}
                              </Listbox>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <MdOutlineArrowForward className="text-[25px] mb-2 text-gray-200 w-[40px]" />
                        </div>
                        <div className="flex flex-col gap-3">
                          <div className="flex gap-3">
                            <label htmlFor="" className="text-harry-50">
                              To email (your real email)
                            </label>
                          </div>
                          <div
                            className="
                          "
                          >
                            <input
                              type="text"
                              placeholder="Email real name"
                              className="border border-harry-50  py-[6px] px-[20px] fs-14px text-white bg-transparent w-full "
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="flex flex-col gap-3 w-full ">
                          <label htmlFor="" className="text-harry-50">
                            Duration (in miutes)
                          </label>
                          <div className="flex items-center">
                            <input
                              type="text"
                              placeholder="Email name"
                              className="border border-harry-50  py-[6px] px-[20px] fs-14px text-white bg-transparent w-full  "
                            />
                            <div className="flex gap-[1px]">
                              <button className="text-white text-[14px] bg-gray-600 py-[9px] text-center w-[70px]">
                                1 day
                              </button>
                              <button className="text-white text-[14px] bg-gray-600 py-[9px] text-center w-[70px]">
                                4 days
                              </button>
                              <button className="text-white text-[14px] bg-gray-600 py-[9px] text-center w-[70px]">
                                7 days
                              </button>
                              <button className="text-white text-[14px] bg-gray-700 py-[9px] text-center w-[50px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6 mx-auto"
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
                      </div>
                      <p className="text-white text-[14px]">
                        Create your time-limited email forwarding and all
                        messages that would be sent to the selected email will
                        be also sent to your real email.
                      </p>
                      <div className="flex items-end">
                        <div className="w-[50%] items-end">
                          <Image src={robot} alt="image" className="w-full" />
                        </div>
                        <div className="w-[50%]">
                          <div className="flex gap-4 justify-end">
                            <button
                              onClick={() => setOpen1(false)}
                              className=" text-[14px] text-white py-[10px] px-[30px] rounded-md border border-gray-500"
                            >
                              Close
                            </button>
                            <button className=" text-[14px] text-white py-[10px] px-[30px] rounded-md border border-transparent bg-thor-400">
                              Create
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* change popup code */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-thor-300 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                      <h2 className="text-white text-[24px] font-semibold">
                        Change email
                      </h2>
                      <button
                        onClick={() => setOpen(false)}
                        className="text-white"
                      >
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <form action="">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                          <label
                            htmlFor=""
                            className="text-white text-[14px] font-light"
                          >
                            Name
                          </label>
                          <div className="flex w-full">
                            <div className="grow">
                              <input
                                type="text"
                                className="border border-harry-50  py-[6px] px-[20px] fs-14px text-white bg-transparent w-full  rounded-l-md"
                              />
                            </div>
                            <div className="shrink">
                              <button
                                type="button"
                                className="text-white fs-14px py-[7px] px-[20px] bg-thor-500 rounded-r-md focus-visible:outline-none focus-visible:bottom-0"
                              >
                                Random
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label
                            htmlFor=""
                            className="text-white text-[14px] font-light"
                          >
                            Domain
                          </label>
                          <Listbox value={selected} onChange={setSelected}>
                            {({ open }) => (
                              <>
                                <div className="relative mt-1">
                                  <Listbox.Button className="relative w-full cursor-default rounded-md border border-harry-50 bg-transparent   py-2 pl-3 pr-10 text-left shadow-sm focus:border-harry-50 focus:outline-none  sm:text-sm text-white">
                                    <span className="block truncate">
                                      {selected.name}
                                    </span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                      <ChevronUpDownIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </Listbox.Button>

                                  <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-harry-200 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                      <div className="block p-4 bg-harry-300 border-l-2 border-blue-300">
                                        <p className="text-[14px] font-light text-white">
                                          Want to use premium and custom domains{" "}
                                          <Link
                                            href=""
                                            className="font-semibold"
                                          >
                                            Go Premium
                                          </Link>
                                          and get these and other features!
                                        </p>
                                      </div>
                                      {people.map((person) => (
                                        <Listbox.Option
                                          key={person.id}
                                          className={({ active }) =>
                                            classNames(
                                              active
                                                ? "text-white bg-blue-600"
                                                : "text-white",
                                              "relative cursor-default select-none py-2 pl-3 pr-9"
                                            )
                                          }
                                          value={person}
                                        >
                                          {({ selected, active }) => (
                                            <>
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
                                                      : "text-white",
                                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                                  )}
                                                >
                                                  <CheckIcon
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                  />
                                                </span>
                                              ) : null}
                                            </>
                                          )}
                                        </Listbox.Option>
                                      ))}
                                    </Listbox.Options>
                                  </Transition>
                                </div>
                              </>
                            )}
                          </Listbox>
                        </div>
                        <div className="block p-4 bg-harry-300 border-l-2 border-blue-300">
                          <p className="text-[14px] font-light text-white">
                            {" "}
                            <Link href="" className="font-semibold">
                              Warning!
                            </Link>
                            All domains are available only for a limited time
                            period why? dont use temporary emails for important
                            stuff
                          </p>
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="bg-thor-400  text-white text-[16px] text-center w-full rounded-md py-[6px] "
                          >
                            Get it!
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* header dasktop */}

      <header className=" hidden xl:flex gap-5 2xl:gap-10 items-center bg-thor-300 p-[20px] sticky top-0 z-[996]">
        <div className="">
          <Link
            href="#"
            className="text-white font-bold text-[16px] 2xl:text-[32px]"
          >
            tempmail
          </Link>
        </div>

        <div className="hidden xl:block">
          <div className=" relative group w-[350px] 2xl:w-[400px] rounded-lg text-white bg-blue-500 group-hover:bg-blue-500">
            <div className="flex items-center">
              <div className="flex flex-col grow rounded-tl-md rounded-bl-md overflow-hidden group-hover:rounded-bl-none">
                <div className="text-center ">
                  <h3 className="text-[12px] text-center w-full py-[1px]">
                    Your temporary emails
                  </h3>
                </div>
                <div className=" text-center">
                  <div className=" flex justify-center bg-blue-600 group-hover:bg-blue-500">
                    <div className="flex items-center 2xl:h-[30px] gap-3">
                      <h3 className="text-[14px] 2xl:text-[18px] font-semibold">
                        083247872347823.com
                      </h3>
                      <div className="group-hover:hidden block">
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
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                      <div className=" group-hover:block hidden">
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
                            d="M4.5 15.75l7.5-7.5 7.5 7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex rounded-tr-md rounded-br-md overflow-hidden group-hover:rounded-br-none">
                <button
                  className="w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] flex justify-center items-center bg-blue-600 mx-[1px] relative
                "
                >
                  <BiHistory className="text-white text-[26px]" />
                  <div className="group-hover:block hidden absolute z-50 py-[6px] px-4 rounded-xl bg-harry-400 -bottom-[50px] w-[200px] right-[0]">
                    <div className="block relative">
                      <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-harry-400 -top-[15px] absolute  left-[70%] -translate-x-1/2"></div>
                    </div>
                    <h6 className="text-[16px] text-white text-center">
                      Open emails history
                    </h6>
                  </div>
                </button>
                <button
                  className="w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px]  flex justify-center items-center bg-blue-600
                "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="w-full  hidden group-hover:block absolute bg-blue-500 rounded-b-md overflow-hidden">
              <div className="flex flex-col">
                <div className="flex my-[1px] items-center  justify-between p-[6px] ">
                  <button className="flex gap-4 items-center">
                    <div className="bg-blue-800 w-[16px] h-[16px] p-[3px] rounded-full overflow-hidden">
                      <div className="bg-white rounded-full p-[4px] w-full h-full"></div>
                    </div>
                    <h3 className="text-[16px]"> 083247872347823.com</h3>
                  </button>
                  <div className="flex gap-4 items-center">
                    <button className="text-blue-300 text-[12px]">
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
                          d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                        />
                      </svg>
                    </button>
                    <div className=" relative">
                      <h4 className="text-[12px] text-white bg-blue-400 p-[3px] w-[20px] rounded-md text-center">
                        0
                      </h4>
                    </div>
                  </div>
                </div>
                <div
                  className=" flex justify-center bg-blue-600
                "
                >
                  <div className="flex gap-3 items-center py-[6px] ">
                    <h3 className="text-[12px]">Eamils count: 1/2</h3>
                    <div className=" relative ">
                      <BsQuestion className="text-[15px] bg-blue-800 rounded-full" />
                      {/* <div className="group-hover:block hidden absolute z-50 py-[6px] px-4 rounded-xl bg-harry-400 -top-[20px] w-[200px] right-[0]">
                        <div className="block relative">
                          <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-harry-400 -top-[15px] absolute  left-[70%] -translate-x-1/2"></div>
                        </div>
                        <h6 className="text-[16px] text-white text-center">
                          Open emails history
                        </h6>
                      </div> */}
                    </div>
                    <button className="text-gray-800 bg-white text-[12px] rounded-md py-[2px] px-[4px]">
                      Upgrade
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow  hidden xl:flex gap-8">
          <Link href="#" className=" group">
            <div className="flex  gap-2 relative align-middle items-center text-harry-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-center group-hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>

              <span className="text-[14px] 2xl:text-[16px] text-center group-hover:text-white">
                copy
              </span>
              <div className="group-hover:block hidden absolute py-[6px] px-4 rounded-xl bg-blue-600 -bottom-[50px] w-[120px] left-[50%] -translate-x-1/2">
                <div className="block relative">
                  <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-600 -top-[15px] absolute  left-[50%] -translate-x-1/2"></div>
                </div>

                <h6 className="text-[16px] text-white">Copy email</h6>
              </div>
            </div>
          </Link>
          <Link href="#" className=" group">
            <div className="flex gap-2 relative align-middle items-center text-harry-50">
              <BiRefresh className="text-[21px] group-hover:text-white" />
              <span className="text-[14px] 2xl:text-[16px] text-center group-hover:text-white">
                refresh
              </span>
              <div className="group-hover:block hidden absolute py-[6px] px-4 rounded-xl bg-blue-600 -bottom-[50px] w-[260px] left-[50%] -translate-x-1/2">
                <div className="block relative">
                  <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-600 -top-[15px] absolute  left-[50%] -translate-x-1/2"></div>
                </div>
                <h6 className="text-[16px] text-white text-center">
                  Refresh for new messages
                </h6>
              </div>
            </div>
          </Link>
          <Link href="#" className=" group">
            <div className="flex gap-2 relative align-middle items-center text-harry-50">
              <GiPerspectiveDiceSixFacesRandom className="text-[21px] group-hover:text-white" />
              <span className="text-[14px] 2xl:text-[16px] text-center group-hover:text-white">
                random
              </span>
              <div className="group-hover:block hidden absolute py-[6px] px-4 rounded-xl bg-blue-600 -bottom-[50px] w-[280px] left-[50%] -translate-x-1/2">
                <div className="block relative">
                  <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-600 -top-[15px] absolute  left-[50%] -translate-x-1/2"></div>
                </div>
                <h6 className="text-[16px] text-white text-center">
                  Get new random email address
                </h6>
              </div>
            </div>
          </Link>
          <button className=" group" onClick={() => setOpen(true)}>
            <div className="flex gap-2 relative align-middle items-center text-harry-50">
              <MdPublishedWithChanges className="text-[21px] group-hover:text-white" />
              <span className="text-[14px] 2xl:text-[16px] text-center group-hover:text-white">
                change
              </span>
              <div className="group-hover:block hidden absolute py-[6px] px-4 rounded-xl bg-blue-600 -bottom-[50px] w-[150px] left-[50%] -translate-x-1/2">
                <div className="block relative">
                  <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-600 -top-[15px] absolute  left-[50%] -translate-x-1/2"></div>
                </div>
                <h6 className="text-[16px] text-white text-center">
                  Change email
                </h6>
              </div>
            </div>
          </button>
          <button className=" group" onClick={() => setOpen1(true)}>
            <div className="flex gap-2 relative align-middle items-center text-harry-50">
              <AiFillFastForward className="text-[21px] group-hover:text-white" />
              <span className="text-[14px] 2xl:text-[16px] text-center group-hover:text-white">
                forwarding
              </span>
              <div className="group-hover:block hidden absolute py-[6px] px-4 rounded-xl bg-blue-600 -bottom-[70px] w-[260px] left-[50%] -translate-x-1/2">
                <div className="block relative">
                  <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-600 -top-[15px] absolute  left-[50%] -translate-x-1/2"></div>
                </div>
                <h6 className="text-[16px] text-white text-center">
                  Forwarding messages to your real email address
                </h6>
              </div>
            </div>
          </button>
          <Link href="#" className=" group">
            <div className="flex gap-2 relative align-middle items-center text-harry-50">
              <AiOutlineDelete className="text-[21px] group-hover:text-white" />
              <span className="text-[14px] 2xl:text-[16px] text-center group-hover:text-white">
                delete
              </span>
              <div className="group-hover:block hidden absolute py-[6px] px-4 rounded-xl bg-blue-600 -bottom-[50px] w-[210px] left-[50%] -translate-x-1/2">
                <div className="block relative">
                  <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-600 -top-[15px] absolute  left-[50%] -translate-x-1/2"></div>
                </div>
                <h6 className="text-[16px] text-white text-center">
                  Delete current email
                </h6>
              </div>
            </div>
          </Link>
        </div>
        <div className="hidden xl:block">
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-[14px] text-white py-[6px] px-[15px]"
            >
              <CiLogin className="text-[20px] md:hidden block" />
              <span className=" hidden md:block">Login</span>
            </Link>
            <button
              onClick={() => setOpen2(true)}
              className="text-[14px] text-white bg-blue-600 hover:bg-blue-800 rounded-md py-[6px] px-[15px]"
            >
              Premium
            </button>
            <div>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="w-[35px] h-[35px] rounded-full overflow-hidden border border-gray-500">
                    <Image src={user} alt="image" />
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
                  <Menu.Items className="absolute right-0 z-10 overflow-hidden mt-2 w-56 origin-top-right divide-y divide-gray-700 rounded-md bg-thor-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <div className="flex flex-col px-5 gap-1">
                        <h3 className=" text-[14px] text-gray-500">
                          You are signed in as
                        </h3>
                        <h2 className=" text-[14px] text-white">
                          Jack@nighttorb.com
                        </h2>
                        <h4 className=" text-[14px] text-gray-500">
                          Password: <span>*********</span>{" "}
                        </h4>
                      </div>
                    </div>
                    <div className="py-1">
                      <Link
                        href="#"
                        className=" flex items-center gap-2 px-5 py-1 hover:bg-gray-500"
                      >
                        <div className="w-[30px] h-[30px] overflow-hidden rounded-full">
                          <Image src={user} alt="image" />
                        </div>
                        <p className="text-[14px] text-white">
                          Tony@domian.com
                        </p>
                      </Link>
                      <Link
                        href="#"
                        className=" flex items-center gap-2 px-5 py-1 hover:bg-gray-500"
                      >
                        <div className="w-[30px] h-[30px] overflow-hidden rounded-full">
                          <Image src={user} alt="image" />
                        </div>
                        <p className="text-[14px] text-white">
                          Rock@domian.com
                        </p>
                      </Link>
                    </div>
                    <Menu.Item>
                      <button
                        onClick={() => {
                          setModalOpen1(true);
                        }}
                        className="text-gray-300 group flex items-center px-4 py-2 text-sm"
                      >
                        <BiUserPlus
                          className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        Create an account
                      </button>
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-700 text-gray-200"
                              : "text-gray-300",
                            "group flex items-center px-4 py-2 text-sm"
                          )}
                        >
                          <FaMedal
                            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          Premium
                        </a>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      <button
                        onClick={() => {
                          setModalOpen2(true);
                        }}
                        className="text-gray-300 group flex items-center px-4 py-2 text-sm"
                      >
                        <BiLogIn
                          className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        Login
                      </button>
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-700 text-gray-200"
                              : "text-gray-300",
                            "group flex items-center px-4 py-2 text-sm"
                          )}
                        >
                          <MdOutlineDeleteOutline
                            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          Delete
                        </a>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-700 text-gray-200"
                              : "text-gray-300",
                            "group flex items-center px-4 py-2 text-sm"
                          )}
                        >
                          <BiRefresh
                            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          Refresh
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </header>
      {/* header mobile */}
      <div className="block h-full">
        <div className="shrink bg-thor-700 h-[100vh] xl:h-[90vh] w-full lg:w-[420px] fixed left-0 bottom-0 z-[10] ">
          <div className="block xl:hidden ">
            <div className="flex justify-between items-center grow gap-5 p-3">
              <div className="">
                <Link
                  href="#"
                  className="text-black font-bold text-[16px] 2xl:text-[32px]"
                >
                  tempmail
                </Link>
              </div>
              <div className="flex items-center gap-2">
                {/* <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </div> */}

                {/* <input
              type="text"
              name=""
              id=""
              placeholder="mail@domain"
              className="text-white text-[14px] py-[4px] px-[10px] bg-transparent w-full"
            /> */}
                <button className="text-[14px] flex gap-2 items-center text-white bg-blue-600 hover:bg-blue-800 rounded-md py-[6px] px-[15px]">
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
                  <span className=""> admin@domain.co</span>
                </button>
              </div>
              <div className="block  landscape:hidden">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="w-[35px] h-[35px] rounded-full overflow-hidden border border-gray-500">
                      <Image src={user} alt="image" />
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
                    <Menu.Items className="absolute right-0 z-10 overflow-hidden mt-2 w-56 origin-top-right divide-y divide-gray-700 rounded-md bg-thor-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <div className="flex flex-col px-5 gap-1">
                          <h3 className=" text-[14px] text-gray-500">
                            You are signed in as
                          </h3>
                          <h2 className=" text-[14px] text-white">
                            Jack@nighttorb.com
                          </h2>
                          <h4 className=" text-[14px] text-gray-500">
                            Password: <span>*********</span>{" "}
                          </h4>
                        </div>
                      </div>
                      <div className="py-1">
                        <Link
                          href="#"
                          className=" flex items-center gap-2 px-5 py-1 hover:bg-gray-500"
                        >
                          <div className="w-[30px] h-[30px] overflow-hidden rounded-full">
                            <Image src={user} alt="image" />
                          </div>
                          <p className="text-[14px] text-white">
                            Tony@domian.com
                          </p>
                        </Link>
                        <Link
                          href="#"
                          className=" flex items-center gap-2 px-5 py-1 hover:bg-gray-500"
                        >
                          <div className="w-[30px] h-[30px] overflow-hidden rounded-full">
                            <Image src={user} alt="image" />
                          </div>
                          <p className="text-[14px] text-white">
                            Rock@domian.com
                          </p>
                        </Link>
                      </div>
                      <Menu.Item>
                        <button
                          onClick={() => {
                            setModalOpen1(true);
                          }}
                          className="text-gray-300 group flex items-center px-4 py-2 text-sm"
                        >
                          <BiUserPlus
                            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          Create an account
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-700 text-gray-200"
                                : "text-gray-300",
                              "group flex items-center px-4 py-2 text-sm"
                            )}
                          >
                            <FaMedal
                              className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            Premium
                          </a>
                        )}
                      </Menu.Item>

                      <button
                        onClick={() => {
                          setModalOpen2(true);
                        }}
                        className="text-gray-300 group flex items-center px-4 py-2 text-sm"
                      >
                        <BiLogIn
                          className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        Login
                      </button>

                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-700 text-gray-200"
                                : "text-gray-300",
                              "group flex items-center px-4 py-2 text-sm"
                            )}
                          >
                            <MdOutlineDeleteOutline
                              className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            Delete
                          </a>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-700 text-gray-200"
                                : "text-gray-300",
                              "group flex items-center px-4 py-2 text-sm"
                            )}
                          >
                            <BiRefresh
                              className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            Refresh
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex bg-thor-400 items-center">
              <h1 className="text-white text-[14px] font-light grow px-3 ">
                Your Mail Box
              </h1>
              <div
                className="flex shrink
              "
              >
                {/* <button className="text-white border-x border-gray-800 p-3 bg-thor-400 hover:bg-gray-400">
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
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </button> */}
                <button className="text-white p-3 bg-thor-400 hover:bg-thor-200/75">
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
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* <div className="flex bg-thor-400 items-center">
              <h1 className="text-white text-[12px] font-light grow px-3 ">
                Turn on notifications about new messages?
              </h1>
              <div
                className="flex shrink
              "
              >
                <button className="text-white border-x border-gray-800 p-3 bg-thor-400 hover:bg-gray-400">
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
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </button>
                <button className="text-white p-3 bg-thor-400 hover:bg-gray-400">
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div> */}
            <div className="flex h-[86vh] flex-col ">
              {/* email message code */}
              <div className="flex flex-col gap-1 py-3 px-2 md:p-4 overflow-y-auto h-[81vh]">
                <Moblie_List_Mail />
              </div>
              {/* <div className="flex flex-col gap-2 p-3">
                <div className="flex justify-between">
                  <Link
                    href=""
                    className="text-harry-50 text-[14px] font-light hover:text-white"
                  >
                    To: zjewiirencwio@coool.cm
                  </Link>
                  <Link
                    href=""
                    className="text-harry-50 text-[14px] font-light hover:text-white"
                  >
                    a few seconds ago
                  </Link>
                </div>
                <Link
                  href=""
                  className="text-harry-50 text-[14px] font-light hover:text-white"
                >
                  From: User name
                </Link>
                <Link href="">
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                      <h3 className="text-[18px] font-semibold text-white">
                        Hello{" "}
                      </h3>
                      <div className="bg-blue-600 rounded-full h-[8px] w-[8px]"></div>
                    </div>
                    <p className="text-harry-50 text-[14px] font-light text-ellipsis overflow-hidden">
                      Ea qui pariatur sint dolore occaecat aliqua nisi sunt
                      nulla. Minim nulla culpa amet qui eu cillum. Dolor
                      consectetur in anim proident aliquip excepteur anim aliqua
                      aliquip ea cillum cupidatat ea.
                    </p>
                  </div>
                </Link>
              </div> */}
              {/* no message code */}
              <div className="my-auto w-full">
                <div className="flex flex-col gap-2">
                  <BsArrowClockwise className="text-zinc-400 dark:text-zinc-900 text-[30px] mx-auto animate-spin" />
                  <h4 className="text-[16px] text-zinc-400 dark:text-zinc-900 font-light text-center">
                    No messages
                  </h4>
                  <p className="text-[14px] text-zinc-400 dark:text-zinc-900 font-light text-center">
                    Waiting for incoming messages
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" hidden lg:flex flex-col ml-[420px] mr-0 xl:mr-[300px] pb-10 px-[20px] 2xl:px-[100px] dark:bg-zinc-800  bg-thor-700 border-r border-gray-300 dark:border-zinc-600 ">
          {/* inner design */}
          <div className="flex xl:hidden justify-between items-center py-5">
            <div className="grow flex gap-8">
              <Link href="#" className=" group">
                <div className="flex  gap-2 relative align-middle items-center dark:text-harry-50 text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-center dark:group-hover:text-white group-hover:text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                    />
                  </svg>

                  <span className="text-[14px] 2xl:text-[16px] text-center dark:group-hover:text-white group-hover:text-black">
                    copy
                  </span>
                  <div className="group-hover:block hidden absolute z-[10] py-[6px] px-4 rounded-xl bg-blue-600 -bottom-[50px] w-[120px] left-[50%] -translate-x-1/2">
                    <div className="block relative">
                      <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-600 -top-[15px] absolute  left-[50%] -translate-x-1/2"></div>
                    </div>

                    <h6 className="text-[14px] text-white">Copy email</h6>
                  </div>
                </div>
              </Link>
              <Link href="#" className=" group">
                <div className="flex gap-2 relative align-middle items-center dark:text-harry-50 text-gray-800">
                  <BiRefresh className="text-[21px] dark:group-hover:text-white group-hover:text-black" />
                  <span className="text-[14px] 2xl:text-[16px] text-center dark:group-hover:text-white group-hover:text-black">
                    refresh
                  </span>
                  <div className="group-hover:block hidden absolute py-[6px] px-4 rounded-xl bg-blue-600 -bottom-[50px] w-[260px] left-[50%] -translate-x-1/2">
                    <div className="block relative">
                      <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-600 -top-[15px] absolute  left-[50%] -translate-x-1/2"></div>
                    </div>
                    <h6 className="text-[14px] text-white text-center">
                      Refresh for new messages
                    </h6>
                  </div>
                </div>
              </Link>
              <Link href="#" className=" group">
                <div className="flex gap-2 relative align-middle items-center dark:text-harry-50 text-gray-800">
                  <GiPerspectiveDiceSixFacesRandom className="text-[21px] dark:group-hover:text-white group-hover:text-black" />
                  <span className="text-[14px] 2xl:text-[16px] text-center dark:group-hover:text-white group-hover:text-black">
                    random
                  </span>
                  <div className="group-hover:block hidden absolute py-[6px] px-4 rounded-xl bg-blue-600 -bottom-[50px] w-[280px] left-[50%] -translate-x-1/2">
                    <div className="block relative">
                      <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-600 -top-[15px] absolute  left-[50%] -translate-x-1/2"></div>
                    </div>
                    <h6 className="text-[14px] text-white text-center">
                      Get new random email address
                    </h6>
                  </div>
                </div>
              </Link>
              <button className=" group" onClick={() => setOpen(true)}>
                <div className="flex gap-2 relative align-middle items-center dark:text-harry-50 text-gray-800">
                  <MdPublishedWithChanges className="text-[21px] dark:group-hover:text-white group-hover:text-black" />
                  <span className="text-[14px] 2xl:text-[16px] text-center dark:group-hover:text-white group-hover:text-black">
                    change
                  </span>
                  <div className="group-hover:block hidden absolute py-[6px] px-4 rounded-xl bg-blue-600 -bottom-[50px] w-[150px] left-[50%] -translate-x-1/2">
                    <div className="block relative">
                      <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-600 -top-[15px] absolute  left-[50%] -translate-x-1/2"></div>
                    </div>
                    <h6 className="text-[14px] text-white text-center">
                      Change email
                    </h6>
                  </div>
                </div>
              </button>
              <button className=" group" onClick={() => setOpen1(true)}>
                <div className="flex gap-2 relative align-middle items-center dark:text-harry-50 text-gray-800">
                  <AiFillFastForward className="text-[21px] dark:group-hover:text-white group-hover:text-black" />
                  <span className="text-[14px] 2xl:text-[16px] text-center dark:group-hover:text-white group-hover:text-black">
                    forwarding
                  </span>
                  <div className="group-hover:block hidden absolute py-[6px] px-4 rounded-xl bg-blue-600 -bottom-[70px] w-[260px] left-[50%] -translate-x-1/2">
                    <div className="block relative">
                      <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-600 -top-[15px] absolute  left-[50%] -translate-x-1/2"></div>
                    </div>
                    <h6 className="text-[14px] text-white text-center">
                      Forwarding messages to your real email address
                    </h6>
                  </div>
                </div>
              </button>
              <Link href="#" className=" group">
                <div className="flex gap-2 relative align-middle items-center dark:text-harry-50 text-gray-800">
                  <AiOutlineDelete className="text-[21px] dark:group-hover:text-white group-hover:text-black" />
                  <span className="text-[14px] 2xl:text-[16px] text-center dark:group-hover:text-white group-hover:text-black">
                    delete
                  </span>
                  <div className="group-hover:block hidden absolute py-[6px] px-4 rounded-xl bg-blue-600 -bottom-[50px] w-[210px] left-[50%] -translate-x-1/2">
                    <div className="block relative">
                      <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-600 -top-[15px] absolute  left-[50%] -translate-x-1/2"></div>
                    </div>
                    <h6 className="text-[14px] text-white text-center">
                      Delete current email
                    </h6>
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              {/* <Link
                  href="#"
                  className="text-[14px] text-white py-[6px] px-[15px]"
                >
                  <CiLogin className="text-[20px] md:hidden block" />
                  <span className=" hidden md:block">Login</span>
                </Link>
                <button
                  onClick={() => setOpen2(true)}
                  className="text-[14px] text-white bg-blue-600 hover:bg-blue-800 rounded-md py-[6px] px-[15px]"
                >
                  Premium
                </button> */}
              <div>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="w-[35px] h-[35px] rounded-full overflow-hidden border border-gray-500">
                      <Image src={user} alt="image" />
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
                    <Menu.Items className="absolute right-0 z-10 overflow-hidden mt-2 w-56 origin-top-right divide-y divide-gray-700 rounded-md bg-thor-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <div className="flex flex-col px-5 gap-1">
                          <h3 className=" text-[14px] text-gray-500">
                            You are signed in as
                          </h3>
                          <h2 className=" text-[14px] text-white">
                            Jack@nighttorb.com
                          </h2>
                          <h4 className=" text-[14px] text-gray-500">
                            Password: <span>*********</span>{" "}
                          </h4>
                        </div>
                      </div>
                      <div className="py-1">
                        <Link
                          href="#"
                          className=" flex items-center gap-2 px-5 py-1 hover:bg-gray-500"
                        >
                          <div className="w-[30px] h-[30px] overflow-hidden rounded-full">
                            <Image src={user} alt="image" />
                          </div>
                          <p className="text-[14px] text-white">
                            Tony@domian.com
                          </p>
                        </Link>
                        <Link
                          href="#"
                          className=" flex items-center gap-2 px-5 py-1 hover:bg-gray-500"
                        >
                          <div className="w-[30px] h-[30px] overflow-hidden rounded-full">
                            <Image src={user} alt="image" />
                          </div>
                          <p className="text-[14px] text-white">
                            Rock@domian.com
                          </p>
                        </Link>
                      </div>
                      <Menu.Item>
                        <button
                          onClick={() => {
                            setModalOpen1(true);
                          }}
                          className="text-gray-300 group flex items-center px-4 py-2 text-sm"
                        >
                          <BiUserPlus
                            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          Create an account
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-700 text-gray-200"
                                : "text-gray-300",
                              "group flex items-center px-4 py-2 text-sm"
                            )}
                          >
                            <FaMedal
                              className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            Premium
                          </a>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        <button
                          onClick={() => {
                            setModalOpen2(true);
                          }}
                          className="text-gray-300 group flex items-center px-4 py-2 text-sm"
                        >
                          <BiLogIn
                            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          Login
                        </button>
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-700 text-gray-200"
                                : "text-gray-300",
                              "group flex items-center px-4 py-2 text-sm"
                            )}
                          >
                            <MdOutlineDeleteOutline
                              className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            Delete
                          </a>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-700 text-gray-200"
                                : "text-gray-300",
                              "group flex items-center px-4 py-2 text-sm"
                            )}
                          >
                            <BiRefresh
                              className="mr-3 h-5 w-5  text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            Refresh
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <div
            className="
           h-[80vh] overflow-y-hidden hover:overflow-y-auto pr-5  scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin hover:scrollbar-thumb-gray-700 hover:scrollbar-track-gray-300"
          >
            {/* <div className="flex flex-col gap-2 mb-9">
              <div className="flex">
                <Link
                  href=""
                  className="flex gap-2 items-center text-[14px] text-gray-800 border border-gray-300 rounded-md py-[6px] px-[15px] "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 dark:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                  <span className="dark:text-white">Close this message </span>
                </Link>
              </div>
              <div className="flex justify-between">
                <Link
                  href=""
                  className="text-gray-600 text-[14px] font-light hover:text-gray-600 dark:hover:text-gray-300 dark:text-white "
                >
                  To: zjewiirencwio@coool.cm
                </Link>
                <Link
                  href=""
                  className="text-gray-600 text-[14px] font-light hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
                >
                  a few seconds ago
                </Link>
              </div>
              <Link
                href=""
                className="text-gray-600 text-[14px] font-light hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
              >
                From: User name admin@gmail.com
              </Link>

              <div className="flex flex-col gap-3">
                <h3 className="text-gray-900 text-[18px] dark:text-white">
                  Hello
                </h3>
                <div className="flex justify-center items-center gap-3">
                  <div className="border-b border-gray-600 w-[10%] h-[2px]"></div>
                  <div className="flex justify-center text-center  gap-3 my-4">
                    <div className="flex gap-3 relative z-[10]  px-4">
                      <button className="text-[13px]">
                        <div className="flex gap-3 items-center">
                          <BsDownload />
                          <span className="whitespace-nowrap">
                            Download message
                          </span>
                        </div>
                      </button>
                      <button className="text-[13px]">
                        <div className="flex gap-3 items-center">
                          <BsCode />
                          <span className="whitespace-nowrap">
                            Show original
                          </span>
                        </div>
                      </button>
                      <button className="text-[13px]">
                        <div className="flex gap-3 items-center">
                          <BsPrinter />
                          <span className="whitespace-nowrap">Print</span>
                        </div>
                      </button>
                      <button className="text-[13px]">
                        <div className="flex gap-3 items-center">
                          <AiOutlineDelete />
                          <span className="whitespace-nowrap">Delete</span>
                        </div>
                      </button>
                      <button className="text-[13px]">
                        <div className="flex gap-3 items-center">
                          <SlEyeglass />
                          <span className="whitespace-nowrap">
                            Mark as unread
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="border-b border-gray-600 w-[10%] h-[2px]"></div>
                </div>

                <p className="text-gray-700 text-[14px] font-light text-ellipsis overflow-hidden dark:text-white">
                  hi
                  <br />
                  Ea qui pariatur sint dolore occaecat aliqua nisi sunt nulla.
                  Minim nulla culpa amet qui eu cillum. Dolor consectetur in
                  anim proident aliquip excepteur anim aliqua aliquip ea cillum
                  cupidatat ea.
                </p>
                <p className="text-gray-700 text-[14px] font-light text-ellipsis overflow-hidden dark:text-white">
                  Disposable temporary email protects your real email address
                  from spam, advertising mailings, malwares. It's anonymous and
                  free. This email has a limited lifetime period: if this email
                  will not receive messages due to some time — it will be
                  removed. Sometimes disposable email is also called "throwaway
                  email", "10 minute mail", "tempmail", "trash mail" and "fake
                  mail". Temporary email can be used for different websites
                  (e.g. social networks), download files from file hostings, use
                  it each time you want to stash your real email and paste
                  temporary email instead. For example, public Wi-Fi spots,
                  blogs and forums require users to complete registration until
                  they can fully use their website.
                </p>
                <p className="text-gray-700 text-[14px] font-light text-ellipsis overflow-hidden dark:text-white">
                  Disposable temporary email protects your real email address
                  from spam, advertising mailings, malwares. It's anonymous and
                  free. This email has a limited lifetime period: if this email
                  will not receive messages due to some time — it will be
                  removed. Sometimes disposable email is also called "throwaway
                  email", "10 minute mail", "tempmail", "trash mail" and "fake
                  mail". Temporary email can be used for different websites
                  (e.g. social networks), download files from file hostings, use
                  it each time you want to stash your real email and paste
                  temporary email instead. For example, public Wi-Fi spots,
                  blogs and forums require users to complete registration until
                  they can fully use their website.
                </p>
                <p className="text-gray-700 text-[14px] font-light text-ellipsis overflow-hidden dark:text-white">
                  Disposable temporary email protects your real email address
                  from spam, advertising mailings, malwares. It's anonymous and
                  free. This email has a limited lifetime period: if this email
                  will not receive messages due to some time — it will be
                  removed. Sometimes disposable email is also called "throwaway
                  email", "10 minute mail", "tempmail", "trash mail" and "fake
                  mail". Temporary email can be used for different websites
                  (e.g. social networks), download files from file hostings, use
                  it each time you want to stash your real email and paste
                  temporary email instead. For example, public Wi-Fi spots,
                  blogs and forums require users to complete registration until
                  they can fully use their website.
                </p>
              </div>
            </div> */}
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
                    <h3 className="text-[14px] text-gray-600">8:34 PM</h3>
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
                      <h5 className="text-[14px] text-gray-400">Reply to:</h5>
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
                      <h3 className="text-[14px] text-black">Thank You.</h3>
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
            <div className="grid grid-cols-12 gap-10 mb-10 py-10">
              <div className="col-span-12">
                <h4 className="text-center text-[22px] font-medium text-gray-500 dark:text-white">
                  How to use temporary email?
                </h4>
              </div>
              <div className="col-span-4">
                <div className="flex flex-col text-center gap-4">
                  <div>
                    <h2 className="bg-gray-300 text-gray-700 text-[18px] place-items-center grid w-[55px] h-[55px] rounded-full mx-auto">
                      1
                    </h2>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-white">
                      Copy email address from the top left corner{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <div className="flex flex-col text-center gap-4">
                  <div>
                    <h2 className="bg-gray-300 text-gray-700 text-[18px] place-items-center grid w-[55px] h-[55px] rounded-full mx-auto">
                      2
                    </h2>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-white">
                      Use this to sign up on websites, social media, etc
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <div className="flex flex-col text-center gap-4">
                  <div>
                    <h2 className="bg-gray-300 text-gray-700 text-[18px] place-items-center grid w-[55px] h-[55px] rounded-full mx-auto">
                      3
                    </h2>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-white">
                      Read incoming emails on this page in the left side
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12">
                <div className="flex flex-col">
                  <h4 className="text-center text-[22px] font-medium text-gray-500 dark:text-white mb-5">
                    What is disposable temporary email?
                  </h4>
                  <p className="text-gray-500 dark:text-white text-[16px] text-center">
                    <a href="" target="_blank">
                      Disposable temporary email
                    </a>{" "}
                    protects your real email address from spam, advertising
                    mailings, malwares. It's anonymous and free. This email has
                    a limited lifetime period: if this email will not receive
                    messages due to some time — it will be removed. Sometimes
                    disposable email is also called "
                    <strong>throwaway email</strong>", "
                    <strong>10 minute mail</strong>", "<strong>tempmail</strong>
                    ", "<strong>trash mail</strong>" and "
                    <strong>fake mail</strong>". Temporary email can be used for
                    different websites (e.g. social networks), download files
                    from file hostings, use it each time you want to stash your
                    real email and paste temporary email instead. For example,
                    public Wi-Fi spots, blogs and forums require users to
                    complete registration until they can fully use their
                    website.
                  </p>
                </div>
              </div>
            </div>

            <div className=" mb-4">
              {/* <div className="flex  2xl:justify-center">
                <div className="flex flex-col 2xl:flex-row gap-4 2xl:items-center">
                  <Link
                    href=""
                    className="flex flex-col w-full w-[406px] border border-gray-200 rounded-md bg-white overflow-hidden group hover:drop-shadow-3xl"
                  >
                    <div className="flex flex-col gap-1 p-8">
                      <h6 className="uppercase text-blue-800 text-[15px] hover:text-blue-500">
                        pixel
                      </h6>
                      <h5 className="text-[16px] md:text-[20px] text-gray-800 group-hover:underline underline-offset-1">
                        Google Pixel Watch: the Best of Google and Fitbit
                      </h5>
                    </div>
                    <div className="block h-[170px] overflow-hidden">
                      <Image
                        src={w1}
                        alt="pixel"
                        width={100}
                        height={100}
                        className="object-cover w-full h-full group-hover:scale-105 ease-linear"
                      />
                    </div>
                  </Link>
                  <Link
                    href=""
                    className="flex flex-col border w-full w-[406px] border-gray-200 rounded-md bg-white overflow-hidden group hover:drop-shadow-3xl"
                  >
                    <div className="flex flex-col gap-1 p-8">
                      <h6 className="uppercase text-blue-800 text-[15px] hover:text-blue-500">
                        pixel
                      </h6>
                      <h5 className="text-[16px] md:text-[20px] text-gray-800 group-hover:underline underline-offset-1">
                        Google Pixel Watch: the Best of Google and Fitbit
                      </h5>
                    </div>
                    <div className="block h-[170px] overflow-hidden">
                      <Image
                        src={w2}
                        alt="pixel"
                        width={100}
                        height={100}
                        className="object-cover w-full h-full group-hover:scale-105 ease-linear"
                      />
                    </div>
                  </Link>
                </div>
              </div> */}

              {/* <section className="block py-[50px] md:py-[60px] ">
                <div className="mx-auto w-full px-[15px]">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-[20px] md:text-[30px] font-bold text-black leading-none dark:text-white">
                      Pursue your interests
                    </h2>
                    <p className="text-[14px] md:text-[20px] font-semibold leading-none text-gray-800 dark:text-white">
                      Subscribe to go deeper with our expert guidance
                    </p>
                  </div>
                  <div className="grid xl:grid-cols-2  2xl:grid-cols-4 gap-x-[15px]  gap-y-4 mt-8">
                    <div className="border border-gray-200 border-1 rounded-[4px] overflow-hidden">
                      <div className="block h-[140px] overflow-hidden">
                        <Image
                          src={sm1}
                          alt="image"
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="px-5 pt-3 pb-4 bg-white flex flex-col gap-2 h-[150px]">
                        <h3 className="text-[22px] text-gray-800 font-semibold">
                          Which? Gardening
                        </h3>
                        <p className="text-[18px] text-gray-800">
                          Get the garden you want all year round
                        </p>
                      </div>
                    </div>
                    <div className="border border-gray-200 border-1 rounded-[4px] overflow-hidden">
                      <div className="block h-[140px] overflow-hidden">
                        <Image
                          src={sm2}
                          alt="image"
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="px-5 pt-3 pb-4 bg-white flex flex-col gap-2 h-[150px]">
                        <h3 className="text-[22px] text-gray-800 font-semibold">
                          Which? Gardening
                        </h3>
                        <p className="text-[18px] text-gray-800">
                          Get the garden you want all year round
                        </p>
                      </div>
                    </div>
                    <div className="border border-gray-200 border-1 rounded-[4px] overflow-hidden">
                      <div className="block h-[140px] overflow-hidden">
                        <Image
                          src={sm3}
                          alt="image"
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="px-5 pt-3 pb-4 bg-white flex flex-col gap-2 h-[150px]">
                        <h3 className="text-[22px] text-gray-800 font-semibold">
                          Which? Gardening
                        </h3>
                        <p className="text-[18px] text-gray-800">
                          Get the garden you want all year round
                        </p>
                      </div>
                    </div>
                    <div className="border border-gray-200 border-1 rounded-[4px] overflow-hidden">
                      <div className="block h-[140px] overflow-hidden">
                        <Image
                          src={sm4}
                          alt="image"
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="px-5 pt-3 pb-4 bg-white flex flex-col gap-2 h-[150px]">
                        <h3 className="text-[22px] text-gray-800 font-semibold">
                          Which? Gardening
                        </h3>
                        <p className="text-[18px] text-gray-800">
                          Get the garden you want all year round
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section> */}

              <section className="block py-[25px] md:py-[30px] ">
                <div className="mx-auto w-full 2xl:px-[15px]">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-[20px] md:text-[30px] font-bold text-black leading-none dark:text-white">
                      All the latest
                    </h2>
                  </div>
                  <div className="grid xl:grid-cols-2  2xl:grid-cols-2 gap-4 mt-8">
                    <div className="flex flex-col border border-gray-200 rounded-md p-5 gap-1 group hover:drop-shadow-3xl ease-in bg-white">
                      <div className="flex gap-2">
                        <h3 className="text-[14px] text-slate-800">JAN 05</h3>
                        <span>.</span>
                        <Link href="#" className="text-blue-500 text-[14px]">
                          FITBIT
                        </Link>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] md:text-[16px] text-slate-800 group-hover:underline underline-offset-1"
                          >
                            Consequat consequat sit ut ea minim elit incididunt
                            irure
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="block h-[80px] w-[120px] overflow-hidden rounded-md"
                          >
                            <Image
                              src={person}
                              alt="image"
                              width={100}
                              height={100}
                              className="w-full h-full object-cover hover:scale-[1.1] ease-in"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-col border border-gray-200 rounded-md p-5 gap-1 group hover:drop-shadow-3xl ease-in bg-white">
                      <div className="flex gap-2">
                        <h3 className="text-[14px] text-slate-800">JAN 17</h3>
                        <span>.</span>
                        <Link href="#" className="text-blue-500 text-[14px]">
                          AIi
                        </Link>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] md:text-[16px] text-slate-800 group-hover:underline underline-offset-1"
                          >
                            Consequat consequat sit ut ea minim elit incididunt
                            irure
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="block h-[80px] w-[120px] overflow-hidden rounded-md"
                          >
                            <Image
                              src={person}
                              alt="image"
                              width={100}
                              height={100}
                              className="w-full h-full object-cover hover:scale-[1.1] ease-in"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-col border border-gray-200 rounded-md p-5 gap-1 group hover:drop-shadow-3xl ease-in bg-white">
                      <div className="flex gap-2">
                        <h3 className="text-[14px] text-slate-800">JAN 17</h3>
                        <span>.</span>
                        <Link href="#" className="text-blue-500 text-[14px]">
                          AIi
                        </Link>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] md:text-[16px] text-slate-800 group-hover:underline underline-offset-1"
                          >
                            Consequat consequat sit ut ea minim elit incididunt
                            irure
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="block h-[80px] w-[120px] overflow-hidden rounded-md"
                          >
                            <Image
                              src={person}
                              alt="image"
                              width={100}
                              height={100}
                              className="w-full h-full object-cover hover:scale-[1.1] ease-in"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-col border border-gray-200 rounded-md p-5 gap-1 group hover:drop-shadow-3xl ease-in bg-white">
                      <div className="flex gap-2">
                        <h3 className="text-[14px] text-slate-800">JAN 05</h3>
                        <span>.</span>
                        <Link href="#" className="text-blue-500 text-[14px]">
                          FITBIT
                        </Link>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] md:text-[16px] text-slate-800 group-hover:underline underline-offset-1"
                          >
                            Consequat consequat sit ut ea minim elit incididunt
                            irure
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="block h-[80px] w-[120px] overflow-hidden rounded-md"
                          >
                            <Image
                              src={person}
                              alt="image"
                              width={100}
                              height={100}
                              className="w-full h-full object-cover hover:scale-[1.1] ease-in"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-col border border-gray-200 rounded-md p-5 gap-1 group hover:drop-shadow-3xl ease-in bg-white">
                      <div className="flex gap-2">
                        <h3 className="text-[14px] text-slate-800">JAN 17</h3>
                        <span>.</span>
                        <Link href="#" className="text-blue-500 text-[14px]">
                          AIi
                        </Link>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] md:text-[16px] text-slate-800 group-hover:underline underline-offset-1"
                          >
                            Consequat consequat sit ut ea minim elit incididunt
                            irure
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="block h-[80px] w-[120px] overflow-hidden rounded-md"
                          >
                            <Image
                              src={person}
                              alt="image"
                              width={100}
                              height={100}
                              className="w-full h-full object-cover hover:scale-[1.1] ease-in"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-col border border-gray-200 rounded-md p-5 gap-1 group hover:drop-shadow-3xl ease-in bg-white">
                      <div className="flex gap-2">
                        <h3 className="text-[14px] text-slate-800">JAN 17</h3>
                        <span>.</span>
                        <Link href="#" className="text-blue-500 text-[14px]">
                          AIi
                        </Link>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] md:text-[16px] text-slate-800 group-hover:underline underline-offset-1"
                          >
                            Consequat consequat sit ut ea minim elit incididunt
                            irure
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="block h-[80px] w-[120px] overflow-hidden rounded-md"
                          >
                            <Image
                              src={person}
                              alt="image"
                              width={100}
                              height={100}
                              className="w-full h-full object-cover hover:scale-[1.1] ease-in"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-col border border-gray-200 rounded-md p-5 gap-1 group hover:drop-shadow-3xl ease-in bg-white">
                      <div className="flex gap-2">
                        <h3 className="text-[14px] text-slate-800">JAN 05</h3>
                        <span>.</span>
                        <Link href="#" className="text-blue-500 text-[14px]">
                          FITBIT
                        </Link>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] md:text-[16px] text-slate-800 group-hover:underline underline-offset-1"
                          >
                            Consequat consequat sit ut ea minim elit incididunt
                            irure
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="block h-[80px] w-[120px] overflow-hidden rounded-md"
                          >
                            <Image
                              src={person}
                              alt="image"
                              width={100}
                              height={100}
                              className="w-full h-full object-cover hover:scale-[1.1] ease-in"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-col border border-gray-200 rounded-md p-5 gap-1 group hover:drop-shadow-3xl ease-in bg-white">
                      <div className="flex gap-2">
                        <h3 className="text-[14px] text-slate-800">JAN 17</h3>
                        <span>.</span>
                        <Link href="#" className="text-blue-500 text-[14px]">
                          AIi
                        </Link>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] md:text-[16px] text-slate-800 group-hover:underline underline-offset-1"
                          >
                            Consequat consequat sit ut ea minim elit incididunt
                            irure
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="block h-[80px] w-[120px] overflow-hidden rounded-md"
                          >
                            <Image
                              src={person}
                              alt="image"
                              width={100}
                              height={100}
                              className="w-full h-full object-cover hover:scale-[1.1] ease-in"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-col border border-gray-200 rounded-md p-5 gap-1 group hover:drop-shadow-3xl ease-in bg-white">
                      <div className="flex gap-2">
                        <h3 className="text-[14px] text-slate-800">JAN 17</h3>
                        <span>.</span>
                        <Link href="#" className="text-blue-500 text-[14px]">
                          AIi
                        </Link>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] md:text-[16px] text-slate-800 group-hover:underline underline-offset-1"
                          >
                            Consequat consequat sit ut ea minim elit incididunt
                            irure
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="block h-[80px] w-[120px] overflow-hidden rounded-md"
                          >
                            <Image
                              src={person}
                              alt="image"
                              width={100}
                              height={100}
                              className="w-full h-full object-cover hover:scale-[1.1] ease-in"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/*  */}
                  </div>
                  <div className="flex justify-center mt-5">
                    <Link
                      href="#"
                      className="text-blue-600 dark:bg-blue-500 dark:text-white text-[14px] border border-blue-500 hover:bg-blue-50 rounded-md py-1 w-[250px] table text-center mx-auto"
                    >
                      Load more stories
                    </Link>
                  </div>
                </div>
              </section>
            </div>
            {/*  */}
          </div>

          {/* inner design */}
        </div>
        {/* sidebar ads */}
        <div
          className="shrink  h-[80vh] xl:w-[300px] w-[0px] fixed top-[90px] right-[0] bottom-0 z-[10] bg-thor-700 dark:bg-zinc-800 p-[0px] xl:p-[10px]
        "
        >
          <div className="xl:w-full w-[0px] h-[700px]">
            <Image src={ads1} alt="image" className="w-full" />
          </div>
        </div>
      </div>
      {/* footer */}
      <Apptwo_footer />
    </>
  );
}
