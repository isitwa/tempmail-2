import React from "react";
import PostLayout from "@/components/PostLayout";
import userImg from "../public/images/user.png";
import imageEmail from "../public/images/confirm.jpg";
import Image from "next/image";
import Link from "next/link";

export default function openmail() {
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
          <h2 className="dark:text-gray-300 text-gray-900 text-2xl font-bold leading-7 sm:truncate">
            Activate ashu8765
          </h2>
        </div>
        <div className="flex flex-shrink-0 mt-4 overflow-y-auto md:ml-4 md:mt-0">
          <span className="rounded-md shadow-sm">
            <button
              type="button"
              className="focus:ring-blue dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-gray dark:focus:border-gray-700 inline-flex items-center px-4 py-2 dark:text-gray-300 hover:text-gray-500 text-gray-700 active:text-gray-800 text-sm font-medium leading-5 active:bg-gray-50 dark-active:bg-gray-700 dark:bg-gray-800 bg-white border focus:border-blue-300 border-gray-300 dark:border-transparent rounded-md focus:outline-none transition"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="-ml-1 mr-2 w-5 h-5 dark:text-gray-300 text-gray-500"
              >
                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Download
            </button>
          </span>
          <span className="ml-3 rounded-md shadow-sm">
            <Link
              href="source"
              className="focus:ring-blue dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-gray dark:focus:border-gray-700 inline-flex items-center px-4 py-2 dark:text-gray-300 hover:text-gray-500 text-gray-700 active:text-gray-800 text-sm font-medium leading-5 active:bg-gray-50 dark-active:bg-gray-700 dark:bg-gray-800 bg-white border focus:border-blue-300 border-gray-300 dark:border-transparent rounded-md focus:outline-none transition"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="-ml-1 mr-2 w-5 h-5 dark:text-gray-300 text-gray-500"
              >
                <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
              Source
            </Link>
          </span>
          <span className="ml-3 rounded-md shadow-sm">
            <button
              type="button"
              className="focus:ring-blue dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-gray dark:focus:border-gray-700 inline-flex items-center px-4 py-2 dark:text-gray-300 hover:text-gray-500 text-gray-700 active:text-gray-800 text-sm font-medium leading-5 active:bg-gray-50 dark-active:bg-gray-700 dark:bg-gray-800 bg-white border focus:border-blue-300 border-gray-300 dark:border-transparent rounded-md focus:outline-none transition"
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="-ml-1 mr-2 w-5 h-5 dark:text-gray-300 text-gray-500"
              >
                <path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
              </svg>
              Print
            </button>
          </span>
          <span className="ml-3 rounded-md shadow-sm">
            <button
              type="button"
              className="focus:ring-blue dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-gray dark:focus:border-gray-700 inline-flex items-center px-4 py-2 dark:text-gray-300 hover:text-gray-500 text-gray-700 active:text-gray-800 text-sm font-medium leading-5 active:bg-gray-50 dark-active:bg-gray-700 dark:bg-gray-800 bg-white border focus:border-blue-300 border-gray-300 dark:border-transparent rounded-md focus:outline-none transition"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="-ml-1 mr-2 w-5 h-5 dark:text-gray-300 text-gray-500"
              >
                <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
              Delete
            </button>
          </span>
        </div>
      </div>
      <div className="mt-4 px-4 py-5 bg-white border-b border-gray-200 dark:border-gray-900 shadow overflow-hidden sm:px-6 sm:rounded-md">
        <div className="flex flex-wrap items-center justify-between -ml-4 -mt-4 sm:flex-nowrap">
          <div className="ml-4 mt-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  src={userImg}
                  alt="Avatar"
                  className="rounded-full w-12 h-12"
                />
              </div>
              <div className="ml-4">
                <div className="text-blue-600 text-lg font-medium leading-6">
                  WordPress.com
                  <span className="text-gray-700 text-sm font-normal leading-5">
                    donotreply@wordpress.com
                  </span>
                </div>
                <div className="flex items-center mt-2 text-gray-500 text-sm leading-5">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="flex-shrink-0 mr-1.5 w-5 h-5 text-gray-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="truncate">
                    <Link href="" className="ml-1">
                      ashish2345@eurokool.com;
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-shrink-0 ml-4 mt-4">
            <time
              datetime="2023-02-04T14:43:51+00:00"
              className="text-gray-500 truncate"
            >
              less than a minute ago
            </time>
          </div>
        </div>
        <div className="px-4 py-5 sm:px-6 h-[70vh] overflow-y-auto">
          <div className="aspect-w-16 aspect-h-8 h-full">
            <Image src={imageEmail} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
}

openmail.Layout = PostLayout;
