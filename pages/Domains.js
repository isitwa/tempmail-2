import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import user from "../public/images/user.bmp";
import { Menu } from "@headlessui/react";
import { Dialog, Transition } from "@headlessui/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  Bars3Icon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { BsCode } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";

import { CheckIcon } from "@heroicons/react/24/outline";
import LeftSidebarDomain from "../components/domain_components/LeftSidebarDomain";
import SidenavLink from "../components/SidenavLink";

const people = [
  {
    number: "1",
    name: "Google.com",
    mailAccounts: "500",
    totalMails: "50000",
    status: "Public",
  },
  {
    number: "2",
    name: "Yahoo.com",
    mailAccounts: "500",
    totalMails: "50000",
    status: "Pro",
  },
  {
    number: "3",
    name: "Facebook.com",
    mailAccounts: "500",
    totalMails: "50000",
    status: "Public",
  },
  {
    number: "4",
    name: "Youtube.com",
    mailAccounts: "500",
    totalMails: "50000",
    status: "Pro",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Domains() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  return (
    <>
      <div className="flex items-stretch h-screen">
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
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <SidenavLink />
                  <div className="flex flex-shrink-0 border-t border-gray-200 px-4">
                    <a href="#" className="group block flex-shrink-0">
                      <div className="flex items-center">
                        <div>
                          <Image
                            width={400}
                            height={400}
                            className="inline-block h-10 w-10 rounded-full"
                            src={user}
                            alt="image"
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                            Tom Cook
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        <LeftSidebarDomain />

        <div className="flex flex-1 flex-col md:ml-56 px-[15px] md:px-8 lg:pl-11 w-full">
          <div className="sticky top-0 z-10 bg-white pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 bg-whitefocus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                  <h1 className="text-xl text-gray-900 font-bold font-CalSans">
                    Domain
                  </h1>
                  <p className="mt-2 text-sm text-neutral-500">
                    A list of all the users in your account including their
                    name, title, email and role.
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                  <div className="flex gap-2">
                    <Link
                      href="/mailaccounts"
                      className="inline-flex items-center text-sm font-medium bg-gray-900 rounded-md transition-colors text-white h-9 px-4 py-2.5  bg-brand-500 hover:bg-gray-700  "
                    >
                      <div className="flex gap-1 items-center">
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
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>

                        <span>Mail Accounts</span>
                      </div>
                    </Link>
                    <button
                      type="button"
                      onClick={() => setOpen1(true)}
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

                        <span>Add Domain</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col">
                <div className="overflow-x-auto">
                  <div className="inline-block min-w-full py-2 align-middle ">
                    <div className=" shadow-md  pb-50 overflow-hidden rounded-md">
                      <table className="min-w-full divide-y divide-gray-100">
                        <thead className="bg-white">
                          <tr className=" ">
                            <th
                              scope="col"
                              className="p-6 text-left text-[12px] font-semibold text-gray-600  uppercase"
                            >
                              No.
                            </th>
                            <th
                              scope="col"
                              className="p-6 text-left text-[12px] font-semibold text-gray-600  uppercase"
                            >
                              Domain
                            </th>
                            <th
                              scope="col"
                              className="p-6 text-left text-[12px] font-semibold text-gray-600  uppercase"
                            >
                              Accounts
                            </th>
                            <th
                              scope="col"
                              className="p-6 text-left text-[12px] font-semibold text-gray-600  uppercase"
                            >
                              Mails
                            </th>
                            <th
                              scope="col"
                              className="p-6 text-left text-[12px] font-semibold text-gray-600  uppercase"
                            >
                              Type
                            </th>
                            <th
                              scope="col"
                              className="p-6  text-center text-[12px] font-semibold text-gray-600  uppercase"
                            ></th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                          {people.map((person) => (
                            <tr key={person.number}>
                              <td className="whitespace-nowrap p-6 text-sm font-medium text-gray-900 ">
                                {person.number}
                              </td>
                              <td className="whitespace-nowrap p-6 text-sm font-medium text-gray-900 ">
                                {person.name}
                              </td>
                              <td className="whitespace-nowrap p-6 text-sm text-gray-500">
                                {person.mailAccounts}
                              </td>
                              <td className="whitespace-nowrap p-6 text-sm text-gray-500">
                                {person.totalMails}
                              </td>
                              <td className="whitespace-nowrap p-6 text-sm text-gray-500">
                                <span className="bg-green-400 text-white py-1 px-2 rounded-full text-[12px]">
                                  {" "}
                                  {person.status}
                                </span>
                              </td>
                              <td className="relative whitespace-nowrap p-6 text-right text-sm font-medium ">
                                <Menu
                                  as="div"
                                  className="relative inline-block text-left"
                                >
                                  <div>
                                    <Menu.Button className="inline-flex w-full justify-center bg-white px-4 py-2 text-sm font-medium text-gray-700 ">
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
                                    <Menu.Items className=" absolute -bottom-0 right-10 z-10 mt-2 w-50 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                      <div className=" flex">
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
                                              <div className="flex gap-2 items-center">
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
                                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                  />
                                                </svg>

                                                <span className="text-[14px]">
                                                  Edit
                                                </span>
                                              </div>
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
                                              <div className="flex gap-2 items-center">
                                                <AiOutlineShareAlt className="w-4 h-4" />
                                                <span className="text-[14px]">
                                                  Share
                                                </span>
                                              </div>
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
                                              <div className="flex gap-2 items-center">
                                                <MdOutlineAdd className="w-4 h-4" />
                                                <span className="text-[14px]">
                                                  Add
                                                </span>
                                              </div>
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
                                                "block px-4 py-2 text-sm border-t border-gray-200"
                                              )}
                                            >
                                              <div className="flex gap-2 items-center">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  strokeWidth={1.5}
                                                  stroke="currentColor"
                                                  className="w-4 h-4 text-gray-700"
                                                >
                                                  <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                  />
                                                </svg>
                                                <span className="text-[14px]">
                                                  Delete
                                                </span>
                                              </div>
                                            </a>
                                          )}
                                        </Menu.Item>
                                      </div>
                                    </Menu.Items>
                                  </Transition>
                                </Menu>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* popup */}
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between border-b border-gray-200 p-4">
                      <h3 className="text-[20px] font-bold text-gray-800">
                        Add domain
                      </h3>
                      <button
                        type="button"
                        className="inline-flex  justify-center rounded-md border border-transparent bg-transparent p-1 text-base font-medium text-gray-900 sm:text-sm"
                        onClick={() => setOpen1(false)}
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
                    {/* <div className="p-4 flex flex-col gap-3  border-b border-gray-200">
                      <p className="text-gray-500 text-[16px]">
                        You can add personal domain and make one of your own
                        domains to point to{" "}
                        <span className="font-semibold">sendbun.com</span>.
                        Please specify the domain you own below.
                      </p>
                      <p className="text-gray-500 text-[16px]">
                        You can read more information on how to do the setup at
                        https://sendbun.com
                      </p>
                      <input
                        type="text"
                        className="border border-gray-200 rounded-md w-full p-3"
                        placeholder="Enter your domain URL"
                      />
                    </div> */}

                    <div className="flex flex-col ga-4 py-[20px] px-[30px]">
                      <Tabs className="search-page-list float-left w-full">
                        <TabList className="flex border-b border-gray-100">
                          <Tab className="text-gray-400 text-sm cursor-pointer py-2 px-3 mr-2">
                            Domain
                          </Tab>
                          <Tab className="text-gray-400 text-sm cursor-pointer py-2 px-3 mr-2">
                            Verify
                          </Tab>
                        </TabList>
                        <TabPanel>
                          <div className="py-6">
                            <div className="flex flex-col gap-4">
                              <div className="flex flex-col border-l-2   border-blue-500 pl-5">
                                <h4 className="text-gray-800 text-[16px]">
                                  Add a domain that you own to your Proton Mail
                                  account.
                                </h4>
                                <Link
                                  href="#"
                                  className="text-blue-500 underline underline-offset-1"
                                >
                                  Learn more
                                </Link>
                              </div>
                              <div className="flex flex-col gap-3 w-full md:w-[300px]">
                                <label
                                  htmlFor=""
                                  className="text-gray-800 text-[16px] font-semibold"
                                >
                                  Domain name
                                </label>
                                <input
                                  type="text"
                                  placeholder="yourdomian.com"
                                  className="text-[16px] border border-gray-200 rounded-md w-full px-4 py-2"
                                />
                              </div>

                              <div className="flex flex-col gap-3 w-full md:w-[300px]">
                                <label
                                  htmlFor=""
                                  className="text-gray-800 text-[16px] font-semibold"
                                >
                                  Domain name
                                </label>
                                <h6 className="text-gray-700 text-[16px]">
                                  Isitwa.com
                                </h6>
                              </div>
                            </div>
                          </div>
                        </TabPanel>
                        <TabPanel>
                          <div className="py-6">
                            <div className="flex flex-col gap-4">
                              <div className="flex flex-col border-l-2   border-blue-500 pl-5">
                                <h4 className="text-gray-800 text-[16px]">
                                  For security reasons, we need to verify that
                                  you are the owner of isitwa.com. Please add
                                  the following DNS TXT record to your domain.
                                  This can typically be done in the control
                                  panel of your domain name registrar.
                                </h4>
                                <Link
                                  href="#"
                                  className="text-blue-500 underline underline-offset-1"
                                >
                                  Learn more
                                </Link>
                              </div>
                              <div className="flex flex-col border-l-2 border-orange-400 pl-5">
                                <h4 className="text-gray-800 text-[16px]">
                                  After successful verification, do not remove
                                  this TXT record as it is needed to confirm
                                  that you continue to own the domain.
                                </h4>
                                <Link
                                  href="#"
                                  className="text-blue-500 underline underline-offset-1"
                                >
                                  Learn more
                                </Link>
                              </div>
                              <h4 className="text-gray-800 text-[16px]">
                                Please add the following TXT record:
                              </h4>
                              <div class="grid md:grid-cols-3 my-5">
                                <div className="py-[10px]">
                                  <h4 className="text-gray-800 font-semibold text-[16px]">
                                    Type
                                  </h4>
                                </div>
                                <div className="py-[10px]">
                                  <h4 className="text-gray-800 font-semibold text-[16px]">
                                    Host
                                  </h4>
                                </div>
                                <div className="py-[10px]">
                                  <h4 className="text-gray-800 font-semibold text-[16px]">
                                    Value/Data/Points to
                                  </h4>
                                </div>
                                <div className="py-[10px] border-y border-gray-200">
                                  <h4 className="text-gray-800 text-[16px]">
                                    Text
                                  </h4>
                                </div>
                                <div className="py-[10px] border-y border-gray-200">
                                  <h4 className="text-gray-800 text-[16px]">
                                    @
                                  </h4>
                                </div>
                                <div className="py-[10px] border-y border-gray-200">
                                  <div className="flex items-center gap-3">
                                    <button
                                      type="button"
                                      className="border-0 bg-transparent
                                    "
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
                                          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                                        />
                                      </svg>
                                    </button>
                                    <p className="text-gray-800 text-[16px] text-ellipsis overflow-hidden w-[300px] whitespace-nowrap ">
                                      protomail-verification=d8089324798edjhwekfhcjksdh
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col border-l-2 border-orange-400 pl-5">
                                <h4 className="text-gray-800 text-[16px]">
                                  It can take up to a day for DNS changes to
                                  update.
                                </h4>
                                <Link
                                  href="#"
                                  className="text-blue-500 underline underline-offset-1"
                                >
                                  Learn more
                                </Link>
                              </div>
                            </div>
                          </div>
                        </TabPanel>
                      </Tabs>
                    </div>
                    <div className="p-4 flex justify-end">
                      <div className="flex gap-3">
                        <button
                          type="button"
                          className="text-[14px] font-medium rounded-md border border-gray-200 bg-white text-gray-600 p-[10px] px-[20px]"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="text-[14px] font-medium rounded-md bg-gray-900 text-white p-[10px] px-[20px]"
                        >
                          Add Domain
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
