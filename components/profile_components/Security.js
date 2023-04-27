import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import Image from "next/image";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Security() {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 p-6 rounded-md shadow bg-white">
          <h3 className="text-gray-900 font-bold text-[18px]">Security</h3>
          <h4 className="text-gray-600 text-[16px]">API Key</h4>
          <div className="flex gap-4">
            <button className="text-white font-semibold text-[16px] rounded-md py-[6px] px-[20px] bg-gray-900">
              Show
            </button>
            <button className="text-white font-semibold text-[16px] rounded-md py-[6px] px-[20px] bg-gray-900">
              Re-Generate
            </button>
            <button className="text-white font-semibold text-[16px] rounded-md py-[6px] px-[20px] bg-gray-900">
              Copy
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 p-6 rounded-md shadow bg-white">
          <h3 className="text-gray-900 font-bold text-[18px]">
            Multi Factor Authentication
          </h3>
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <h4 className="text-gray-500 text-[16px]">Email:</h4>
              <h5 className="text-gray-500 text-[14px]">
                Receive 2FA codes through your Email.
              </h5>
            </div>
            <div className="">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={classNames(
                  enabled ? "bg-indigo-600" : "bg-gray-200",
                  "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out "
                )}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    enabled ? "translate-x-5" : "translate-x-0",
                    "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
          </div>

          <div className="border-b border-gray-200"></div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <h4 className="text-gray-500 text-[16px]">Email:</h4>
              <h5 className="text-gray-500 text-[14px]">
                Receive 2FA codes through your Email.
              </h5>
            </div>
            <div className="">
              <button className="text-white font-semibold text-[16px] rounded-md py-[6px] px-[20px] bg-gray-900">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
