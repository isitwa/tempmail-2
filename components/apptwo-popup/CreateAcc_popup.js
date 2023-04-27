import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Dialog } from "@headlessui/react";

export default function CreateAcc_popup({ setOpenModa1 }) {
  // const [open, setOpen] = useState(false);
  // const [modalOpen1, setModalOpen1] = useState(false);
  return (
    <>
      {/* pop up code create acc */}
      <div className="fixed top-0 bottom-0 left-0 right-0   z-[997]">
        <div className=" absolute top-0 bottom-0 left-0 right-0 bg-gray-700 opacity-90 z-[998]"></div>
        <div className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  z-[999] w-[90%] md:w-[480px] bg-gray-900 rounded">
          <div className="block bg-white dark:bg-zinc-800 rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6">
            <div>
              <div className="flex items-center justify-end ">
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => {
                      setOpenModa1(false);
                    }}
                    className="text-white dark:text-zinc-800 text-[16px] bg-gray-400 dark:bg-gray-200 w-[30px] h-[30px] rounded-full"
                  >
                    X
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-400 rounded-full">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-600 dark:text-blue-800"
                >
                  <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <h3
                  id="modal-headline"
                  className="dark:text-ebony-300 text-ebony-900 text-lg font-medium leading-6"
                >
                  Create an account
                </h3>
                <div className="mt-2">
                  <p className="dark:text-ebony-400 text-ebony-500 text-sm leading-5">
                    Here you can create a new account for this you need to
                    select a username, then domain and password!
                  </p>
                </div>
                <div className="mt-2 flex flex-col gap-3 text-left">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor=""
                      className="block dark:text-gray-400 text-gray-700 text-sm font-medium leading-5"
                    >
                      Email
                    </label>
                    <div className="flex overflow-hidden align-middle bg-white rounded-md border border-gray-300 dark:border-gray-700">
                      <div className="grow p-1">
                        <div className="flex gap-1 align-middle">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 text-gray-500 mt-1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                            />
                          </svg>

                          <input
                            placeholder="Username"
                            type="text"
                            className="w-full text-[14px] text-gray-900 bg-white py-1 px-1 focus-within:outline-none"
                          />
                        </div>
                      </div>
                      <div className="shrink-0">
                        <select className="dark:focus:outline-none dark:focus:border-blue-600 rounded-l pl-2 pr-3 py-0 h-full dark:text-gray-400 text-gray-500 dark:bg-gray-700 bg-transparent dark:border-gray-700 border-transparent  sm:text-sm sm:leading-5">
                          <option value="">eurokool.com</option>
                          <option value="">eurokool.com</option>
                          <option value="">eurokool.com</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor=""
                      className="block dark:text-gray-400 text-gray-700 text-sm font-medium leading-5"
                    >
                      Password
                    </label>
                    <div className="flex overflow-hidden align-middle bg-white rounded-md border border-gray-300 dark:border-gray-700">
                      <div className="grow ">
                        <div className="flex gap-1 align-middle mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 text-gray-500 mt-1 ml-1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                            />
                          </svg>

                          <input
                            type="text"
                            placeholder="Password"
                            className="w-full text-[14px] text-gray-900 px-1 bg-white focus-within:outline-none"
                          />
                        </div>
                      </div>
                      <div className="shrink-0">
                        <button
                          type="button"
                          className="inline-flex items-center py-2 px-3 text-gray-500 border-l border-gray-100 dark:bg-gray-700 sm:text-sm focus-within:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 text-gray-500 dark:text-white "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:grid sm:gap-3 sm:grid-flow-row-dense sm:grid-cols-2 sm:mt-8">
              <span className="flex w-full rounded-md shadow-sm sm:col-start-2">
                <button
                  type="button"
                  className="focus:ring-blue inline-flex justify-center px-4 py-2 w-full text-white text-base font-medium leading-6 hover:bg-blue-500 bg-blue-600 border focus:border-blue-700 border-transparent rounded-md focus:outline-none shadow-sm transition sm:text-sm sm:leading-5"
                >
                  Create
                </button>
              </span>
              <span className="flex mt-3 w-full rounded-md shadow-sm sm:col-start-1 sm:mt-0">
                <button
                  onClick={() => setOpenModa1(false)}
                  type="button"
                  className="focus:ring-blue inline-flex justify-center px-4 py-2 w-full dark:text-ebony-300 hover:text-ebony-500 text-ebony-700 text-base font-medium leading-6 dark:bg-ebony-700 bg-white border focus:border-blue-300 border-ebony-300 dark:border-ebony-800 rounded-md focus:outline-none shadow-sm transition sm:text-sm sm:leading-5"
                >
                  Cancel
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
