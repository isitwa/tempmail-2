import React from "react";
import Link from "next/link";
import Image from "next/image";
import user from "../../public/images/user.bmp";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { BiHistory, BiUserPlus } from "react-icons/bi";
import { MdPublishedWithChanges, MdOutlineArrowForward } from "react-icons/md";
import { AiFillFastForward, AiOutlineDelete } from "react-icons/ai";
import { Menu, Transition } from "@headlessui/react";
import { BsQuestion } from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";
import { CiLogin } from "react-icons/ci";
import { Fragment } from "react";
import { BiLogIn } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaMedal } from "react-icons/fa";

export default function AppTwo_HeaderFull() {
  return (
    <>
      <header className=" hidden xl:flex gap-5 2xl:gap-10 items-center bg-thor-300 p-[20px] sticky top-0 z-[996]">
        <div className="">
          <Link
            href="#"
            className="text-white font-bold text-[16px] 2xl:text-[32px]"
          >
            tempmail
          </Link>
        </div>

        <div className="hidden xl:block">
          <div className=" relative group w-[350px] 2xl:w-[400px] rounded-lg text-white bg-blue-500 group-hover:bg-blue-500">
            <div className="flex items-center">
              <div className="flex flex-col grow rounded-tl-md rounded-bl-md overflow-hidden group-hover:rounded-bl-none">
                <div className="text-center ">
                  <h3 className="text-[12px] text-center w-full py-[1px]">
                    Your temporary emails
                  </h3>
                </div>
                <div className=" text-center">
                  <div className=" flex justify-center bg-blue-600 group-hover:bg-blue-500">
                    <div className="flex items-center 2xl:h-[30px] gap-3">
                      <h3 className="text-[14px] 2xl:text-[18px] font-semibold">
                        083247872347823.com
                      </h3>
                      <div className="group-hover:hidden block">
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
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                      <div className=" group-hover:block hidden">
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
                            d="M4.5 15.75l7.5-7.5 7.5 7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex rounded-tr-md rounded-br-md overflow-hidden group-hover:rounded-br-none">
                <button
                  className="w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] flex justify-center items-center bg-blue-600 mx-[1px] relative
                "
                >
                  <BiHistory className="text-white text-[26px]" />
                  <div className="group-hover:block hidden absolute z-50 py-[6px] px-4 rounded-xl bg-harry-400 -bottom-[50px] w-[200px] right-[0]">
                    <div className="block relative">
                      <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-harry-400 -top-[15px] absolute  left-[70%] -translate-x-1/2"></div>
                    </div>
                    <h6 className="text-[16px] text-white text-center">
                      Open emails history
                    </h6>
                  </div>
                </button>
                <button
                  className="w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px]  flex justify-center items-center bg-blue-600
                "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="w-full  hidden group-hover:block absolute bg-blue-500 rounded-b-md overflow-hidden">
              <div className="flex flex-col">
                <div className="flex my-[1px] items-center  justify-between p-[6px] ">
                  <button className="flex gap-4 items-center">
                    <div className="bg-blue-800 w-[16px] h-[16px] p-[3px] rounded-full overflow-hidden">
                      <div className="bg-white rounded-full p-[4px] w-full h-full"></div>
                    </div>
                    <h3 className="text-[16px]"> 083247872347823.com</h3>
                  </button>
                  <div className="flex gap-4 items-center">
                    <button className="text-blue-300 text-[12px]">
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
                          d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                        />
                      </svg>
                    </button>
                    <div className=" relative">
                      <h4 className="text-[12px] text-white bg-blue-400 p-[3px] w-[20px] rounded-md text-center">
                        0
                      </h4>
                    </div>
                  </div>
                </div>
                <div
                  className=" flex justify-center bg-blue-600
                "
                >
                  <div className="flex gap-3 items-center py-[6px] ">
                    <h3 className="text-[12px]">Eamils count: 1/2</h3>
                    <div className=" relative ">
                      <BsQuestion className="text-[15px] bg-blue-800 rounded-full" />
                      {/* <div className="group-hover:block hidden absolute z-50 py-[6px] px-4 rounded-xl bg-harry-400 -top-[20px] w-[200px] right-[0]">
                        <div className="block relative">
                          <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-harry-400 -top-[15px] absolute  left-[70%] -translate-x-1/2"></div>
                        </div>
                        <h6 className="text-[16px] text-white text-center">
                          Open emails history
                        </h6>
                      </div> */}
                    </div>
                    <button className="text-gray-800 bg-white text-[12px] rounded-md py-[2px] px-[4px]">
                      Upgrade
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow  hidden xl:flex gap-8">
          <Link href="#" className=" group">
            <div className="flex  gap-2 relative align-middle items-center text-harry-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-center group-hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>

              <span className="text-[14px] 2xl:text-[16px] text-center group-hover:text-white">
                copy
              </span>
              <div className="group-hover:block hidden absolute py-[6px] px-4 rounded-xl bg-blue-600 -bottom-[50px] w-[120px] left-[50%] -translate-x-1/2">
                <div className="block relative">
                  <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-600 -top-[15px] absolute  left-[50%] -translate-x-1/2"></div>
                </div>

                <h6 className="text-[16px] text-white">Copy email</h6>
              </div>
            </div>
          </Link>
          <Link href="#" className=" group">
            <div className="flex gap-2 relative align-middle items-center text-harry-50">
              <BiRefresh className="text-[21px] group-hover:text-white" />
              <span className="text-[14px] 2xl:text-[16px] text-center group-hover:text-white">
                refresh
              </span>
              <div className="group-hover:block hidden absolute py-[6px] px-4 rounded-xl bg-blue-600 -bottom-[50px] w-[260px] left-[50%] -translate-x-1/2">
                <div className="block relative">
                  <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-600 -top-[15px] absolute  left-[50%] -translate-x-1/2"></div>
                </div>
                <h6 className="text-[16px] text-white text-center">
                  Refresh for new messages
                </h6>
              </div>
            </div>
          </Link>
          <Link href="#" className=" group">
            <div className="flex gap-2 relative align-middle items-center text-harry-50">
              <GiPerspectiveDiceSixFacesRandom className="text-[21px] group-hover:text-white" />
              <span className="text-[14px] 2xl:text-[16px] text-center group-hover:text-white">
                random
              </span>
              <div className="group-hover:block hidden absolute py-[6px] px-4 rounded-xl bg-blue-600 -bottom-[50px] w-[280px] left-[50%] -translate-x-1/2">
                <div className="block relative">
                  <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-600 -top-[15px] absolute  left-[50%] -translate-x-1/2"></div>
                </div>
                <h6 className="text-[16px] text-white text-center">
                  Get new random email address
                </h6>
              </div>
            </div>
          </Link>
          <button className=" group" onClick={() => setOpen(true)}>
            <div className="flex gap-2 relative align-middle items-center text-harry-50">
              <MdPublishedWithChanges className="text-[21px] group-hover:text-white" />
              <span className="text-[14px] 2xl:text-[16px] text-center group-hover:text-white">
                change
              </span>
              <div className="group-hover:block hidden absolute py-[6px] px-4 rounded-xl bg-blue-600 -bottom-[50px] w-[150px] left-[50%] -translate-x-1/2">
                <div className="block relative">
                  <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-600 -top-[15px] absolute  left-[50%] -translate-x-1/2"></div>
                </div>
                <h6 className="text-[16px] text-white text-center">
                  Change email
                </h6>
              </div>
            </div>
          </button>
          <button className=" group" onClick={() => setOpen1(true)}>
            <div className="flex gap-2 relative align-middle items-center text-harry-50">
              <AiFillFastForward className="text-[21px] group-hover:text-white" />
              <span className="text-[14px] 2xl:text-[16px] text-center group-hover:text-white">
                forwarding
              </span>
              <div className="group-hover:block hidden absolute py-[6px] px-4 rounded-xl bg-blue-600 -bottom-[70px] w-[260px] left-[50%] -translate-x-1/2">
                <div className="block relative">
                  <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-600 -top-[15px] absolute  left-[50%] -translate-x-1/2"></div>
                </div>
                <h6 className="text-[16px] text-white text-center">
                  Forwarding messages to your real email address
                </h6>
              </div>
            </div>
          </button>
          <Link href="#" className=" group">
            <div className="flex gap-2 relative align-middle items-center text-harry-50">
              <AiOutlineDelete className="text-[21px] group-hover:text-white" />
              <span className="text-[14px] 2xl:text-[16px] text-center group-hover:text-white">
                delete
              </span>
              <div className="group-hover:block hidden absolute py-[6px] px-4 rounded-xl bg-blue-600 -bottom-[50px] w-[210px] left-[50%] -translate-x-1/2">
                <div className="block relative">
                  <div className="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-600 -top-[15px] absolute  left-[50%] -translate-x-1/2"></div>
                </div>
                <h6 className="text-[16px] text-white text-center">
                  Delete current email
                </h6>
              </div>
            </div>
          </Link>
        </div>
        <div className="hidden xl:block">
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-[14px] text-white py-[6px] px-[15px]"
            >
              <CiLogin className="text-[20px] md:hidden block" />
              <span className=" hidden md:block">Login</span>
            </Link>
            <button
              onClick={() => setOpen2(true)}
              className="text-[14px] text-white bg-blue-600 hover:bg-blue-800 rounded-md py-[6px] px-[15px]"
            >
              Premium
            </button>
            <div>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="w-[35px] h-[35px] rounded-full overflow-hidden border border-gray-500">
                    <Image src={user} alt="image" />
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
                  <Menu.Items className="absolute right-0 z-10 overflow-hidden mt-2 w-56 origin-top-right divide-y divide-gray-700 rounded-md bg-thor-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <div className="flex flex-col px-5 gap-1">
                        <h3 className=" text-[14px] text-gray-500">
                          You are signed in as
                        </h3>
                        <h2 className=" text-[14px] text-white">
                          Jack@nighttorb.com
                        </h2>
                        <h4 className=" text-[14px] text-gray-500">
                          Password: <span>*********</span>{" "}
                        </h4>
                      </div>
                    </div>
                    <div className="py-1">
                      <Link
                        href="#"
                        className=" flex items-center gap-2 px-5 py-1 hover:bg-gray-500"
                      >
                        <div className="w-[30px] h-[30px] overflow-hidden rounded-full">
                          <Image src={user} alt="image" />
                        </div>
                        <p className="text-[14px] text-white">
                          Tony@domian.com
                        </p>
                      </Link>
                      <Link
                        href="#"
                        className=" flex items-center gap-2 px-5 py-1 hover:bg-gray-500"
                      >
                        <div className="w-[30px] h-[30px] overflow-hidden rounded-full">
                          <Image src={user} alt="image" />
                        </div>
                        <p className="text-[14px] text-white">
                          Rock@domian.com
                        </p>
                      </Link>
                    </div>
                    <Menu.Item>
                      <button
                        onClick={() => {
                          setModalOpen1(true);
                        }}
                        className="text-gray-300 group flex items-center px-4 py-2 text-sm"
                      >
                        <BiUserPlus
                          className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        Create an account
                      </button>
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-700 text-gray-200"
                              : "text-gray-300",
                            "group flex items-center px-4 py-2 text-sm"
                          )}
                        >
                          <FaMedal
                            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          Premium
                        </a>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      <button
                        onClick={() => {
                          setModalOpen2(true);
                        }}
                        className="text-gray-300 group flex items-center px-4 py-2 text-sm"
                      >
                        <BiLogIn
                          className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        Login
                      </button>
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-700 text-gray-200"
                              : "text-gray-300",
                            "group flex items-center px-4 py-2 text-sm"
                          )}
                        >
                          <MdOutlineDeleteOutline
                            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          Delete
                        </a>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-700 text-gray-200"
                              : "text-gray-300",
                            "group flex items-center px-4 py-2 text-sm"
                          )}
                        >
                          <BiRefresh
                            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          Refresh
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
