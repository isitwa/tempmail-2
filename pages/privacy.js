import React from "react";
import PostLayout from "@/components/PostLayout";
import Link from "next/link";
export default function privacy() {
  return (
    <>
      <div>
        <nav className="text-sm font-medium leading-5">
          <Link
            href="/"
            className="dark:hover:text-gray-400 flex items-center text-gray-500 hover:text-gray-700 text-sm font-medium leading-5 focus:outline-none transition nuxt-link-active"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="flex-shrink-0 -ml-1 mr-1 w-5 h-5 text-gray-400"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            Back
          </Link>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h1 className="dark:text-gray-300 text-gray-900 text-2xl font-bold leading-7 sm:truncate">
            Privacy Policy
          </h1>
        </div>
      </div>
      <div className="mt-4 px-4 py-5 dark:bg-gray-800 bg-white border-b border-gray-200 dark:border-gray-900 shadow overflow-hidden sm:px-6 sm:rounded-md">
        <div className="mt-3 space-y-6">
          <p className="dark:text-gray-400 text-gray-500 text-base">
            This is Privacy Policy for mail.tm. This document explains policies
            for the collection, use, and disclosure of personal information on
            mail.tm. This privacy policy deals with personally-identifiable
            information referred to as data below that may be collected by this
            site.
          </p>
          <h3 className="dark:text-gray-300 text-gray-900 text-md font-bold sm:truncate">
            COLLECTION OF DATA
          </h3>
          <p className="dark:text-gray-400 text-gray-500 text-base">
            Velit nostrud duis excepteur tempor do laborum duis quis deserunt
            non. Sint laborum irure quis cupidatat est laborum pariatur aliqua
            laborum aute laboris ullamco. In deserunt consequat deserunt esse.
            Aliquip fugiat reprehenderit nisi ut deserunt ad non laborum
            adipisicing sit officia pariatur consectetur labore. Do deserunt
            fugiat est Lorem.
          </p>
          <h3 className="dark:text-gray-300 text-gray-900 text-md font-bold sm:truncate">
            USE OF DATA
          </h3>
          <p className="dark:text-gray-400 text-gray-500 text-base">
            Sint aliquip officia non nisi quis. Sunt excepteur cillum aliquip
            magna esse ipsum esse voluptate anim. Do velit sint ex anim officia
            occaecat aute enim non nulla. Nulla consequat aliqua ex sit laboris
            est.
          </p>
          <h3 className="dark:text-gray-300 text-gray-900 text-md font-bold leading-7 sm:truncate">
            COOKIES
          </h3>
          <p className="dark:text-gray-400 text-gray-500 text-base">
            Est qui velit pariatur fugiat adipisicing. Amet consectetur esse
            nulla Lorem ipsum consectetur minim. Elit veniam ullamco ipsum non
            velit amet est labore voluptate. In sint cillum ex est Lorem aliqua
            aliqua ex non.
          </p>
          <h3 className="dark:text-gray-300 text-gray-900 text-md font-bold leading-7 sm:truncate">
            COOKIES
          </h3>
          <p className="dark:text-gray-400 text-gray-500 text-base">
            Est qui velit pariatur fugiat adipisicing. Amet consectetur esse
            nulla Lorem ipsum consectetur minim. Elit veniam ullamco ipsum non
            velit amet est labore voluptate. In sint cillum ex est Lorem aliqua
            aliqua ex non.
          </p>
          <h3 className="dark:text-gray-300 text-gray-900 text-md font-bold leading-7 sm:truncate">
            COOKIES
          </h3>
          <p className="dark:text-gray-400 text-gray-500 text-base">
            Est qui velit pariatur fugiat adipisicing. Amet consectetur esse
            nulla Lorem ipsum consectetur minim. Elit veniam ullamco ipsum non
            velit amet est labore voluptate. In sint cillum ex est Lorem aliqua
            aliqua ex non.
          </p>
        </div>
      </div>
    </>
  );
}

privacy.Layout = PostLayout;
