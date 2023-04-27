import React from "react";
import PostLayout from "@/components/PostLayout";
import Link from "next/link";
export default function faq() {
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
            Frequently Asked Questions
          </h1>
        </div>
      </div>
      <div className="mt-4 px-4 py-5 dark:bg-gray-800 bg-white border-b border-gray-200 dark:border-gray-900 shadow overflow-hidden sm:px-6 sm:rounded-md">
        <div className="mt-6">
          <dl>
            <div className="md:grid md:gap-8 md:grid-cols-12">
              <dt className="dark:text-gray-300 text-gray-900 text-base font-medium leading-6 md:col-span-5">
                What is a temporary / disposable / anonymous mail?
              </dt>
              <dd className="mt-2 md:col-span-7 md:mt-0">
                <p className="dark:text-gray-400 text-gray-500 text-base leading-6">
                  Disposable e-mail is a temporary and completely anonymous
                  email address that does not require any registration.
                </p>
              </dd>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600 md:grid md:gap-8 md:grid-cols-12">
              <dt className="dark:text-gray-300 text-gray-900 text-base font-medium leading-6 md:col-span-5">
                Why do you need a temporary email address?
              </dt>
              <dd className="mt-2 md:col-span-7 md:mt-0">
                <p className="dark:text-gray-400 text-gray-500 text-base leading-6">
                  To register on dubious sites without jeopardising your
                  personal data. It is particularly useful for all situations in
                  which your privacy is important.
                </p>
              </dd>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600 md:grid md:gap-8 md:grid-cols-12">
              <dt className="dark:text-gray-300 text-gray-900 text-base font-medium leading-6 md:col-span-5">
                How is it different from usual mail?
              </dt>
              <dd className="mt-2 md:col-span-7 md:mt-0">
                <ul className="dark:text-gray-400 text-gray-500 text-base leading-6 list-inside list-disc">
                  <li>Does not require registration</li>
                  <li>
                    It is completely anonymous: personal data, address itself
                    and emails are deleted after you delete the account
                  </li>
                  <li>Messages are delivered instantly</li>
                  <li>
                    Email address is generated automatically. You do not have to
                    select the available username manually;
                  </li>
                  <li>
                    The mailbox is protected from spam, hacking, exploits.
                  </li>
                </ul>
              </dd>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600 md:grid md:gap-8 md:grid-cols-12">
              <dt className="dark:text-gray-300 text-gray-900 text-base font-medium leading-6 md:col-span-5">
                How do I send an email?
              </dt>
              <dd className="mt-2 md:col-span-7 md:mt-0">
                <p className="dark:text-gray-400 text-gray-500 text-base leading-6">
                  Unfortunately, we do not provide this feature.
                </p>
              </dd>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600 md:grid md:gap-8 md:grid-cols-12">
              <dt className="dark:text-gray-300 text-gray-900 text-base font-medium leading-6 md:col-span-5">
                How to extend the life time of temporary mail?
              </dt>
              <dd className="mt-2 md:col-span-7 md:mt-0">
                <p className="dark:text-gray-400 text-gray-500 text-base leading-6">
                  You dont need to extend anything, your email account is valid
                  until youll delete it manually.
                </p>
              </dd>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600 md:grid md:gap-8 md:grid-cols-12">
              <dt className="dark:text-gray-300 text-gray-900 text-base font-medium leading-6 md:col-span-5">
                How long do you store incoming messages?
              </dt>
              <dd className="mt-2 md:col-span-7 md:mt-0">
                <p className="dark:text-gray-400 text-gray-500 text-base leading-6">
                  We do store messages for only 7 days. Were sorry, we cant
                  store them indefinitely.
                </p>
              </dd>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600 md:grid md:gap-8 md:grid-cols-12">
              <dt className="dark:text-gray-300 text-gray-900 text-base font-medium leading-6 md:col-span-5">
                Can I check the received emails?
              </dt>
              <dd className="mt-2 md:col-span-7 md:mt-0">
                <p className="dark:text-gray-400 text-gray-500 text-base leading-6">
                  Yes, they are displayed under the name of your mailbox.
                </p>
              </dd>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600 md:grid md:gap-8 md:grid-cols-12">
              <dt className="dark:text-gray-300 text-gray-900 text-base font-medium leading-6 md:col-span-5">
                Do you keep and renew your domains used by this service?
              </dt>
              <dd className="mt-2 md:col-span-7 md:mt-0">
                <p className="dark:text-gray-400 text-gray-500 text-base leading-6">
                  Yes, we do always keep renewing our domains and they wont
                  disappear.
                </p>
              </dd>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600 md:grid md:gap-8 md:grid-cols-12">
              <dt className="dark:text-gray-300 text-gray-900 text-base font-medium leading-6 md:col-span-5">
                I forgot my password, is there a way you can reset it?
              </dt>
              <dd className="mt-2 md:col-span-7 md:mt-0">
                <p className="dark:text-gray-400 text-gray-500 text-base leading-6">
                  No, there is no way we could reset your password. Your
                  password is being generated in your browser, and its being
                  stored encrypted.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
faq.Layout = PostLayout;
