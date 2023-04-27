import React from "react";
import PostLayout from "@/components/PostLayout";
import Link from "next/link";
export default function contacts() {
  return (
    <>
      <div>
        <nav className="text-sm font-medium leading-5">
          <Link
            href="/en/"
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
            Contact us
          </h1>
        </div>
      </div>
      <div className="mt-4 px-4 py-5 dark:bg-gray-800 bg-white border-b border-gray-200 dark:border-gray-900 shadow overflow-hidden sm:px-6 sm:rounded-md">
        <div className="mt-3 space-y-6">
          <p className="dark:text-gray-400 text-gray-500 text-base leading-7">
            If the answers to common questions and a detailed description on the
            home page about the Temp Mail service do not assist you let us know.
            Only from your feedback can we provide solutions for other users. If
            required we will consult with you at any time of the day. We will
            help to efficiently manage services on offer, to solve problems you
            may experience in receiving emails in the unlikely event they occur.
          </p>
          <p className="dark:text-gray-400 text-gray-500 text-base leading-7">
            However, we are confident that such issues will not arise.&nbsp; Our
            Temp Mail Service provides quality service and&nbsp; care for all of
            its users. Interface online service is totally user-friendly and
            clearly understood.
          </p>
          <p className="dark:text-gray-400 text-gray-500 text-base leading-7">
            Anyone can use temporary mail including those who have not
            previously used disposable email services.
          </p>
          <p className="dark:text-gray-400 text-gray-500 text-base leading-7">
            Why choose Temp Mail?
          </p>
          <ul className="dark:text-gray-400 text-gray-500 text-base leading-7 list-inside list-disc space-y-2">
            <li>No fee and registration.</li>
            <li>A completely anonymous email address;</li>
            <li>There is the possibility of deleting account.</li>
          </ul>
          <p className="dark:text-gray-400 text-gray-500 text-base leading-7">
            Do you have any questions or suggestions ? Please contact us via
            email. We will be happy to help and will consider all proposals for
            improving the interface and the mail service.
          </p>
        </div>
        <div className="mt-9">
          <div className="space-y-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 dark:text-blue-400 text-blue-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div className="ml-3 dark:text-blue-400 text-blue-600 text-lg leading-6">
                <p>
                  <a href="mailto:support@mail.tm">support@mail.tm</a>
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 dark:text-blue-400 text-blue-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  ></path>
                </svg>
              </div>
              <div className="flex ml-3 dark:text-blue-400 text-blue-600 text-lg leading-6 space-x-2">
                <Link href="" target="_blank">
                  Discord
                </Link>
                <Link href="" target="_blank">
                  Telegram
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

contacts.Layout = PostLayout;
