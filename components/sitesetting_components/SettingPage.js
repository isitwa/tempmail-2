import Link from "next/link";
import { Menu } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SettingPage() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="block bg-white p-6 rounded-md shadow">
          <div className="flex flex-col gap-2 py-[15px] border-b border-cus-20">
            <Link legacyBehavior href="">
              <a className="text-sm lg:text-lg font-bold text-cus-10">
                Create a simple RSS Feed with PHP and MySql-DeveloperBook
              </a>
            </Link>
            <p className="text-xs lg:text-sm font-normal text-cus-300">
              Today I am going to tell u how to create a simple RSS feed with
              Php and MySql. This blog is for those who want to add their
              website or blog...
            </p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2 items-center">
                <div className="flex">
                  <div className="flex space-x-1 items-center flex-wrap">
                    <h1 className="text-gray-400 text-xs lg:text-sm font-light">
                      Published on Apr 4
                    </h1>
                    <span className="pb-2">.</span>
                    <h3 className="text-gray-400 text-xs lg:text-sm font-light">
                      3 min read
                    </h3>

                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="flex items-center text-gray-400 hover:text-gray-600 focus:none focus:outline-none ">
                          <span className="sr-only">Open options</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
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
                        <Menu.Items className="origin-top-right bg-white absolute left-2/4 -translate-x-2/4 mt-2 w-40 rounded-md shadow-lg bg-gray-10  focus:outline-none focus-visible:outline-none z-50 border border-gray-200">
                          <div className="py-1 relative">
                            <div className="w-6 overflow-hidden inline-block absolute -top-4 left-2/4 -translate-x-2/4">
                              <div className=" h-4 w-4 bg-gray-10 rotate-45 transform origin-bottom-left border-t border-l border-gray-200"></div>
                            </div>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm text-center"
                                  )}
                                >
                                  Edit draft
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  onClick={() => setOpen(!open)}
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm text-center"
                                  )}
                                >
                                  Delete draft
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
            </div>
          </div>
          <div className="flex flex-col gap-2 py-[15px] border-b border-cus-20">
            <Link legacyBehavior href="">
              <a className="text-sm lg:text-lg font-bold text-cus-10">
                Create a simple RSS Feed with PHP and MySql-DeveloperBook
              </a>
            </Link>
            <p className="text-xs lg:text-sm font-normal text-cus-300">
              Today I am going to tell u how to create a simple RSS feed with
              Php and MySql. This blog is for those who want to add their
              website or blog...
            </p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2 items-center">
                <div className="flex">
                  <div className="flex space-x-1 items-center flex-wrap">
                    <h1 className="text-gray-400 text-xs lg:text-sm font-light">
                      Published on Apr 4
                    </h1>
                    <span className="pb-2">.</span>
                    <h3 className="text-gray-400 text-xs lg:text-sm font-light">
                      3 min read
                    </h3>

                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="flex items-center text-gray-400 hover:text-gray-600 focus:none focus:outline-none ">
                          <span className="sr-only">Open options</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
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
                        <Menu.Items className="origin-top-right bg-white absolute left-2/4 -translate-x-2/4 mt-2 w-40 rounded-md shadow-lg bg-gray-10  focus:outline-none focus-visible:outline-none z-50 border border-gray-200">
                          <div className="py-1 relative">
                            <div className="w-6 overflow-hidden inline-block absolute -top-4 left-2/4 -translate-x-2/4">
                              <div className=" h-4 w-4 bg-gray-10 rotate-45 transform origin-bottom-left border-t border-l border-gray-200"></div>
                            </div>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm text-center"
                                  )}
                                >
                                  Edit draft
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  onClick={() => setOpen(!open)}
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm text-center"
                                  )}
                                >
                                  Delete draft
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
