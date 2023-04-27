import React from "react";
import Link from "next/link";

export default function SettingAdvanced() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="block bg-white p-6 rounded-md shadow">
          <div className="flex border-b border-cus-20 pb-1 mb-4">
            <h2 className="text-cus-10 font-bold text-[18px]">Indexing</h2>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0">
              <div className="flex flex-col gap-1">
                <h3 className="text-[18px] font-bold text-cus-10">
                  Search engine indexing
                </h3>
                <p className="text-[12px] text-cus-400">
                  Allow search ebgine to crawl & index your Publication
                </p>
              </div>
              <div>
                <div className="inline-flex border border-cus-200 overflow-hidden rounded-full">
                  <Link
                    href=""
                    className="text-[14px] font-light hover:bg-cus-10 hover:text-white py-1 px-4 text-cus-500 focus:bg-cus-10 focus:text-white"
                  >
                    Index
                  </Link>
                  <Link
                    href=""
                    className="text-[14px] font-light hover:bg-cus-10 hover:text-white py-1 px-4 text-cus-500 focus:bg-cus-10 focus:text-white"
                  >
                    Noindex
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0">
              <div className="flex flex-col gap-1">
                <h3 className="text-[18px] font-bold text-cus-10">Site Type</h3>
                <p className="text-[12px] text-cus-400">
                  Aliqua qui quis officia ad proident fugiat velit eiusmod
                  excepteur ex tempor.
                </p>
              </div>
              <div>
                <div className="inline-flex border border-cus-200 overflow-hidden rounded-full">
                  <Link
                    href=""
                    className="text-[14px] font-light hover:bg-cus-10 hover:text-white py-1 px-4 text-cus-500 focus:bg-cus-10 focus:text-white"
                  >
                    Public
                  </Link>
                  <Link
                    href=""
                    className="text-[14px] font-light hover:bg-cus-10 hover:text-white py-1 px-4 text-cus-500 focus:bg-cus-10 focus:text-white"
                  >
                    Private
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block bg-white p-6 rounded-md shadow">
          <div className="flex border-b border-cus-20 pb-1 mb-4">
            <h2 className="text-cus-10 font-bold text-[18px]">Security</h2>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h3 className="text-cus-10 font-bold">Deactivate Site</h3>
              <p className="text-[14px] text-cus-10 ">
                Deactivating your account will remove it from Medium within a
                few minutes. Deactivation will also immediately cancel any
                subscription for Medium Membership, and no money will be
                reimbursed. You can sign back in anytime to reactivate your
                account and restore its content.
              </p>
              <div>
                <Link
                  href="#"
                  className="text-sm  text-cus-50 underline inline-block  font-light"
                >
                  Deactivate account
                </Link>
              </div>
            </div>
            <div className="border-b border-slate-200"></div>
            <div className="flex flex-col gap-3">
              <h3 className="text-cus-10 font-bold">Delete Site</h3>
              <p className="text-[14px] text-cus-10 ">
                Permanently delete your account and all of your content.
              </p>
              <div>
                <Link
                  href="#"
                  className="text-sm text-cus-50 underline  inline-block font-light"
                >
                  Delete Site
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
