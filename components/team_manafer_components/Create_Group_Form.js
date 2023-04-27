import React from "react";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const rights = [
  { id: 1, name: "Read" },
  { id: 2, name: "Read and Send" },
];
const access = [
  { id: 1, name: "Full" },
  { id: 2, name: "Partial" },
];
const filter = [
  { id: 1, name: "To" },
  { id: 2, name: "From" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Create_Group_Form() {
  const [selected, setSelected] = useState(rights[1]);
  const [selected1, setSelected1] = useState(access[1]);
  const [selected2, setSelected2] = useState(filter[1]);
  return (
    <>
      <div className="flex flex-col gap-4 px-5 md:px-10 py-10">
        <div className="flex flex-col gap-1 mb-10">
          <div className="flex gap-2">
            <Link href="/MailManager" className="flex items-center gap-3">
              {" "}
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
            </Link>
            <h1 className="text-xl text-gray-900 font-bold font-CalSans">
              Create Group
            </h1>
          </div>

          <p className="mt-2 text-sm text-neutral-500">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[600px]">
          <div className="flex flex-col gap-5">
            <div className="block bg-white p-6 rounded-md shadow">
              <div className="flex flex-col gap-4">
                <h3 className="text-[14px] font-semibold text-gray-800">
                  Name
                </h3>
                <input
                  type="text"
                  placeholder="Type here"
                  className="text-[16px] border border-gray-200 rounded-md w-full px-4 py-2"
                />
              </div>
            </div>
            <div className="block bg-white p-6 rounded-md shadow">
              <div className="flex flex-col gap-4">
                <h3 className="text-[14px] font-semibold text-gray-800">
                  Rights
                </h3>
                <Listbox value={selected} onChange={setSelected}>
                  {({ open }) => (
                    <>
                      <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-200 bg-white py-2 pl-3 pr-10 text-left shadow-sm  sm:text-sm">
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
                            {rights.map((rights) => (
                              <Listbox.Option
                                key={rights.id}
                                className={({ active }) =>
                                  classNames(
                                    active
                                      ? "text-white bg-blue-600"
                                      : "text-gray-900",
                                    "relative cursor-default select-none py-2 pl-3 pr-9"
                                  )
                                }
                                value={rights}
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
                                      {rights.name}
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
            <div className="block bg-white p-6 rounded-md shadow">
              <div className="flex flex-col gap-4">
                <h3 className="text-[14px] font-semibold text-gray-800">
                  Access
                </h3>
                <Listbox value={selected1} onChange={setSelected1}>
                  {({ open1 }) => (
                    <>
                      <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-200 bg-white py-2 pl-3 pr-10 text-left shadow-sm  sm:text-sm">
                          <span className="block truncate">
                            {selected1.name}
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open1}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {access.map((access) => (
                              <Listbox.Option
                                key={access.id}
                                className={({ active }) =>
                                  classNames(
                                    active
                                      ? "text-white bg-blue-600"
                                      : "text-gray-900",
                                    "relative cursor-default select-none py-2 pl-3 pr-9"
                                  )
                                }
                                value={access}
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
                                      {access.name}
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
            <div className="block bg-white p-6 rounded-md shadow">
              <div className="flex flex-col gap-4 mb-4">
                <h3 className="text-[14px] font-semibold text-gray-800">
                  Filter
                </h3>
                <Listbox value={selected2} onChange={setSelected2}>
                  {({ open2 }) => (
                    <>
                      <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-200 bg-white py-2 pl-3 pr-10 text-left shadow-sm  sm:text-sm">
                          <span className="block truncate">
                            {selected2.name}
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open2}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filter.map((filter) => (
                              <Listbox.Option
                                key={filter.id}
                                className={({ active }) =>
                                  classNames(
                                    active
                                      ? "text-white bg-blue-600"
                                      : "text-gray-900",
                                    "relative cursor-default select-none py-2 pl-3 pr-9"
                                  )
                                }
                                value={filter}
                              >
                                {({ selected2, active }) => (
                                  <>
                                    <span
                                      className={classNames(
                                        selected2
                                          ? "font-semibold"
                                          : "font-normal",
                                        "block truncate"
                                      )}
                                    >
                                      {filter.name}
                                    </span>

                                    {selected2 ? (
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

              <div className="flex  border border-gray-200 rounded-md overflow-hidden items-center mb-4">
                <div className="grow">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="text-[16px] w-full px-4 py-2"
                  />
                </div>
                <div className="shrink-0">
                  <button
                    type="submit"
                    className="py-[10px] px-[20px] bg-gray-900 text-white hover:bg-gray-800"
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="flex flex-col h-[300px] overflow-y-auto bg-white border border-gray-200 rounded-md">
                <div className="flex items-center justify-between gap-3 border-b border-gray-200 py-2 px-[25px]">
                  <h5 className="text-gray-800 text-[14px]">
                    tony3467@gmail.com
                  </h5>
                  <button className="">
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
                <div className="flex items-center justify-between gap-3 border-b border-gray-200 py-2 px-[25px]">
                  <h5 className="text-gray-800 text-[14px]">
                    tony3467@gmail.com
                  </h5>
                  <button className="">
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
                <div className="flex items-center justify-between gap-3 border-b border-gray-200 py-2 px-[25px]">
                  <h5 className="text-gray-800 text-[14px]">
                    tony3467@gmail.com
                  </h5>
                  <button className="">
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
                <div className="flex items-center justify-between gap-3 border-b border-gray-200 py-2 px-[25px]">
                  <h5 className="text-gray-800 text-[14px]">
                    tony3467@gmail.com
                  </h5>
                  <button className="">
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
                <div className="flex items-center justify-between gap-3 border-b border-gray-200 py-2 px-[25px]">
                  <h5 className="text-gray-800 text-[14px]">
                    tony3467@gmail.com
                  </h5>
                  <button className="">
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
                <div className="flex items-center justify-between gap-3 border-b border-gray-200 py-2 px-[25px]">
                  <h5 className="text-gray-800 text-[14px]">
                    tony3467@gmail.com
                  </h5>
                  <button className="">
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
                <div className="flex items-center justify-between gap-3 border-b border-gray-200 py-2 px-[25px]">
                  <h5 className="text-gray-800 text-[14px]">
                    tony3467@gmail.com
                  </h5>
                  <button className="">
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
                <div className="flex items-center justify-between gap-3 border-b border-gray-200 py-2 px-[25px]">
                  <h5 className="text-gray-800 text-[14px]">
                    tony3467@gmail.com
                  </h5>
                  <button className="">
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
                <div className="flex items-center justify-between gap-3 border-b border-gray-200 py-2 px-[25px]">
                  <h5 className="text-gray-800 text-[14px]">
                    tony3467@gmail.com
                  </h5>
                  <button className="">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
