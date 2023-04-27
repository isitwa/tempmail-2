import React from "react";
import Link from "next/link";
import Image from "next/image";
import maiIcon from "../../public/images/user.png";
export default function MailList_InnerBox() {
  return (
    <>
      <div className="w-full lg:w-[1087px] mx-auto md:table bg-white shadow-md rounded-md border border-gray-100">
        <div className="flex justify-between align-middle border-b border-gray-100 p-4">
          <div className="shrink-0">
            <div className="flex gap-3 items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
              </svg> */}
              <div className="flex gap-2 align-middle">
                <h4 className="text-gray-500 text-[16px]">Mailbox</h4>
                <div className="relative">
                  <h5 className="text-white z-10 text-[12px] -right-[15px] bg-blue-600 w-[20px] h-[20px] rounded-full text-center absolute -top-[15px]">
                    1
                  </h5>
                  <h5 className="text-gray-900 text-[16px] font-semibold ">
                    1
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0">
            <div className="flex align-middle gap-4">
              <button className="text-[16px] text-blue-600">
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
                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                  />
                </svg>
              </button>
              <button className="text-[16px] text-blue-600">
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
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className=" h-[500px] overflow-y-auto">
          <div className="flex gap-6 justify-between items-center border-t border-b border-gray-200 py-3 px-6">
            <div className="flex items-center gap-3 shrink w-[120px] justify-between">
              <div
                className=" w-[20px] shrink-0 hidden sm:block
                  "
              >
                <input type="checkbox" />
              </div>
              <div
                className="w-[20px] shrink-0 hidden sm:block
                  "
              >
                <div className="bg-blue-600 rounded-full w-[6px] h-[6px]"></div>
              </div>
              <Link
                href=""
                className=" w-[30px] h-[30px] overflow-hidden rounded-full  shrink-0
                  "
              >
                <Image
                  src={maiIcon}
                  alt="imagemail"
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
            <div className="flex items-center gap-3 justify-between flex-row w-full  md:w-[500px]">
              <Link
                href=""
                className=" shrink-0
                  "
              >
                <div
                  className="
                    "
                >
                  <h5 className="text-gray-900 text-[12px]  sm:text-[14px] font-semibold w-[100px] text-ellipsis truncate  overflow-hidden">
                    Unsplash Team
                  </h5>
                </div>
              </Link>
              <Link href="flex-grow">
                <h5 className="text-gray-900   text-[12px]  sm:text-[14px] font-semibold text-ellipsis truncate  overflow-hidden w-[130px] md:w-[300px]">
                  Confirm your Unsplash Account
                </h5>
              </Link>
            </div>

            <Link href="shrink">
              <h6 className="text-blue-600 text-[12px] font-semibold">20:25</h6>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
