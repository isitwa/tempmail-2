import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FiChevronDown } from "react-icons/fi";
// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export default function SettingDetails() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="block bg-white p-6 rounded-md shadow">
          <div className="flex border-b border-cus-20 pb-1 mb-4">
            <h2 className="text-cus-10 font-bold text-[18px]">Custom domain</h2>
          </div>

          <div className="grid md:grid-cols-12 gap-6 lg:gap-8">
            <div className="col-span-4">
              <h3 className="text-cus-10 font-bold text-[14px]">Domain Name</h3>
            </div>
            <div className="col-span-8">
              <input
                type="text"
                placeholder="blog.jobrefresher.com"
                className="border-b border-cus-20 px-3 py-1 bg-white font-light focus-within:outline-none w-full  text-[14px]"
              />
            </div>

            <div className="col-span-4">
              <h3 className="text-cus-10 font-bold text-[14px]">Desription</h3>
            </div>
            <div className="col-span-8">
              <input
                type="text"
                placeholder="jobrefresher blog"
                className="border-b border-cus-20 px-3 py-1 bg-white font-light focus-within:outline-none w-full  text-[14px]"
              />
            </div>
            <div className="col-span-4">
              <h3 className="text-cus-10 font-bold text-[14px]">
                Google Analytics
              </h3>
            </div>
            <div className="col-span-8">
              <input
                type="text"
                placeholder="G-XXD7418DPY"
                className="border-b border-cus-20 px-3 py-1 bg-white font-light focus-within:outline-none w-full  text-[14px]"
              />
            </div>
            <div className="col-span-4">
              <h3 className="text-cus-10 font-bold text-[14px]">
                Google Tag Manager
              </h3>
            </div>
            <div className="col-span-8">
              <input
                type="text"
                placeholder="GTM-00ABCS"
                className="border-b border-cus-20 px-3 py-1 bg-white font-light focus-within:outline-none w-full  text-[14px]"
              />
            </div>
            <div className="col-span-4">
              <h3 className="text-cus-10 font-bold text-[14px]">
                Google Adsense
              </h3>
            </div>
            <div className="col-span-8">
              <input
                type="text"
                placeholder="ca-pub-12333ABSD"
                className="border-b border-cus-20 px-3 py-1 bg-white font-light focus-within:outline-none w-full  text-[14px]"
              />
            </div>
          </div>
          <div className="block border-b border-cus-20 my-5"></div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <h3 className="text-gray-900 font-bold text-[14px]">Favicon</h3>
            </div>
            <div className="grow">
              <div className="flex gap-3 justify-between">
                <div className="flex flex-col">
                  <h3 className="text-[14px] text-black font-medium">
                    Add favicon
                  </h3>
                  <p className="text-[12px] text-gray-500">
                    A favicon is a small 16x16 pixel icon that serves as
                    branding for you Publication
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
          <Accordion
            className="rounded-lg overflow-hidden group"
            allowZeroExpanded
          >
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="border-gray-10 rounded-lg text-sm font-semibold p-4 bg-gray-50 focus:bg-gray-200">
                  <div className="flex justify-between items-center">
                    <h4>Robots.txt</h4>
                    <FiChevronDown className="text-gray-600 text-sm transform focus:rotate-180 w-10" />
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="border border-gray-100 rounded-lg overflow-hidden p-4">
                <div className="grid grid-cols-12 gap-2 mb-8">
                  <div className="col-span-12 sm:col-span-4">
                    <h2 className="mb-3 md:mb-0 text-sm font-bold w-full ">
                      Robots.txt
                    </h2>
                  </div>
                  <div className="col-span-12 sm:col-span-8">
                    <textarea
                      rows="4"
                      placeholder=""
                      className="rounded-lg text-md border border-gray-100 px-4 py-2 text-gray-700 w-full focus:none focus-visible:none focus-within:none focus:outline-none"
                    ></textarea>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="border-gray-10 rounded-lg text-sm font-semibold p-4 bg-gray-50 focus:bg-gray-200">
                  <div className="flex justify-between items-center">
                    <h4>Ads.txt</h4>
                    <FiChevronDown className="text-gray-600 text-sm transform focus:rotate-180 w-10" />
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="border border-gray-100 rounded-lg overflow-hidden p-4">
                <div className="grid grid-cols-12 gap-2 mb-8">
                  <div className="col-span-12 sm:col-span-4">
                    <h2 className="mb-3 md:mb-0 text-sm font-bold w-full ">
                      Ads.txt
                    </h2>
                  </div>
                  <div className="col-span-12 sm:col-span-8">
                    <textarea
                      rows="4"
                      placeholder=""
                      className="rounded-lg text-md border border-gray-100 px-4 py-2 text-gray-700 w-full focus:none focus-visible:none focus-within:none focus:outline-none"
                    ></textarea>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex justify-end space-x-2 border-t border-cus-20 mt-2 pt-4">
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
    </>
  );
}
