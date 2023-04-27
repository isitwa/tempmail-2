import React from "react";
import Link from "next/link";
import PostLayout from "@/components/PostLayout";
export default function source() {
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
      <div className="mt-2 md:flex md:items-center md:justify-between mb-4">
        <div className="flex-1 min-w-0">
          <h1 className="dark:text-gray-300 text-gray-900 text-2xl font-bold leading-7 sm:truncate">
            Source
          </h1>
        </div>
      </div>
      <div className="block p-4 bg-white rounded-md">
        <div className="flex flex-col gap-2">
          <p className="text-16 text-gray-500">
            Occaecat voluptate mollit consequat aliqua. Laboris dolor culpa elit
            consequat sit. Incididunt est laboris sunt non Lorem veniam dolore
            laboris cillum magna enim dolore proident qui. Proident in pariatur
            eiusmod enim. Nostrud ut dolor cupidatat qui pariatur cillum veniam.
            Ipsum tempor nisi ipsum adipisicing nisi ex do. Ea sit pariatur
            mollit aliqua eu commodo dolore.
          </p>
          <p className="text-16 text-gray-500">
            Veniam officia cillum ad veniam sit magna duis aliquip anim nostrud.
            Non cupidatat anim labore enim Lorem cillum consectetur magna
            proident duis nisi tempor irure. Tempor consequat dolor exercitation
            fugiat minim in. Laboris esse voluptate laborum mollit minim aliqua
            sit aliquip culpa dolore ullamco aute sit. Exercitation tempor
            veniam velit eiusmod in labore quis ut consequat veniam incididunt
            minim proident non. Aute consectetur ea enim id enim ipsum laboris
            dolore pariatur non fugiat.
          </p>
          <p className="text-16 text-gray-500">
            Laboris labore ad occaecat qui. Labore consequat do deserunt fugiat
            est Lorem aliquip culpa officia ea et quis dolor consequat.
            Voluptate laboris do dolore nulla.
          </p>
          <p className="text-16 text-gray-500">
            Occaecat voluptate mollit consequat aliqua. Laboris dolor culpa elit
            consequat sit. Incididunt est laboris sunt non Lorem veniam dolore
            laboris cillum magna enim dolore proident qui. Proident in pariatur
            eiusmod enim. Nostrud ut dolor cupidatat qui pariatur cillum veniam.
            Ipsum tempor nisi ipsum adipisicing nisi ex do. Ea sit pariatur
            mollit aliqua eu commodo dolore.
          </p>
          <p className="text-16 text-gray-500">
            Veniam officia cillum ad veniam sit magna duis aliquip anim nostrud.
            Non cupidatat anim labore enim Lorem cillum consectetur magna
            proident duis nisi tempor irure. Tempor consequat dolor exercitation
            fugiat minim in. Laboris esse voluptate laborum mollit minim aliqua
            sit aliquip culpa dolore ullamco aute sit. Exercitation tempor
            veniam velit eiusmod in labore quis ut consequat veniam incididunt
            minim proident non. Aute consectetur ea enim id enim ipsum laboris
            dolore pariatur non fugiat.
          </p>
          <p className="text-16 text-gray-500">
            Laboris labore ad occaecat qui. Labore consequat do deserunt fugiat
            est Lorem aliquip culpa officia ea et quis dolor consequat.
            Voluptate laboris do dolore nulla.
          </p>
          <p className="text-16 text-gray-500">
            Occaecat voluptate mollit consequat aliqua. Laboris dolor culpa elit
            consequat sit. Incididunt est laboris sunt non Lorem veniam dolore
            laboris cillum magna enim dolore proident qui. Proident in pariatur
            eiusmod enim. Nostrud ut dolor cupidatat qui pariatur cillum veniam.
            Ipsum tempor nisi ipsum adipisicing nisi ex do. Ea sit pariatur
            mollit aliqua eu commodo dolore.
          </p>
          <p className="text-16 text-gray-500">
            Veniam officia cillum ad veniam sit magna duis aliquip anim nostrud.
            Non cupidatat anim labore enim Lorem cillum consectetur magna
            proident duis nisi tempor irure. Tempor consequat dolor exercitation
            fugiat minim in. Laboris esse voluptate laborum mollit minim aliqua
            sit aliquip culpa dolore ullamco aute sit. Exercitation tempor
            veniam velit eiusmod in labore quis ut consequat veniam incididunt
            minim proident non. Aute consectetur ea enim id enim ipsum laboris
            dolore pariatur non fugiat.
          </p>
          <p className="text-16 text-gray-500">
            Laboris labore ad occaecat qui. Labore consequat do deserunt fugiat
            est Lorem aliquip culpa officia ea et quis dolor consequat.
            Voluptate laboris do dolore nulla.
          </p>
        </div>
      </div>
    </>
  );
}
source.Layout = PostLayout;
