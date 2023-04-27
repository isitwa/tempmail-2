import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import logo from "../../public/images/icons/logo.png";
import user from "../../public/images/user.bmp";
import Link from "next/link";
import Image from "next/image";
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
import { AiOutlineSetting } from "react-icons/ai";

import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import { HiOutlineMail } from "react-icons/hi";
import { GrDomain } from "react-icons/gr";
import { FaSitemap } from "react-icons/fa";
const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
  { name: "Mailbox", href: "/mailbox", icon: InboxIcon, current: false },
  { name: "Domain", href: "/domains", icon: GrDomain, current: false },
  { name: "Sites", href: "/sites", icon: FaSitemap, current: false },
  {
    name: "Mail Manager",
    href: "/MailManager",
    icon: HiOutlineMail,
    current: false,
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function LeftSidebarDomain() {
  return (
    <>
      {/* Static sidebar for desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:[w-90px] lg:w-56 md:flex-col ">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 ">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-5">
              <h6 className="text-[20px] text-black font-semibold">Emailb</h6>
              {/* <Image
                width={400}
                height={500}
                className="h-4 w-auto"
                src={logo}
                alt="image"
              /> */}
            </div>
            <nav className="mt-5 flex-1 space-y-1  px-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-200 text-gray-900"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                    "group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-gray-600"
                        : "text-gray-500 group-hover:text-gray-500",
                      "mx-auto lg:mr-3 lg:ml-0 flex-shrink-0 w-6 h-6 lg:h-4 lg:w-4"
                    )}
                    aria-hidden="true"
                  />
                  <span className=" hidden lg:block"> {item.name}</span>
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-shrink-0 border-t border-gray-200 py-4">
            <Menu as="div" className="relative block text-left w-full">
              <Menu.Button
                className="inline-flex w-full justify-center 
                rounded-md  px-4
                 text-sm font-medium text-gray-700"
              >
                <div className="group block w-full flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="rounded-full object-cover w-[30px] h-[30px]  mx-auto lg:m-0">
                        <Image
                          width={100}
                          height={100}
                          className="inline-block h-full w-full rounded-full object-cover"
                          src={user}
                          alt="image"
                        />
                      </div>
                      <div className="ml-3 hidden lg:block">
                        <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                          Tom Cook
                        </p>
                      </div>
                    </div>

                    <div>
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
                          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  className="absolute left-0 
                z-10 mb-2 right-0 origin-top-right divide-y  bottom-7
                divide-gray-100 rounded-md bg-white shadow-lg 
                ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div className="">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "group flex items-center px-4 py-2 text-sm"
                          )}
                        >
                          <div className="flex items-center gap-2">
                            <div className="shrink-0">
                              <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                                <Image
                                  src={user}
                                  alt="user"
                                  className="w-full h-full object-cover"
                                  width={100}
                                  height={100}
                                />
                              </div>
                            </div>
                            <div className="grow">
                              <div className="flex flex-col">
                                <h5 className="text-gray-800 font-medium text-[14px]">
                                  Joanna
                                </h5>
                                <h6 className="text-gray-800 font-normal text-[13px]">
                                  @adminName
                                </h6>
                              </div>
                            </div>
                          </div>
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "group flex items-center px-4 py-2 text-sm"
                          )}
                        >
                          <div className="flex items-center gap-2">
                            <div className="shrink-0">
                              <div className="w-[30px] h-[30px] rounded-md overflow-hidden">
                                <Image
                                  src={user}
                                  alt="user"
                                  className="w-full h-full object-cover"
                                  width={100}
                                  height={100}
                                />
                              </div>
                            </div>
                            <div className="grow">
                              <div className="flex flex-col">
                                <h5 className="text-gray-800 font-medium text-[14px]">
                                  Joanna
                                </h5>
                                <h6 className="text-gray-800 font-normal text-[13px]">
                                  @adminName
                                </h6>
                              </div>
                            </div>
                          </div>
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "group flex items-center px-4 py-2 text-sm"
                          )}
                        >
                          <div className="flex items-center gap-2">
                            <div className="shrink-0">
                              <div className="w-[30px] h-[30px] rounded-md overflow-hidden">
                                <Image
                                  src={user}
                                  alt="user"
                                  className="w-full h-full object-cover"
                                  width={100}
                                  height={100}
                                />
                              </div>
                            </div>
                            <div className="grow">
                              <div className="flex flex-col">
                                <h5 className="text-gray-800 font-medium text-[14px]">
                                  Joanna
                                </h5>
                                <h6 className="text-gray-800 font-normal text-[13px]">
                                  @adminName
                                </h6>
                              </div>
                            </div>
                          </div>
                        </a>
                      )}
                    </Menu.Item>
                  </div>

                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "group flex items-center px-4 py-2 text-sm"
                          )}
                        >
                          <UserPlusIcon
                            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          Join
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
                            "group flex items-center px-4 py-2 text-sm"
                          )}
                        >
                          <HeartIcon
                            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          Help
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/profile"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "group flex items-center px-4 py-2 text-sm"
                          )}
                        >
                          <AiOutlineSetting
                            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          Settings
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "group flex items-center px-4 py-2 text-sm"
                          )}
                        >
                          <TrashIcon
                            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          Sign out
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
    </>
  );
}

export default LeftSidebarDomain;
