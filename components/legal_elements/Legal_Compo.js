import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import React, { Fragment, useState } from "react";

import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const people = [
  { id: 1, name: "Use Oode’s terms of service" },
  { id: 2, name: "Use custom URL" },
  { id: 3, name: "Use downloadable file" },
  { id: 4, name: "Edit manually / Generate from .docx file" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Legal_Compo() {
  const [selected, setSelected] = useState(people[1]);
  return (
    <>
      <div className="flex justify-center py-[40px] px-[15px]">
        <div className="flex flex-col w-full md:w-[600px]">
          <h3 className="text-black font-semibold text-[32px] mb-[40px]">
            Legal
          </h3>
          <Tabs className="">
            <TabList className="flex text-center border-botm-content">
              <Tab className="py-[8px] px-[15px] text-[14px] rounded-lg font-medium cursor-pointer">
                Terms of service
              </Tab>
              <Tab className="py-[8px] px-[15px] text-[14px] rounded-lg font-medium cursor-pointer">
                Privacy Policy
              </Tab>
            </TabList>
            <TabPanel className="">
              <form action="">
                <div className="block my-[50px]">
                  <div className="flex flex-col gap-[20px]">
                    <div className="flex flex-col gap-[2px]">
                      <label htmlFor="" className="text-black text-[14px]">
                        Legal type
                      </label>
                      <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                          <>
                            <div className="relative mt-2">
                              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 ring-1 ring-inset ring-gray-200 sm:text-sm sm:leading-6">
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
                                  {people.map((person) => (
                                    <Listbox.Option
                                      key={person.id}
                                      className={({ active }) =>
                                        classNames(
                                          active
                                            ? "bg-indigo-600 text-white"
                                            : "text-gray-900",
                                          "relative cursor-default select-none py-2 pl-8 pr-4"
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
                                                  : "text-indigo-600",
                                                "absolute inset-y-0 left-0 flex items-center pl-1.5"
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
                    <div className="flex flex-col gap-[2px]">
                      <label htmlFor="" className="text-black text-[14px]">
                        Paste URL here
                      </label>
                      <input
                        type="text"
                        placeholder="https://example.com"
                        className="text-[14px] py-[6px] px-[8px] border border-gray-200 rounded-md"
                      />
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <label htmlFor="" className="text-black text-[14px]">
                        Upload file (max 5MB)
                      </label>
                      <div className="  inline-block">
                        <h4 className=" relative text-blue-500 font-semibold text-[14px] py-[6px] px-[10px] rounded-md border border-gray-300 w-auto float-left bg-white">
                          Upload file
                          <input
                            type="file"
                            className=" absolute top-0 left-0 bottom-0z-[10] opacity-0 cursor-pointer"
                          />
                        </h4>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <label htmlFor="" className="text-black text-[14px]">
                        Paste URL here
                      </label>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                        className="text-[14px] py-[6px] px-[8px] border border-gray-200 rounded-md"
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex justify-end mt-[60px]">
                    <button
                      type="submit"
                      className="text-[16px] font-semibold py-[6px] px-[10px] rounded-md bg-blue-500 text-white"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </TabPanel>
            <TabPanel className="">
              <form action="">
                <div className="block my-[50px]">
                  <div className="flex flex-col gap-[20px]">
                    <div className="flex flex-col gap-[2px]">
                      <label htmlFor="" className="text-black text-[14px]">
                        Legal type
                      </label>
                      <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                          <>
                            <div className="relative mt-2">
                              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 ring-1 ring-inset ring-gray-200 sm:text-sm sm:leading-6">
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
                                  {people.map((person) => (
                                    <Listbox.Option
                                      key={person.id}
                                      className={({ active }) =>
                                        classNames(
                                          active
                                            ? "bg-indigo-600 text-white"
                                            : "text-gray-900",
                                          "relative cursor-default select-none py-2 pl-8 pr-4"
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
                                                  : "text-indigo-600",
                                                "absolute inset-y-0 left-0 flex items-center pl-1.5"
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
                    <div className="flex flex-col gap-[2px]">
                      <label htmlFor="" className="text-black text-[14px]">
                        Paste URL here
                      </label>
                      <input
                        type="text"
                        placeholder="https://example.com"
                        className="text-[14px] py-[6px] px-[8px] border border-gray-200 rounded-md"
                      />
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <label htmlFor="" className="text-black text-[14px]">
                        Upload file (max 5MB)
                      </label>
                      <div className="  inline-block">
                        <h4 className=" relative text-blue-500 font-semibold text-[14px] py-[6px] px-[10px] rounded-md border border-gray-300 w-auto float-left bg-white">
                          Upload file
                          <input
                            type="file"
                            className=" absolute top-0 left-0 bottom-0z-[10] opacity-0 cursor-pointer"
                          />
                        </h4>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <label htmlFor="" className="text-black text-[14px]">
                        Paste URL here
                      </label>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                        className="text-[14px] py-[6px] px-[8px] border border-gray-200 rounded-md"
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex justify-end mt-[60px]">
                    <button
                      type="submit"
                      className="text-[16px] font-semibold py-[6px] px-[10px] rounded-md bg-blue-500 text-white"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}
