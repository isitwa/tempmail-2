import React from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Team_Mail_Address from "./Team_Mail_Address";
import Team_Group from "./Team_Group";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Switch } from "@headlessui/react";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const people = [
  { id: 1, name: "Read" },
  { id: 2, name: "Read and Send" },
];
const people1 = [
  { id: 1, access: "Full" },
  { id: 2, access: "Partial" },
];
const people3 = [
  { id: 1, filter: "To" },
  { id: 2, filter: "From" },
];

export default function Team_Tabs() {
  const [enabled, setEnabled] = useState(false);
  const [selected1, setSelected1] = useState(people[1]);
  const [selected2, setSelected2] = useState(people1[1]);
  const [selected3, setSelected3] = useState(people3[1]);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-4 py-5 px-5 md:px-10 w-full  md:w-[90%]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl text-gray-900 font-bold font-CalSans">
              Mail Manager
            </h1>
            <p className="mt-2 text-sm text-neutral-500">
              A list of all the users in your account including their name,
              title, email and role.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center text-sm font-medium bg-gray-900 rounded-md transition-colors text-white h-9 px-4 py-2.5  bg-brand-500 hover:bg-gray-700  "
            >
              <div className="flex gap-1 items-center">
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
                    d="M12 6v12m6-6H6"
                  />
                </svg>

                <span>Add account</span>
              </div>
            </button>
            <Link
              href="/CreateGroup"
              className="inline-flex items-center text-sm font-medium bg-gray-900 rounded-md transition-colors text-white h-9 px-4 py-2.5  bg-brand-500 hover:bg-gray-700  "
            >
              <div className="flex gap-1 items-center">
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
                    d="M12 6v12m6-6H6"
                  />
                </svg>

                <span>Create group</span>
              </div>
            </Link>
          </div>
        </div>

        <Tabs className="search-page-list float-left w-full">
          <TabList className="flex border-b border-gray-100">
            <Tab className="text-gray-400 text-sm cursor-pointer py-2 px-3 mr-2">
              Mail Account
            </Tab>
            <Tab className="text-gray-400 text-sm cursor-pointer py-2 px-3 mr-2">
              Group
            </Tab>
          </TabList>
          <TabPanel>
            <div className="py-6">
              <Team_Mail_Address />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="py-6">
              <Team_Group />
            </div>
          </TabPanel>
        </Tabs>
      </div>
      {/* add account popup */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6 border-b border-gray-200 pb-[15px]">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Add Account
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-white text-gray-400 hover:text-gray-500 "
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6 h-full">
                        <div className="flex flex-col gap-2 h-full">
                          <div className="flex justify-between">
                            <h3 className="text-black font-semibold text-[16px]">
                              IMAP
                            </h3>
                          </div>

                          <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2">
                              <h3 className="text-[14px] font-semibold text-gray-800">
                                Hostname
                              </h3>
                              <input
                                type="text"
                                placeholder="Type here"
                                className="text-[16px] border border-gray-200 rounded-md w-full px-4 py-2"
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <h3 className="text-[14px] font-semibold text-gray-800">
                                Port
                              </h3>
                              <input
                                type="text"
                                placeholder="Type here"
                                className="text-[16px] border border-gray-200 rounded-md w-full px-4 py-2"
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <h3 className="text-[14px] font-semibold text-gray-800">
                                Username
                              </h3>
                              <input
                                type="text"
                                placeholder="Type here"
                                className="text-[16px] border border-gray-200 rounded-md w-full px-4 py-2"
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <h3 className="text-[14px] font-semibold text-gray-800">
                                Password
                              </h3>
                              <input
                                type="text"
                                placeholder="Type here"
                                className="text-[16px] border border-gray-200 rounded-md w-full px-4 py-2"
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <h3 className="text-[14px] font-semibold text-gray-800">
                                Security
                              </h3>
                              <input
                                type="text"
                                placeholder="Type here"
                                className="text-[16px] border border-gray-200 rounded-md w-full px-4 py-2"
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <h3 className="text-[14px] font-semibold text-gray-800">
                                STARTTLS
                              </h3>
                              <input
                                type="text"
                                placeholder="Type here"
                                className="text-[16px] border border-gray-200 rounded-md w-full px-4 py-2"
                              />
                            </div>
                          </div>

                          <div className="mt-auto sm:grid sm:gap-3 sm:grid-flow-row-dense sm:grid-cols-2">
                            <span className="flex w-full rounded-md shadow-sm sm:col-start-2">
                              <button
                                type="button"
                                className="focus:ring-blue inline-flex justify-center px-4 py-2 w-full text-white text-base font-medium leading-6 hover:bg-blue-500 bg-blue-600 border focus:border-blue-700 border-transparent rounded-md focus:outline-none shadow-sm transition sm:text-sm sm:leading-5"
                              >
                                Add
                              </button>
                            </span>
                            <span className="flex mt-3 w-full rounded-md shadow-sm sm:col-start-1 sm:mt-0">
                              <button
                                onClick={() => setOpen(false)}
                                type="button"
                                className="focus:ring-blue inline-flex justify-center px-4 py-2 w-full dark:text-ebony-300 hover:text-ebony-500 text-ebony-700 text-base font-medium leading-6 dark:bg-ebony-700 bg-white border focus:border-blue-300 border-ebony-300  rounded-md focus:outline-none shadow-sm transition sm:text-sm sm:leading-5"
                              >
                                Cancel
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
