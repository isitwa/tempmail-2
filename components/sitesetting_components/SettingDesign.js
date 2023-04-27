import Link from "next/link";
import React from "react";

export default function SettingDesign() {
  return (
    <>
      <div className="block bg-white p-6 rounded-md shadow">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between md:items-center">
            <div className="flex flex-col gap-3">
              <h3 className="text-[18px] font-bold text-cus-10">
                Customize your homepage
              </h3>
              <p className="text-[12px] text-cus-400">
                The tagline is short and appears on your publication's homepage.
                Max 100 characters.
              </p>
            </div>
            <div>
              <Link
                href=""
                className="text-[14px] font-medium hover:bg-cus-10 hover:text-white py-2 px-4 rounded-full text-cus-500 border border-cus-300"
              >
                Homepage
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between  md:items-center">
            <div className="flex flex-col gap-3">
              <h3 className="text-[18px] font-bold text-cus-10">
                Fonts & color
              </h3>
              <p className="text-[12px] text-cus-400">
                Pick colors and font, style the header and make your Publication
                unique.
              </p>
            </div>
            <div>
              <Link
                href=""
                className="text-[14px] font-medium hover:bg-cus-10 hover:text-white py-2 px-4 rounded-full text-cus-500 border border-cus-300"
              >
                Customize
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
