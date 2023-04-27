import React from "react";
import Link from "next/link";
export default function App_Five_Footer() {
  return (
    <>
      <footer className="mt-auto block bg-gray-100 border-t border-gray-200 py-[20px]">
        <div className="flex justify-center gap-1 items-center flex-wrap px-[15px]">
          <p className="text-[12px] text-gray-700">&copy; Copyright.</p> |
          <Link href="#" className="text-[12px] text-pink-400">
            FakeMail.net
          </Link>
          |
          <Link href="#" className="text-[12px] text-gray-400">
            Privacy Policy
          </Link>
          <Link href="#" className="text-[12px] text-gray-400">
            Cookies & terms of services
          </Link>
        </div>
      </footer>
    </>
  );
}
