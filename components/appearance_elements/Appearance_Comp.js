import React from "react";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { Switch } from "@headlessui/react";
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
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import screen1 from "../../public/images/screen1.png";
import screen2 from "../../public/images/screen2.png";

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

export default function Appearance_Comp() {
  const [selected, setSelected] = useState(TextFamily[1]);
  const [selected1, setSelected1] = useState(FontWeight[1]);
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row items-stretch h-screen">
      <div className="block px-5 py-5 md:py-10 xl:pr-0 xl:pl-[40px] bg-white w-full lg:w-[520px] shrink-0 ">
        <div className="flex flex-col gap-[15px] mb-[40px]">
          <Link
            href="Sitesetting"
            className="text-black flex items-center gap-[10px]"
          >
            <BsChevronLeft />
            <span>Back</span>
          </Link>
          <h3 className="text-black text-[20px] lg:text-[34px] font-bold">
            Appearance
          </h3>
        </div>
        <div className="block p-0 overflow-y-auto h-[80vh] pr-[20px]">
          <Accordion className="app-lay">
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Layouts</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="grid grid-cols-12 gap-[25px]">
                  {Layouts.map((Layouts) => (
                    <div key={Layouts.id} className="col-span-6">
                      <div className="flex items-center ">
                        <input
                          id={Layouts.id}
                          name="layouts"
                          type="radio"
                          defaultChecked={Layouts.id === "v2"}
                          className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                        />
                        <label
                          htmlFor={Layouts.id}
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900 w-[160px] "
                        >
                          <img
                            src={Layouts.img}
                            alt="image"
                            width="100"
                            height="100"
                            className=" w-full  focus:border-2 border-blue-500 rounded-md"
                          />
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Presets</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="grid grid-cols-12 gap-[25px]">
                  {Presets.map((Presets) => (
                    <div key={Presets.id} className="col-span-6">
                      <div className="flex items-center ">
                        <input
                          id={Presets.id}
                          name="presets"
                          type="radio"
                          defaultChecked={Presets.id === "email"}
                          className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                        />
                        <label
                          htmlFor={Presets.id}
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900 w-[160px] "
                        >
                          <img
                            src={Presets.img}
                            alt="image"
                            width="100"
                            height="100"
                            className=" w-full  focus:border-2 border-blue-500 rounded-md"
                          />
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Header</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <h3 className="text-black font-semibold mb-[15px] text-[16px] uppercase ">
                  LOGO
                </h3>
                <Tabs>
                  <TabList className="flex bg-gray-200 rounded-lg text-center p-[4px] overflow-hidden logo-tabs-box w-full">
                    <Tab className="w-[50%] py-[8px] text-[14px] rounded-lg font-medium">
                      Logo image
                    </Tab>
                    <Tab className="w-[50%] py-[8px] text-[14px] rounded-lg font-medium">
                      Logo text
                    </Tab>
                  </TabList>

                  <TabPanel className="block py-[10px]">
                    <div className="flex flex-col gap-[15px]">
                      <label
                        htmlFor=""
                        className="text-black text-[14px] font-medium"
                      >
                        Upload logo
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
                  </TabPanel>
                  <TabPanel className="block py-[10px]">
                    <div className="flex flex-col gap-[15px]">
                      <div className="flex flex-col gap-[10px]">
                        <label
                          htmlFor=""
                          className="text-black text-[14px] font-medium"
                        >
                          Logo text
                        </label>
                        <div className="block w-full">
                          <input
                            type="text"
                            name=""
                            id=""
                            className="text-[14px] text-black rounded-md py-[8px] px-[10px] border border-gray-200 w-full"
                          />
                        </div>
                      </div>
                      {/*  */}
                      <div className="flex flex-col gap-[10px]">
                        <label
                          htmlFor=""
                          className="text-black text-[14px] font-medium"
                        >
                          Logo font family
                        </label>
                        <div className="block w-full">
                          <Listbox value={selected} onChange={setSelected}>
                            {({ open }) => (
                              <>
                                <div className="relative">
                                  <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 text-[14px] border border-gray-200">
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
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                      {TextFamily.map((person) => (
                                        <Listbox.Option
                                          key={person.id}
                                          className={({ active }) =>
                                            classNames(
                                              active
                                                ? "bg-blue-600 text-white"
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
                      {/*  */}
                      <div className="flex flex-col gap-[10px]">
                        <label
                          htmlFor=""
                          className="text-black text-[14px] font-medium"
                        >
                          Logo font weight
                        </label>
                        <div className="block w-full">
                          <Listbox value={selected} onChange={setSelected}>
                            {({ open }) => (
                              <>
                                <div className="relative">
                                  <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 text-[14px] border border-gray-200">
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
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                      {FontWeight.map((person1) => (
                                        <Listbox.Option
                                          key={person1.id}
                                          className={({ active }) =>
                                            classNames(
                                              active
                                                ? "bg-blue-600 text-white"
                                                : "text-gray-900",
                                              "relative cursor-default select-none py-2 pl-3 pr-9"
                                            )
                                          }
                                          value={person1}
                                        >
                                          {({ selected1, active }) => (
                                            <>
                                              <span
                                                className={classNames(
                                                  selected1
                                                    ? "font-semibold"
                                                    : "font-normal",
                                                  "block truncate"
                                                )}
                                              >
                                                {person1.name}
                                              </span>

                                              {selected1 ? (
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
                      <div className="flex flex-col gap-[10px]">
                        <label
                          htmlFor=""
                          className="text-black text-[14px] font-medium"
                        >
                          Logo colour
                        </label>
                        <div className="flex items-stretch gap-[10px] p-[4px] border border-gray-200 rounded-md bg-white">
                          <div className="shrink-0">
                            {" "}
                            <input
                              type="color"
                              className=" rounded-md h-full"
                            />
                          </div>
                          <div className="grow">
                            <input
                              type="text"
                              value="#000"
                              className="text-[14px] text-black w-full"
                            />
                          </div>
                        </div>
                      </div>
                      {/*  */}
                      <div className="flex flex-col gap-[10px]">
                        <label
                          htmlFor=""
                          className="text-black text-[14px] font-medium"
                        >
                          Logo font size
                        </label>
                        <div className="flex items-stretch gap-[10px] p-[4px] border border-gray-200 rounded-md bg-white">
                          <div className="grow">
                            {" "}
                            <input
                              type="range"
                              id="volume"
                              name="volume"
                              min="0"
                              max="11"
                              className="w-full"
                            />
                          </div>
                          <div className="shrink-0">24px</div>
                        </div>
                      </div>
                      {/*  */}
                    </div>
                  </TabPanel>
                </Tabs>
                <h3 className="text-black font-semibold mb-[15px] text-[16px] uppercase ">
                  COLOURS
                </h3>
                <div className="flex flex-col gap-[15px]">
                  <div className="flex flex-col gap-[10px]">
                    <label
                      htmlFor=""
                      className="text-black text-[14px] font-medium"
                    >
                      Header colour
                    </label>
                    <div className="flex items-stretch gap-[10px] p-[4px] border border-gray-200 rounded-md bg-white">
                      <div className="shrink-0">
                        {" "}
                        <input type="color" className=" rounded-md h-full" />
                      </div>
                      <div className="grow">
                        <input
                          type="text"
                          value="#fff"
                          className="text-[14px] text-black w-full"
                        />
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex flex-col gap-[10px]">
                    <label
                      htmlFor=""
                      className="text-black text-[14px] font-medium"
                    >
                      Header icon color
                    </label>
                    <div className="flex items-stretch gap-[10px] p-[4px] border border-gray-200 rounded-md bg-white">
                      <div className="shrink-0">
                        {" "}
                        <input type="color" className=" rounded-md h-full" />
                      </div>
                      <div className="grow">
                        <input
                          type="text"
                          value="#000"
                          className="text-[14px] text-black w-full"
                        />
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Background</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="flex flex-col gap-[15px]">
                  <div className="flex flex-col gap-[10px]">
                    <label
                      htmlFor=""
                      className="text-black text-[14px] font-medium"
                    >
                      Background colour
                    </label>
                    <div className="flex items-stretch gap-[10px] p-[4px] border border-gray-200 rounded-md bg-white">
                      <div className="shrink-0">
                        {" "}
                        <input type="color" className=" rounded-md h-full" />
                      </div>
                      <div className="grow">
                        <input
                          type="text"
                          value="#fff"
                          className="text-[14px] text-black w-full"
                        />
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex flex-col gap-[10px]">
                    <label
                      htmlFor=""
                      className="text-black text-[14px] font-medium"
                    >
                      Card colour
                    </label>
                    <div className="flex items-stretch gap-[10px] p-[4px] border border-gray-200 rounded-md bg-white">
                      <div className="shrink-0">
                        {" "}
                        <input type="color" className=" rounded-md h-full" />
                      </div>
                      <div className="grow">
                        <input
                          type="text"
                          value="#000"
                          className="text-[14px] text-black w-full"
                        />
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex flex-col gap-[10px]">
                    <label
                      htmlFor=""
                      className="text-black text-[14px] font-medium"
                    >
                      Back icon colour
                    </label>
                    <div className="flex items-stretch gap-[10px] p-[4px] border border-gray-200 rounded-md bg-white">
                      <div className="shrink-0">
                        {" "}
                        <input type="color" className=" rounded-md h-full" />
                      </div>
                      <div className="grow">
                        <input
                          type="text"
                          value="#000"
                          className="text-[14px] text-black w-full"
                        />
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex flex-col gap-[10px]">
                    <label
                      htmlFor=""
                      className="text-black text-[14px] font-medium"
                    >
                      Back icon background colour
                    </label>
                    <div className="flex items-stretch gap-[10px] p-[4px] border border-gray-200 rounded-md bg-white">
                      <div className="shrink-0">
                        {" "}
                        {/* <SketchPicker /> */}
                        <input type="color" className=" rounded-md h-full" />
                      </div>
                      <div className="grow">
                        <input
                          type="text"
                          value="#000"
                          className="text-[14px] text-black w-full"
                        />
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex flex-col gap-[10px]">
                    <label
                      htmlFor=""
                      className="text-black text-[14px] font-medium"
                    >
                      Storefront banner spacing
                    </label>
                    <div className="flex items-stretch gap-[10px] p-[4px] border border-gray-200 rounded-md bg-white">
                      <div className="grow">
                        {" "}
                        <input
                          type="range"
                          id="volume"
                          name="volume"
                          min="0"
                          max="11"
                          className="w-full"
                        />
                      </div>
                      <div className="shrink-0">24px</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor=""
                      className="text-black text-[14px] font-medium"
                    >
                      Card elevation
                    </label>
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className={classNames(
                        enabled ? "bg-blue-600" : "bg-gray-200",
                        "relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out "
                      )}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          enabled ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                        )}
                      />
                    </Switch>
                  </div>
                  {/*  */}
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Colour</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="flex flex-col gap-[15px]">
                  <div className="flex flex-col gap-[10px]">
                    <label
                      htmlFor=""
                      className="text-black text-[14px] font-medium"
                    >
                      Primary colour
                    </label>
                    <div className="flex items-stretch gap-[10px] p-[4px] border border-gray-200 rounded-md bg-white">
                      <div className="shrink-0">
                        {" "}
                        <input type="color" className=" rounded-md h-full" />
                      </div>
                      <div className="grow">
                        <input
                          type="text"
                          value="#fff"
                          className="text-[14px] text-black w-full"
                        />
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex flex-col gap-[10px]">
                    <label
                      htmlFor=""
                      className="text-black text-[14px] font-medium"
                    >
                      Border color
                    </label>
                    <div className="flex items-stretch gap-[10px] p-[4px] border border-gray-200 rounded-md bg-white">
                      <div className="shrink-0">
                        {" "}
                        <input type="color" className=" rounded-md h-full" />
                      </div>
                      <div className="grow">
                        <input
                          type="text"
                          value="#000"
                          className="text-[14px] text-black w-full"
                        />
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex flex-col gap-[10px]">
                    <label
                      htmlFor=""
                      className="text-black text-[14px] font-medium"
                    >
                      Tag colour
                    </label>
                    <div className="flex items-stretch gap-[10px] p-[4px] border border-gray-200 rounded-md bg-white">
                      <div className="shrink-0">
                        {" "}
                        <input type="color" className=" rounded-md h-full" />
                      </div>
                      <div className="grow">
                        <input
                          type="text"
                          value="#000"
                          className="text-[14px] text-black w-full"
                        />
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Typography</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="flex flex-col gap-[15px]">
                  <div className="flex flex-col gap-[10px]">
                    <label
                      htmlFor=""
                      className="text-black text-[14px] font-medium"
                    >
                      Text colour
                    </label>
                    <div className="flex items-stretch gap-[10px] p-[4px] border border-gray-200 rounded-md bg-white">
                      <div className="shrink-0">
                        {" "}
                        <input type="color" className=" rounded-md h-full" />
                      </div>
                      <div className="grow">
                        <input
                          type="text"
                          value="#fff"
                          className="text-[14px] text-black w-full"
                        />
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex flex-col gap-[10px]">
                    <label
                      htmlFor=""
                      className="text-black text-[14px] font-medium"
                    >
                      Text font family
                    </label>
                    <div className="block w-full">
                      <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                          <>
                            <div className="relative">
                              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 text-[14px] border border-gray-200">
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
                                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                  {TextFamily.map((person) => (
                                    <Listbox.Option
                                      key={person.id}
                                      className={({ active }) =>
                                        classNames(
                                          active
                                            ? "bg-blue-600 text-white"
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
                  {/*  */}
                </div>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Footer</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="flex flex-col gap-[15px]">
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor=""
                      className="text-black text-[14px] font-medium"
                    >
                      Contact information
                    </label>
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className={classNames(
                        enabled ? "bg-blue-600" : "bg-gray-200",
                        "relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out "
                      )}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          enabled ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                        )}
                      />
                    </Switch>
                  </div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor=""
                      className="text-black text-[14px] font-medium"
                    >
                      Address
                    </label>
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className={classNames(
                        enabled ? "bg-blue-600" : "bg-gray-200",
                        "relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out "
                      )}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          enabled ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                        )}
                      />
                    </Switch>
                  </div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor=""
                      className="text-black text-[14px] font-medium"
                    >
                      Opening hours
                    </label>
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className={classNames(
                        enabled ? "bg-blue-600" : "bg-gray-200",
                        "relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out "
                      )}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          enabled ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                        )}
                      />
                    </Switch>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <label
                      htmlFor=""
                      className="text-black text-[14px] font-medium"
                    >
                      Footer background colour
                    </label>
                    <div className="flex items-stretch gap-[10px] p-[4px] border border-gray-200 rounded-md bg-white">
                      <div className="shrink-0">
                        {" "}
                        <input type="color" className=" rounded-md h-full" />
                      </div>
                      <div className="grow">
                        <input
                          type="text"
                          value="#fff"
                          className="text-[14px] text-black w-full"
                        />
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex flex-col gap-[10px]">
                    <label
                      htmlFor=""
                      className="text-black text-[14px] font-medium"
                    >
                      Footer text colour
                    </label>
                    <div className="flex items-stretch gap-[10px] p-[4px] border border-gray-200 rounded-md bg-white">
                      <div className="shrink-0">
                        {" "}
                        <input type="color" className=" rounded-md h-full" />
                      </div>
                      <div className="grow">
                        <input
                          type="text"
                          value="#fff"
                          className="text-[14px] text-black w-full"
                        />
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <div className="flex justify-end my-[15px]">
            <button className="text-white hover:bg-blue-400 bg-blue-500 font-semibold text-[14px] rounded-md py-[8px] px-[25px]">
              Update
            </button>
          </div>
        </div>
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
  );
}
