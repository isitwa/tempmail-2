import React from "react";
import Link from "next/link";
import Image from "next/image";
import mailIcon from "../../public/images/icons/ui-avatars.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { HiOutlineChevronDown } from "react-icons/hi";

const people = [
  { id: 1, name: "Public" },
  { id: 2, name: "Private " },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AddSiteList() {
  const [selected, setSelected] = useState(people[0]);
  return (
    <>
      <div className="block py-5 md:py-10 px-4 xl:px-16">
        <h3 className="text-cus-10 text-[20px] lg:text-[25px] font-bold mb-4">
          Add Site
        </h3>
        <div className="flex flex-col gap-6">
          <div className="block bg-white p-6 rounded-md shadow">
            <div className="flex border-b border-cus-20 pb-1 mb-4">
              <h2 className="text-cus-10 font-bold text-[18px]">General</h2>
            </div>

            <div className="grid md:grid-cols-12 gap-6 lg:gap-8">
              <div className="col-span-4">
                <h3 className="text-cus-10 font-bold text-[14px]">Name*</h3>
              </div>
              <div className="col-span-8">
                <input
                  type="text"
                  placeholder="Type here"
                  className="border-b border-cus-20 px-3 py-1 bg-white font-light focus-within:outline-none w-full  text-[14px]"
                />
              </div>

              <div className="col-span-4">
                <h3 className="text-cus-10 font-bold text-[14px]">Tagline*</h3>
              </div>
              <div className="col-span-8">
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="Type a tagline"
                    className="border-b border-cus-20 px-3 py-1 bg-white font-light focus-within:outline-none w-full  text-[14px]"
                  />
                  <h6 className="text-[12px] text-cus-400">
                    The tagline is short and appears on your Site's homepage.
                    Max 100 characters.
                  </h6>
                </div>
              </div>
              <div className="col-span-4">
                <h3 className="text-cus-10 font-bold text-[14px]">
                  Description*
                </h3>
                pl-2
              </div>
              <div className="col-span-8">
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="Type a short description"
                    className="border-b border-cus-20 px-3 py-1 bg-white font-light focus-within:outline-none w-full  text-[14px]"
                  />
                  <h6 className="text-[12px] text-cus-400">
                    The description is longer, and appears in story footer,
                    search results and the like. Max 280 characters.
                  </h6>
                </div>
              </div>
            </div>
            <div className="block border-b border-cus-20 my-5"></div>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <div>
                <h3 className="text-gray-900 font-bold text-[14px]">
                  Site Logo*
                </h3>
              </div>
              <div className="grow">
                <div className="flex gap-3 justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-[14px] text-black font-medium">
                      Add logo
                    </h3>
                    <p className="text-[12px] text-gray-500">
                      The description is longer, and appears in story footer,
                      search results and the like. Max 280 characters.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <div className="w-[80px] h-[80px] border border-gray-200 rounded-md p-2 relative grid place-items-center overflow-hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-9 h-9 text-gray-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                        />
                      </svg>
                      <input
                        type="file"
                        className="border border-red-500 absolute top-0 left-0 right-0 bottom-0 z-50 opacity-0 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block bg-white p-6 rounded-md shadow">
            <div className="flex border-b border-cus-20 pb-1 mb-4">
              <h2 className="text-cus-10 font-bold text-[18px]">Social</h2>
            </div>
            <div className="flex flex-col gap-3 lg:w-[500px]">
              <div className="flex gap-2 items-center">
                <div className="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-cus-80"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </div>

                <div className="grow">
                  <input
                    type="text"
                    className="text-[14px] p-2 w-full border-b border-cus-20 focus-within:outline-none"
                    placeholder="email"
                  />
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="shrink-0">
                  <FaTwitter className="w-6 h-6 text-cus-80" />
                </div>
                <div className="shrink-0">
                  <h3 className="border-cus-50 text-[14px]">twitter.com/</h3>
                </div>
                <div className="grow">
                  <input
                    type="text"
                    className="text-[14px] p-2 w-full border-b border-cus-20 focus-within:outline-none"
                    placeholder="username"
                  />
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="shrink-0">
                  <FaFacebook className="w-6 h-6 text-cus-80" />
                </div>
                <div className="shrink-0">
                  <h3 className="border-cus-50 text-[14px]">facebook.com/</h3>
                </div>
                <div className="grow">
                  <input
                    type="text"
                    className="text-[14px] p-2 w-full border-b border-cus-20 focus-within:outline-none"
                    placeholder="pagename"
                  />
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="shrink-0">
                  <FaLinkedin className="w-6 h-6 text-cus-80" />
                </div>
                <div className="shrink-0">
                  <h3 className="border-cus-50 text-[14px]">linkedin.com/</h3>
                </div>
                <div className="grow">
                  <input
                    type="text"
                    className="text-[14px] p-2 w-full border-b border-cus-20 focus-within:outline-none"
                    placeholder="pagename"
                  />
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="shrink-0">
                  <FaInstagram className="w-6 h-6 text-cus-80" />
                </div>
                <div className="shrink-0">
                  <h3 className="border-cus-50 text-[14px]">instagram.com/</h3>
                </div>
                <div className="grow">
                  <input
                    type="text"
                    className="text-[14px] p-2 w-full border-b border-cus-20 focus-within:outline-none"
                    placeholder="username"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="block bg-white p-6 rounded-md shadow">
            <div className="flex border-b border-cus-20 pb-1 my-4">
              <h2 className="text-cus-10 font-bold text-[18px]">SEO</h2>
            </div>
            <div className="grid md:grid-cols-12 gap-6 lg:gap-8">
              <div className="col-span-4">
                <h3 className="text-cus-10 font-bold text-[14px]">
                  Meta Title*
                </h3>
              </div>
              <div className="col-span-8">
                <input
                  type="text"
                  placeholder="Type here Site Meta Title"
                  className="border-b border-cus-20 px-3 py-1 bg-white font-light focus-within:outline-none text-[14px] w-full"
                />
              </div>
              <div className="col-span-4">
                <h3 className="text-cus-10 font-bold text-[14px]">
                  Meta Description*
                </h3>
              </div>
              <div className="col-span-8">
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="Type here Site Meta Description"
                    className="border-b border-cus-20 px-3 py-1 bg-white font-light focus-within:outline-none text-[14px] w-full"
                  />
                  <p className="text-[12px] text-cus-400">
                    The meta description is an HTML attribute that provides a
                    brief summary of a Site home page. Search engines such as
                    Google often display the meta description in search results.
                    Max 155 characters.
                  </p>
                </div>
              </div>
              <div className="col-span-4">
                <h3 className="text-cus-10 font-bold text-[14px]">Type*</h3>
              </div>
              <div className="col-span-8">
                <div className="flex flex-col gap-2">
                  <Listbox value={selected} onChange={setSelected}>
                    {({ open }) => (
                      <>
                        <div className="relative mt-1">
                          <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm  focus:outline-none sm:text-sm">
                            <span className="block truncate  text-[14px]">
                              {selected.name}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <HiOutlineChevronDown
                                className="h-4 w-4 text-gray-400"
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
                                        ? "text-white bg-blue-600"
                                        : "text-cus-10",
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

                  <p className="text-[12px] text-cus-400">
                    By Selecting Structured Data Type Google can understand your
                    content. Structured data, also called schema markup, is a
                    type of code that makes it easier for search engines to
                    crawl, organize, and display your content.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="submit"
              className="border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 text-sm py-2 px-4 rounded-full"
            >
              Create
            </button>
            <button
              type="button"
              className="border border-gray-400 hover:bg-gray-400 hover:text-white text-gray-400 text-sm py-2 px-4 rounded-full"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
