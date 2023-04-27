import React from "react";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { Switch } from "@headlessui/react";
import { MdModeEdit } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowDownSFill } from "react-icons/ri";

import { BiGridVertical } from "react-icons/bi";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import { Dialog, Transition } from "@headlessui/react";

import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Fragment, useState } from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import user from "../../public/images/user.bmp";
import userImage from "../../public/images/building.jpg";
import screen1 from "../../public/images/screen1.png";
import screen2 from "../../public/images/screen2.png";
import { FaTrashAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

const people = [
  {
    id: 1,
    icon: "https://cdn-icons-png.flaticon.com/128/2168/2168281.png",
    name: "facebook",
  },
  {
    id: 2,
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384015.png",
    name: "facebook",
  },
  {
    id: 3,
    icon: "https://cdn-icons-png.flaticon.com/128/4494/4494465.png",
    name: "instagram",
  },
  {
    id: 4,
    icon: "https://cdn-icons-png.flaticon.com/128/3116/3116491.png",
    name: "twittter",
  },
  {
    id: 5,
    icon: "https://cdn-icons-png.flaticon.com/128/4902/4902522.png",
    name: "tiktok",
  },
  {
    id: 6,
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111708.png",
    name: "telegram",
  },
  {
    id: 7,
    icon: "https://cdn-icons-png.flaticon.com/128/733/733641.png",
    name: "whats app",
  },
];
const people1 = [
  {
    id: 1,
    icon: "https://cdn-icons-png.flaticon.com/128/2168/2168281.png",
    name: "facebook",
  },
  {
    id: 2,
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384015.png",
    name: "facebook",
  },
  {
    id: 3,
    icon: "https://cdn-icons-png.flaticon.com/128/4494/4494465.png",
    name: "instagram",
  },
  {
    id: 4,
    icon: "https://cdn-icons-png.flaticon.com/128/3116/3116491.png",
    name: "twittter",
  },
  {
    id: 5,
    icon: "https://cdn-icons-png.flaticon.com/128/4902/4902522.png",
    name: "tiktok",
  },
  {
    id: 6,
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111708.png",
    name: "telegram",
  },
  {
    id: 7,
    icon: "https://cdn-icons-png.flaticon.com/128/733/733641.png",
    name: "whats app",
  },
];
const people2 = [
  {
    id: 1,
    icon: "https://cdn-icons-png.flaticon.com/128/2168/2168281.png",
    name: "facebook",
  },
  {
    id: 2,
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384015.png",
    name: "facebook",
  },
  {
    id: 3,
    icon: "https://cdn-icons-png.flaticon.com/128/4494/4494465.png",
    name: "instagram",
  },
  {
    id: 4,
    icon: "https://cdn-icons-png.flaticon.com/128/3116/3116491.png",
    name: "twittter",
  },
  {
    id: 5,
    icon: "https://cdn-icons-png.flaticon.com/128/4902/4902522.png",
    name: "tiktok",
  },
  {
    id: 6,
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111708.png",
    name: "telegram",
  },
  {
    id: 7,
    icon: "https://cdn-icons-png.flaticon.com/128/733/733641.png",
    name: "whats app",
  },
];

const Layouts = [
  {
    id: 1,
    title: "v1",
    value: "v1",
    img: "https://app.oode.com/assets/images/template/layouts/layout-1.png",
  },
  {
    id: 2,
    title: "v2",
    value: "v2",
    img: "https://app.oode.com/assets/images/template/layouts/layout-2.png",
  },
  {
    id: 3,
    title: "v3",
    value: "v3",
    img: "https://app.oode.com/assets/images/template/layouts/layout-4.png",
  },
];
const Presets = [
  {
    id: "c1",
    title: "c1",
    img: "https://app.oode.com/assets/images/template/presets/preset-7.png",
  },
  {
    id: "c2",
    title: "c2",
    img: "https://app.oode.com/assets/images/template/presets/preset-6.png",
  },
  {
    id: "c3",
    title: "c3",
    img: "https://app.oode.com/assets/images/template/presets/preset-8.png",
  },
  {
    id: "c4",
    title: "c4",
    img: "https://app.oode.com/assets/images/template/presets/preset-9.png",
  },
];

const TextFamily = [
  { id: 1, name: "SF Pro Text" },
  { id: 2, name: "Inter" },
  { id: 3, name: "Montserrat" },
  { id: 4, name: "Roboto" },
  { id: 5, name: "Helvetica Now" },
];
const FontWeight = [
  { id: 1, name: "Light" },
  { id: 2, name: "Normal (Regular)" },
  { id: 3, name: "Medium" },
  { id: 4, name: "Semi Bold" },
  { id: 5, name: "Bold" },
  { id: 6, name: "Extra Bold" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import { BsChevronLeft, BsCheck2 } from "react-icons/bs";

export default function Content_Compo() {
  // eventLogger = (e: MouseEvent, data: Object) => {
  //   console.log("Event: ", e);
  //   console.log("Data: ", data);
  // };
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(TextFamily[1]);
  const [selected1, setSelected1] = useState(FontWeight[1]);
  const [enabled, setEnabled] = useState(false);
  const [selected2, setSelected2] = useState(people[1]);

  const [selected3, setSelected3] = useState(people1[1]);
  const [selected4, setSelected4] = useState(people2[1]);
  return (
    <>
      {/* popup  */}
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6">
                  <div className="block relative">
                    <button
                      onClick={() => setOpen(false)}
                      className=" absolute -top-[20px] -right-[20px] z-[10] p-[10px]"
                    >
                      <AiOutlineClose />
                    </button>
                    <h3 className="text-center text-black font-semibold text-[20px]">
                      Add Question
                    </h3>
                    <div className="block mt-[20px]">
                      <form action="">
                        <div className="flex flex-col gap-[15px]">
                          <div className="flex flex-col gap-[10px]">
                            <label
                              htmlFor=""
                              className="text-black text-[14px] font-semibold"
                            >
                              Title
                            </label>
                            <input
                              type="text"
                              className="border border-gray-200 py-[8px] px-[20px] text-[14px] rounded-md w-full"
                            />
                          </div>
                          <div className="flex flex-col gap-[10px]">
                            <label
                              htmlFor=""
                              className="text-black text-[14px] font-semibold"
                            >
                              Answer
                            </label>
                            <textarea
                              name=""
                              id=""
                              cols="30"
                              rows="6"
                              className="border border-gray-200 py-[8px] px-[20px] text-[14px] rounded-md w-full"
                            ></textarea>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                        onClick={() => setOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-blue:outline-indigo-600 sm:col-start-2"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* popup  */}
      <div className="flex flex-col lg:flex-row items-stretch h-screen">
        <div className="block px-5 py-5 md:py-10 xl:pl-[40px] xl:pr-[0px] bg-white w-full lg:w-[520px] shrink-0 ">
          {/*  */}
          <div className="flex flex-col h-[90vh] overflow-y-auto pr-[20px]">
            <div className="flex flex-col gap-[15px] mb-[40px]">
              <Link
                href="Sitesetting"
                className="text-black flex items-center gap-[10px]"
              >
                <BsChevronLeft />
                <span>Back</span>
              </Link>
              <h3 className="text-black text-[20px] lg:text-[34px] font-bold">
                Content
              </h3>
            </div>
            <Tabs className="mb-auto h-full">
              <TabList className="flex text-center border-botm-content">
                <Tab className="py-[8px] px-[15px] text-[14px] rounded-lg font-medium cursor-pointer">
                  About
                </Tab>
                <Tab className="py-[8px] px-[15px] text-[14px] rounded-lg font-medium cursor-pointer">
                  FAQs
                </Tab>
                <Tab className="py-[8px] px-[15px] text-[14px] rounded-lg font-medium cursor-pointer">
                  Contact
                </Tab>
                <Tab className="py-[8px] px-[15px] text-[14px] rounded-lg font-medium cursor-pointer">
                  Social links
                </Tab>
              </TabList>

              <TabPanel className="">
                <div className="block py-[20px]">
                  <div className="flex flex-col gap-[20px]  py-[20px]">
                    <div className="flex gap-[15px] items-center">
                      <div className="shrink-0">
                        <div className="w-[80px] h-[80px] md:w-[112px] md:h-[112px] rounded-full overflow-hidden">
                          <Image src={user} alt="user" />
                        </div>
                      </div>
                      <div className=" relative overflow-hidden ">
                        <h4 className="text-[14ox] font-medium text-blue-500 border border-gray-200 rounded-md py-[6px] px-[10px]">
                          Change avatar
                        </h4>
                        <input
                          type="file"
                          name=""
                          id=""
                          className=" absolute top-0 left-0 bottom-0 right-0 cursor-pointer opacity-0"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <label
                        htmlFor=""
                        className="text-black text-[14px] font-semibold"
                      >
                        Title
                      </label>
                      <div className="block">
                        <input
                          type="text"
                          placeholder="Name"
                          className="border border-gray-200 py-[8px] px-[20px] rounded-md w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <label
                        htmlFor=""
                        className="text-black text-[14px] font-semibold"
                      >
                        Your Oode URL
                      </label>
                      <div className="block">
                        <input
                          type="text"
                          placeholder="Name"
                          className="border border-gray-200 py-[8px] px-[20px] rounded-md w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <label
                        htmlFor=""
                        className="text-black text-[14px] font-semibold"
                      >
                        Upload banner (Desktop)
                      </label>
                      <div className="block h-[130px] rounded-md overflow-hidden relative">
                        <button className="top-[10px] right-[10px] absolute bg-white text-gray-500 py-[5px] px-[5px] rounded-md z-[3]">
                          <FaTrashAlt />
                        </button>
                        <Image
                          src={userImage}
                          alt="image"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <label
                        htmlFor=""
                        className="text-black text-[14px] font-semibold"
                      >
                        Upload banner (Mobile)
                      </label>
                      <div className="w-[160px] h-[160px] overflow-hidden relative grid place-content-center bg-white border border-gray-200 rounded-md hover:border-blue-500">
                        <AiOutlinePlus />
                        <input
                          type="file"
                          name=""
                          id=""
                          className=" absolute top-0 bottom-0 left-0 right-0 opacity-0 cursor-pointer"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <label
                        htmlFor=""
                        className="text-black text-[14px] font-semibold"
                      >
                        Upload favicon
                      </label>
                      <div className="w-[90px] h-[90px] overflow-hidden relative grid place-content-center bg-white border border-gray-200 rounded-md hover:border-blue-500">
                        <AiOutlinePlus />
                        <input
                          type="file"
                          name=""
                          id=""
                          className=" absolute top-0 bottom-0 left-0 right-0 opacity-0 cursor-pointer"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <label
                        htmlFor=""
                        className="text-black text-[14px] font-semibold"
                      >
                        Designation
                      </label>
                      <div className="block">
                        <input
                          type="text"
                          placeholder=""
                          className="border border-gray-200 py-[8px] px-[20px] rounded-md w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <label
                        htmlFor=""
                        className="text-black text-[14px] font-semibold"
                      >
                        Tags
                      </label>
                      <div className="block">
                        <input
                          type="text"
                          placeholder=""
                          className="border border-gray-200 py-[8px] px-[20px] rounded-md w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <label
                        htmlFor=""
                        className="text-black text-[14px] font-semibold"
                      >
                        Shop Services label
                      </label>
                      <div className="flex flex-col gap-[3px]">
                        <input
                          type="text"
                          placeholder=""
                          className="border border-gray-200 py-[8px] px-[20px] rounded-md w-full"
                        />
                        <p className="text-black text-[12px] font-light">
                          Visible once you've added services or subscription
                          plans.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <label
                        htmlFor=""
                        className="text-black text-[14px] font-semibold"
                      >
                        Checkout label
                      </label>
                      <div className="block">
                        <input
                          type="text"
                          placeholder=""
                          className="border border-gray-200 py-[8px] px-[20px] rounded-md w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <label
                        htmlFor=""
                        className="text-black text-[14px] font-semibold"
                      >
                        About Me
                      </label>
                      <div className="block">
                        <textarea
                          name=""
                          id=""
                          cols="30"
                          rows="10"
                          className="border border-gray-200 py-[8px] px-[20px] rounded-md w-full"
                        ></textarea>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 block my-[10px]"></div>
                    <h3 className="text-black text-[14px] font-semibold mb-[10px]">
                      Contact information
                    </h3>
                    <div className="flex flex-col gap-[5px]">
                      <label
                        htmlFor=""
                        className="text-black text-[14px] font-semibold"
                      >
                        Name
                      </label>
                      <div className="block">
                        <input
                          type="text"
                          placeholder=""
                          className="border border-gray-200 py-[8px] px-[20px] rounded-md w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <label
                        htmlFor=""
                        className="text-black text-[14px] font-semibold"
                      >
                        Phone
                      </label>
                      <div className="block">
                        <input
                          type="text"
                          placeholder=""
                          className="border border-gray-200 py-[8px] px-[20px] rounded-md w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <label
                        htmlFor=""
                        className="text-black text-[14px] font-semibold"
                      >
                        Email
                      </label>
                      <div className="block">
                        <input
                          type="text"
                          placeholder=""
                          className="border border-gray-200 py-[8px] px-[20px] rounded-md w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <label
                        htmlFor=""
                        className="text-black text-[14px] font-semibold"
                      >
                        Address
                      </label>
                      <div className="block">
                        <input
                          type="text"
                          placeholder=""
                          className="border border-gray-200 py-[8px] px-[20px] rounded-md w-full"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-[15px]">
                      <div className="col-span-6">
                        <div className="flex flex-col gap-[5px]">
                          <div className="block">
                            <select
                              name=""
                              id=""
                              className="border bg-white border-gray-200 py-[12px] px-[20px] rounded-md w-full text-[14px]"
                            >
                              <option>City</option>
                              <option>City</option>
                              <option>City</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-6">
                        <div className="block">
                          <input
                            type="text"
                            placeholder=""
                            className="border border-gray-200 py-[8px] px-[20px] rounded-md w-full"
                          />
                        </div>
                      </div>
                      <div className="col-span-12">
                        <div className="block">
                          <div className="block">
                            <select
                              name=""
                              id=""
                              className="border bg-white border-gray-200 py-[12px] px-[20px] rounded-md w-full text-[14px]"
                            >
                              <option>Country</option>
                              <option>Country</option>
                              <option>Country</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end gap-[15px] my-[15px]">
                      <button className=" hover:text-blue-400 text-blue-500 font-semibold text-[14px] rounded-md py-[8px] px-[25px]">
                        Update Changes
                      </button>
                      <button className="text-white hover:bg-blue-400 bg-blue-500 font-semibold text-[14px] rounded-md py-[8px] px-[25px]">
                        Update & Enable stoefront
                      </button>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel className="">
                <div className="block py-[20px]">
                  <div className="flex flex-col gap-[15px]">
                    <Draggable
                      axis="y"
                      // handle=".handle"
                      // defaultPosition={{ x: 0, y: 0 }}
                      // position={null}
                      // grid={[25, 25]}
                      // scale={1}
                      // onStart={this.handleStart}
                      // onDrag={this.handleDrag}
                      // onStop={this.handleStop}
                    >
                      <div className="flex items-center py-[14px] px-[30px] group hover:bg-gray-100 rounded-md relative">
                        <div className="flex gap-2 items-center relative">
                          <BiGridVertical className="-ml-[25px] hidden group-hover:block absolute" />
                          <h3 className="text-gray-700 text-[16px]">
                            What are FAQs?
                          </h3>
                        </div>
                        <div className=" absolute top-[8px]  bottom-0 right-0 z-[10] hidden group-hover:block">
                          <div className="flex gap-2 items-center">
                            <button
                              className="p-[10px] text-gray-400"
                              onClick={() => setOpen(true)}
                            >
                              <MdModeEdit />
                            </button>
                            <button className="p-[10px] text-gray-400">
                              <AiOutlineClose />
                            </button>
                          </div>
                        </div>
                      </div>
                    </Draggable>
                    <Draggable axis="y">
                      <div className="flex items-center py-[14px] px-[30px] group hover:bg-gray-100 rounded-md relative">
                        <div className="flex gap-2 items-center relative">
                          <BiGridVertical className="-ml-[25px] hidden group-hover:block absolute" />
                          <h3 className="text-gray-700 text-[16px]">
                            What kinds of questions should I include in my FAQ
                          </h3>
                        </div>
                        <div className=" absolute top-[8px]  bottom-0 right-0 z-[10] hidden group-hover:block">
                          <div className="flex gap-2 items-center">
                            <button
                              className="p-[10px] text-gray-400"
                              onClick={() => setOpen(true)}
                            >
                              <MdModeEdit />
                            </button>
                            <button className="p-[10px] text-gray-400">
                              <AiOutlineClose />
                            </button>
                          </div>
                        </div>
                      </div>
                    </Draggable>
                    <Draggable axis="y">
                      <div className="flex items-center py-[14px] px-[30px] group hover:bg-gray-100 rounded-md relative">
                        <div className="flex gap-2 items-center relative">
                          <BiGridVertical className="-ml-[25px] hidden group-hover:block absolute" />
                          <h3 className="text-gray-700 text-[16px]">
                            Do I have to add FAQs to my storefront?
                          </h3>
                        </div>

                        <div className=" absolute top-[8px]  bottom-0 right-0 z-[10] hidden group-hover:block">
                          <div className="flex gap-2 items-center">
                            <button
                              className="p-[10px] text-gray-400"
                              onClick={() => setOpen(true)}
                            >
                              <MdModeEdit />
                            </button>
                            <button className="p-[10px] text-gray-400">
                              <AiOutlineClose />
                            </button>
                          </div>
                        </div>
                      </div>
                    </Draggable>
                    <div className="block">
                      <button className="flex gap-2 items-center text-blue-500 text-[15px] font-semibold">
                        <AiOutlinePlus className=" text-[18px]" />
                        <span>Add Question</span>
                      </button>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel className="">
                <div className="block py-[20px] h-[500px]">
                  <div className="flex flex-col gap-[15px] h-full">
                    <div className="flex flex-col gap-[5px]">
                      <label
                        htmlFor=""
                        className="text-black text-[14px] font-semibold"
                      >
                        Support Type
                      </label>
                      <div className="block">
                        <input
                          type="text"
                          placeholder="Name"
                          className="border border-gray-200 py-[8px] px-[20px] rounded-md w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <label
                        htmlFor=""
                        className="text-black text-[14px] font-semibold"
                      >
                        Contact email
                      </label>
                      <div className="block">
                        <input
                          type="text"
                          placeholder="Name"
                          className="border border-gray-200 py-[8px] px-[20px] rounded-md w-full"
                        />
                      </div>
                    </div>
                    <div className="block">
                      <button className="flex gap-2 items-center text-blue-500 text-[15px] font-semibold">
                        <AiOutlinePlus className=" text-[18px]" />
                        <span>Add Question</span>
                      </button>
                    </div>
                    <div className="flex justify-end gap-[15px] mb-[15px] mt-auto">
                      <button className="text-white hover:bg-blue-400 bg-blue-500 font-semibold text-[14px] rounded-md py-[8px] px-[25px]">
                        Update Changes
                      </button>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel className="">
                <div className="block py-[20px] h-[500px]">
                  <div className="flex flex-col gap-[15px] h-full">
                    <div className="flex items-center gap-[5px]  ">
                      <Listbox value={selected2} onChange={setSelected2}>
                        {({ open }) => (
                          <>
                            <div className="relative w-full ">
                              <Listbox.Button className="flex items-center group  p-1 border border-gray-200 rounded-md relative w-full cursor-default bg-white text-left text-gray-900 shadow  sm:text-sm sm:leading-6">
                                <div className="flex items-center relative w-[55px] shadow rounded-full px-[8px] py-[2px]">
                                  <div className="w-[20px]">
                                    {" "}
                                    <img
                                      src={selected2.icon}
                                      classNames="w-full"
                                      alt="icon"
                                    />
                                  </div>

                                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1">
                                    <RiArrowDownSFill
                                      className="h-4 w-4 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>

                                <input
                                  type="text"
                                  placeholder={selected2.name}
                                  className="border-0 py-[5px] px-[20px]  w-full"
                                />
                                <div className="p-[6px]  group-hover:opacity-100 opacity-0 cursor-pointer">
                                  <AiOutlineClose />
                                </div>
                              </Listbox.Button>

                              <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className=" flex flex-wrap absolute z-10 mt-1 w-[160px] overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                  {people.map((person) => (
                                    <Listbox.Option
                                      key={person.id}
                                      className={({ active }) =>
                                        classNames(
                                          active
                                            ? "bg-gray-300 text-white"
                                            : "text-gray-900",
                                          "relative cursor-default select-none p-[10px]"
                                        )
                                      }
                                      value={person}
                                    >
                                      {({ selected2, active }) => (
                                        <>
                                          <div className="w-[20px]">
                                            <img
                                              src={person.icon}
                                              alt="image"
                                              className="w-full"
                                            />
                                          </div>
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
                    {/*  */}
                    <div className="flex items-center gap-[5px] ">
                      <Listbox value={selected3} onChange={setSelected3}>
                        {({ open }) => (
                          <>
                            <div className="relative w-full">
                              <Listbox.Button className="flex group items-center p-1 border border-gray-200 rounded-md relative w-full cursor-default bg-white text-left text-gray-900 shadow  sm:text-sm sm:leading-6">
                                <div className="flex items-center relative w-[55px] shadow rounded-full px-[8px] py-[2px]">
                                  <div className="w-[20px]">
                                    {" "}
                                    <img
                                      src={selected3.icon}
                                      classNames="w-full"
                                      alt="icon"
                                    />
                                  </div>

                                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1">
                                    <RiArrowDownSFill
                                      className="h-4 w-4 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>

                                <input
                                  type="text"
                                  placeholder={selected3.name}
                                  className="border-0 py-[5px] px-[20px]  w-full"
                                />
                                <div className="p-[6px]  group-hover:opacity-100 opacity-0 cursor-pointer">
                                  <AiOutlineClose />
                                </div>
                              </Listbox.Button>

                              <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className=" flex flex-wrap absolute z-10 mt-1 w-[160px] overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                  {people1.map((person2) => (
                                    <Listbox.Option
                                      key={person2.id}
                                      className={({ active }) =>
                                        classNames(
                                          active
                                            ? "bg-gray-300 text-white"
                                            : "text-gray-900",
                                          "relative cursor-default select-none p-[10px]"
                                        )
                                      }
                                      value={person2}
                                    >
                                      {({ selected3, active }) => (
                                        <>
                                          <div className="w-[20px]">
                                            <img
                                              src={person2.icon}
                                              alt="image"
                                              className="w-full"
                                            />
                                          </div>
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
                    {/*  */}
                    <div className="flex items-center gap-[5px] ">
                      <Listbox value={selected4} onChange={setSelected4}>
                        {({ open }) => (
                          <>
                            <div className="relative w-full">
                              <Listbox.Button className="flex group items-center p-1 border border-gray-200 rounded-md relative w-full cursor-default bg-white text-left text-gray-900 shadow  sm:text-sm sm:leading-6">
                                <div className="flex items-center relative w-[55px] shadow rounded-full px-[8px] py-[2px]">
                                  <div className="w-[20px]">
                                    {" "}
                                    <img
                                      src={selected4.icon}
                                      classNames="w-full"
                                      alt="icon"
                                    />
                                  </div>

                                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1">
                                    <RiArrowDownSFill
                                      className="h-4 w-4 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>

                                <input
                                  type="text"
                                  placeholder={selected4.name}
                                  className="border-0 py-[5px] px-[20px]  w-full"
                                />
                                <div className="p-[6px]  group-hover:opacity-100 opacity-0 cursor-pointer">
                                  <AiOutlineClose />
                                </div>
                              </Listbox.Button>

                              <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className=" flex flex-wrap absolute z-10 mt-1 w-[160px] overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                  {people2.map((person3) => (
                                    <Listbox.Option
                                      key={person3.id}
                                      className={({ active }) =>
                                        classNames(
                                          active
                                            ? "bg-gray-300 text-white"
                                            : "text-gray-900",
                                          "relative cursor-default select-none p-[10px]"
                                        )
                                      }
                                      value={person3}
                                    >
                                      {({ selected4, active }) => (
                                        <>
                                          <div className="w-[20px]">
                                            <img
                                              src={person3.icon}
                                              alt="image"
                                              className="w-full"
                                            />
                                          </div>
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
                    {/*  */}
                    <div className="block">
                      <button className="flex gap-2 items-center text-blue-500 text-[15px] font-semibold">
                        <AiOutlinePlus className=" text-[18px]" />
                        <span>Add Another</span>
                      </button>
                    </div>
                    <div className="flex justify-end gap-[15px] mb-[15px] mt-auto">
                      <button className="text-white hover:bg-blue-400 bg-blue-500 font-semibold text-[14px] rounded-md py-[8px] px-[25px]">
                        Update Changes
                      </button>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
          {/*  */}
        </div>
        <div className="grow h-screen py-[10px] px-[20px]">
          <div className="flex flex-col h-full">
            <Tabs className="my-auto">
              <TabList className="flex bg-gray-200 rounded-lg text-center p-[4px] overflow-hidden logo-tabs-box w-[240px] mx-auto">
                <Tab className="w-[50%] py-[8px] text-[14px] rounded-lg font-medium cursor-pointer">
                  Desktop
                </Tab>
                <Tab className="w-[50%] py-[8px] text-[14px] rounded-lg font-medium cursor-pointer">
                  Mobile
                </Tab>
              </TabList>

              <TabPanel className="block py-[10px]">
                <div className="block rounded-md overflow-hidden border border-gray-200 border-t-[20px]">
                  <Image src={screen1} alt="image" className="w-full" />
                </div>
              </TabPanel>
              <TabPanel className="block py-[10px]">
                <div className="block w-[360px] mx-auto rounded-md overflow-hidden border border-gray-200  border-t-[20px]">
                  <Image src={screen2} alt="image" className="w-full" />
                </div>
              </TabPanel>
            </Tabs>
            <div className="flex mt-auto justify-end">
              <button className="flex gap-1 py-[10px] px-[30px] font-semibold items-center rounded-md text-black bg-blue-400 ">
                <span>Get Started</span> <BsCheck2 />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
