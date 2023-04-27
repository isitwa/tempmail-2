import React from "react";
import Image from "next/image";
import maiIcon from "../../public/images/mail-icon.jpg";
export default function EmailTemp_InnerBox() {
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
                  {/* <h5 className="text-white z-10 text-[12px] -right-[15px] bg-blue-600 w-[20px] h-[20px] rounded-full text-center absolute -top-[15px]">
                    1
                  </h5> */}
                  <h5 className="text-gray-900 text-[16px] font-semibold ">
                    0
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
        <div className="flex py-[60px] justify-center px-[15px]">
          <div className=" w-full md:w-[485px]">
            <div className="flex flex-col gap-3">
              <h3 className="text-[16px] text-gray-400">
                To change the email address, please enter the desired E-mail
                address and than click on Save!
              </h3>
              <form action="">
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="login"
                    className="text-gray-500 bg-gray-100 rounded-md text-[16px] p-4 focus-within:outline-none"
                  />
                  <select
                    name=""
                    id=""
                    className="text-gray-500 placeholder-shown:text-gray-900 bg-gray-100 rounded-md text-[16px] p-4 focus-within:outline-none"
                  >
                    <option value="">@gotgel.org</option>
                    <option value="">@jollyfree.com</option>
                  </select>

                  <div className="">
                    <button
                      type="submit"
                      className="text-[16px] text-white bg-blue-700 rounded-md py-[12px] w-[140px] text-center"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
