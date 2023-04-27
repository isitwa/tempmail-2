import React from "react";
import { HiOutlineCreditCard } from "react-icons/hi";

export default function StatsList() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <h3 className="text-gray-900 text-[20px] font-semibold">Stats</h3>
            <h6 className="text-[14px] text-gray-400">Stats Lisy</h6>
          </div>
          {/* <button
            type="button"
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

              <span>Deploy</span>
            </div>
          </button> */}
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col md:flex-row gap-3 md:gap-0 p-6 border border-gray-200 rounded-md justify-between items-center bg-white">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <HiOutlineCreditCard className="text-gray-400 text-[24px]" />
                <h3 className="text-gray-800 font-semibold text-[18px]">
                  400 Subscriptions
                </h3>
              </div>
              <p className="text-[16px] text-gray-500">
                Track up to 400 subscriptions
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-0 p-6 border border-gray-200 rounded-md justify-between items-center bg-white">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <HiOutlineCreditCard className="text-gray-400 text-[24px]" />
                <h3 className="text-gray-800 font-semibold text-[18px]">
                  400 Subscriptions
                </h3>
              </div>
              <p className="text-[16px] text-gray-500">
                Track up to 400 subscriptions
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-0 p-6 border border-gray-200 rounded-md justify-between items-center bg-white">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <HiOutlineCreditCard className="text-gray-400 text-[24px]" />
                <h3 className="text-gray-800 font-semibold text-[18px]">
                  400 Subscriptions
                </h3>
              </div>
              <p className="text-[16px] text-gray-500">
                Track up to 400 subscriptions
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
