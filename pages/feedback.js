import React from "react";
import PostLayout from "@/components/PostLayout";
import Link from "next/link";
export default function feedback() {
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
            Feedback and comments
          </h1>
        </div>
      </div>
      <div className="mt-4 px-4 py-5 dark:bg-gray-800 bg-white border-b border-gray-200 dark:border-gray-900 shadow overflow-hidden sm:px-6 sm:rounded-md">
        <div className="mt-3 space-y-6">
          <p className="dark:text-gray-400 text-gray-500 text-base leading-7">
            Temp Mail service is not just a one-off designed project. We strive
            for perfection, which is known to be impossible, but to approach it,
            is quite real. Therefore, all your suggestions and comments will not
            remain just text - we will take everything into account and
            implement them.
          </p>
          <p className="dark:text-gray-400 text-gray-500 text-base leading-7">
            Do you like our anonymous e-mail service? You can suggest our
            service to other users in a reviews. If you can think of ways to
            assist us to achieve perfection, your comments will allow our joint
            efforts to make the service more convenient, user friendly, and meet
            the needs of other users requiring a temporary email address.
          </p>
          <p className="dark:text-gray-400 text-gray-500 text-base leading-7">
            Do not be indifferent - help us to become better, and we will
            provide you with the most secure anonymous box and the most
            comfortable user interface.
          </p>
        </div>
      </div>
    </>
  );
}

feedback.Layout = PostLayout;
