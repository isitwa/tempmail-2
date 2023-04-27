import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { TbTicket } from "react-icons/tb";
import { MdOutlineContentCopy } from "react-icons/md";

export default function BillingSection() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="block bg-white p-6 rounded-md shadow">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-md p-5">
              <div className="flex flex-col gap-3">
                <h3 className="text-gray-500 font-semibold text-[20px]">
                  Your Current Plan
                </h3>
                <div>
                  <h5 className="text-blue-500 bg-blue-100 text-[14px] font-light px-2 py-[2px] rounded-full w-auto float-left">
                    Appsumo
                  </h5>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <BsCheck2 className="w-5 h-5" />
                  <span>7000 credits per month</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <BsCheck2 className="w-5 h-5" />
                  <span>All Features</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <BsCheck2 className="w-5 h-5" />
                  <span>Premium Support</span>
                </div>
                <div className="">
                  <button
                    type="buttton"
                    className="bg-gray-900 hover:bg-gray-800 text-white text-[16px] rounded-md py-[10px] px-[10px] w-full"
                  >
                    Upgrade Plan
                  </button>
                </div>
              </div>
            </div>
            <div className=" rounded-md py-5 md:p-5">
              <div className="flex flex-col gap-3">
                <h3 className="text-gray-500 font-semibold text-[20px]">
                  Got a Promo code?
                </h3>
                <div className="flex gap-3 items-center">
                  <div className="grow">
                    <div className=" relative border border-gray-200 rounded-md overflow-hidden">
                      <TbTicket className=" absolute top-[12px] left-2 z-[20] text-gray-300 text-[26px]" />
                      <input
                        type="text"
                        placeholder="Promo code"
                        className="py-3 pr-3 pl-10 border-0 w-full"
                      />
                    </div>
                  </div>
                  <div className="shrink">
                    <button
                      type="button"
                      className="bg-gray-900 hover:bg-gray-800 text-white text-[16px] rounded-md py-[12px] px-[30px]"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block bg-white rounded-md shadow">
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col gap-3 p-6 md:border-r border-gray-200 border-b">
              <h4 className="text-gray-900 font-semibold text-[18px]">
                Domains
              </h4>
              <div className="block bg-gray-300 rounded-full overflow-hidden">
                <div className="bg-green-400 w-[40%] p-[4px]"></div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                  <MdOutlineContentCopy className="text-gray-400 w-4 h-4" />
                  <span className="text-gray-400 text-[14px]">1 (25%)</span>
                </div>
                <div className="flex gap-3 items-center">
                  <MdOutlineContentCopy className="text-gray-400 w-4 h-4" />
                  <span className="text-gray-400 text-[14px]">4</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-6 border-gray-200 border-b">
              <h4 className="text-gray-900 font-semibold text-[18px]">
                Mail Accounts
              </h4>
              <div className="block bg-gray-300 rounded-full overflow-hidden">
                <div className="bg-green-400 w-[40%] p-[4px]"></div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                  <MdOutlineContentCopy className="text-gray-400 w-4 h-4" />
                  <span className="text-gray-400 text-[14px]">1 (25%)</span>
                </div>
                <div className="flex gap-3 items-center">
                  <MdOutlineContentCopy className="text-gray-400 w-4 h-4" />
                  <span className="text-gray-400 text-[14px]">4</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-6 border-gray-200 border-b md:border-b-0 md:border-r">
              <h4 className="text-gray-900 font-semibold text-[18px]">
                Mails Receive/Sent
              </h4>
              <div className="block bg-gray-300 rounded-full overflow-hidden">
                <div className="bg-green-400 w-[40%] p-[4px]"></div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                  <MdOutlineContentCopy className="text-gray-400 w-4 h-4" />
                  <span className="text-gray-400 text-[14px]">1 (25%)</span>
                </div>
                <div className="flex gap-3 items-center">
                  <MdOutlineContentCopy className="text-gray-400 w-4 h-4" />
                  <span className="text-gray-400 text-[14px]">4</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-6">
              <h4 className="text-gray-900 font-semibold text-[18px]">
                Storage (GB)
              </h4>
              <div className="block bg-gray-300 rounded-full overflow-hidden">
                <div className="bg-green-400 w-[40%] p-[4px]"></div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                  <MdOutlineContentCopy className="text-gray-400 w-4 h-4" />
                  <span className="text-gray-400 text-[14px]">1 (25%)</span>
                </div>
                <div className="flex gap-3 items-center">
                  <MdOutlineContentCopy className="text-gray-400 w-4 h-4" />
                  <span className="text-gray-400 text-[14px]">4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
