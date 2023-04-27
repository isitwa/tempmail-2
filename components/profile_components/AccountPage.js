import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { XIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function AccountPage() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="block bg-white p-6 rounded-md shadow">
          <div className="border-b border-gray-200 pb-4">
            <h1 className="text-lg font-bold text-gray-800">Email settings</h1>
          </div>
          <div className="flex justify-between pt-4">
            <div className="flex-grow ">
              <h2 className="mb-3 text-md font-bold w-full ">Your email</h2>
              <h3 className="text-md text-gray-700 w-full">
                Matthew.co@gmail.com
              </h3>
            </div>
            <div className="ml-4 shrink-0">
              <Link legacyBehavior href="">
                <a className="inline-block border py-1 px-5 border-gray-300 hover:border-gray-600 hover:bg-gray-600 hover:text-white text-gray-600 text-sm rounded-full">
                  Edit
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="block bg-white p-6 rounded-md shadow">
          <div className="border-b border-gray-200 pb-4">
            <h1 className="text-lg font-bold text-gray-800">
              Email from Koows
            </h1>
          </div>
          <div className="flex justify-between py-4">
            <div className="flex-grow">
              <h2 className="mb-3 text-md font-bold w-full ">Koows Digest</h2>
              <p className="text-sm text-gray-700">
                The best stories on Koows personalized based on your interests,
                as well as outstanding stories selected by our editors
              </p>
            </div>
            <div className="ml-4 shrink-0">
              <div className="rounded-full border border-gray-300 overflow-hidden flex">
                <Link legacyBehavior href="">
                  <a className="inline-block py-1 px-5 bg-gray-10 text-gray-600 focus:bg-gray-800 focus:text-white hover:bg-gray-800 hover:text-white  text-sm">
                    Daily
                  </a>
                </Link>
                <Link legacyBehavior href="">
                  <a className="inline-block py-1 px-5 bg-gray-10 text-gray-600 focus:bg-gray-800 focus:text-white hover:bg-gray-800 hover:text-white text-sm">
                    Weekly
                  </a>
                </Link>
                <Link legacyBehavior href="">
                  <a className="inline-block py-1 px-5 bg-gray-10 text-gray-600 focus:bg-gray-800 focus:text-white hover:bg-gray-800 hover:text-white  text-sm">
                    Off
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-between py-4">
            <div className="flex-grow">
              <h2 className="mb-3 text-md font-bold w-full ">
                Recommended reading
              </h2>
              <p className="text-sm text-gray-700">
                Featured stories, columns, and collections that we think you’ll
                enjoy based on your reading history
              </p>
            </div>
            <div className="ml-4 shrink-0">
              <div className="rounded-full border border-gray-300 overflow-hidden flex">
                <Link legacyBehavior href="">
                  <a className="inline-block py-1 px-5 bg-gray-10 text-gray-600 focus:bg-gray-800 focus:text-white hover:bg-gray-800 hover:text-white  text-sm">
                    Daily
                  </a>
                </Link>
                <Link legacyBehavior href="">
                  <a className="inline-block py-1 px-5 bg-gray-10 text-gray-600  focus:bg-gray-800 focus:text-white hover:bg-gray-800 hover:text-white  text-sm">
                    Weekly
                  </a>
                </Link>
                <Link legacyBehavior href="">
                  <a className="inline-block py-1 px-5 bg-gray-10 text-gray-600 focus:bg-gray-800 focus:text-white hover:bg-gray-800 hover:text-white  text-sm">
                    Off
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="block bg-white p-6 rounded-md shadow">
          <div className="border-b border-gray-200 pb-4">
            <h1 className="text-lg font-bold text-gray-800">Account</h1>
          </div>
          <div className="flex justify-between py-4 border-b border-gray-200">
            <div className="flex-grow">
              <h2 className="mb-3 text-md font-bold w-full ">
                Manage muted publication and authors
              </h2>
              <p className="text-sm text-gray-700">
                See a list of all the publication and authors you've muted.
              </p>
            </div>
            <div className="ml-4 shrink-0">
              <div className="rounded-full border border-gray-300 overflow-hidden flex">
                <Link legacyBehavior href="/muting">
                  <a className="inline-block py-1 px-5 bg-gray-10 text-gray-600 text-sm">
                    Manage muted
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-between py-4">
            <div className="flex-grow">
              <h2 className="mb-3 text-md font-bold w-full ">
                Download your information
              </h2>
              <p className="text-sm text-gray-700">
                Download a copy of the information you've shared on Medium to a
                .zip file
              </p>
            </div>
            <div className="ml-4 shrink-0">
              <div className="rounded-full border border-gray-300 overflow-hidden flex">
                <Link legacyBehavior href="">
                  <a className="inline-block py-1 px-5 bg-gray-10 text-gray-600 text-sm">
                    Download .zip
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="block bg-white p-6 rounded-md shadow">
          <div className="border-b border-gray-200 pb-4">
            <h1 className="text-lg font-bold text-gray-800">Security</h1>
          </div>
          <div className="flex pt-4 pb-6 border-b border-gray-200">
            <div className="flex-grow">
              <h2 className="mb-3 text-md font-bold w-full ">
                Deactivate account
              </h2>
              <p className="text-sm text-gray-700">
                Deactivating your account will remove it from Medium within a
                few minutes. Deactivation will also immediately cancel any
                subscription for Medium Membership, and no money will be
                reimbursed. You can sign back in anytime to reactivate your
                account and restore its content.
                <br />
                <button
                  onClick={() => setOpen(!open)}
                  className="text-sm text-gray-400 underline mt-4 inline-block"
                >
                  Deactivate account
                </button>
              </p>
            </div>
          </div>
          <div className="flex pt-4 ">
            <div className="flex-grow">
              <h2 className="mb-3 text-md font-bold w-full ">Delete account</h2>
              <p className="text-sm text-gray-700">
                Permanently delete your account and all of your content.
                <br />
                <button
                  onClick={() => setOpen1(!open1)}
                  className="text-sm text-gray-400 underline mt-4 inline-block"
                >
                  Delete account
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  Deactivate account popup */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-100 inset-0 overflow-y-auto"
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-10 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-gray-10 bg-opacity-40 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle w-full md:w-8/12 sm:p-6">
                <button
                  type="button"
                  className="bg-gray-10 rounded-md text-gray-400 hover:text-gray-500  float-right focus:none focus:outline-none"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close panel</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="mx-auto w-full md:w-96 my-16">
                  <h4 className="text-center text-3xl text-gray-800 font-bold mb-3">
                    Confirm
                  </h4>
                  <p className="text-center text-sm text-gray-300 font-normal mb-3">
                    Are you sure you want to deactivate your account?
                  </p>
                  <div className="">
                    <form>
                      <div className="">
                        <div className="flex flex-row justify-center mt-10 space-x-2">
                          <button
                            type="button"
                            className="py-2 px-4 text-sm rounded-full text-gray-700 bg-gray-10 border border-gray-700 hover:border-gray-900"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="disabled:opacity-50 py-2 px-4 text-sm rounded-full bg-gray-800 hover:bg-gray-900 text-white"
                          >
                            Create
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {/*  Delete account popup */}
      <Transition.Root show={open1} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-100 inset-0 overflow-y-auto"
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-10 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-gray-10 bg-opacity-40 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle w-full md:w-8/12 sm:p-6">
                <button
                  type="button"
                  className="bg-gray-10 rounded-md text-gray-400 hover:text-gray-500  float-right focus:none focus:outline-none"
                  onClick={() => setOpen1(false)}
                >
                  <span className="sr-only">Close panel</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="mx-auto w-full md:w-96 my-16">
                  <h4 className="text-center text-3xl text-gray-800 font-bold mb-3">
                    Confirm
                  </h4>
                  <p className="text-center text-sm text-gray-300 font-normal mb-3">
                    Are you sure you want to deactivate your account?
                  </p>
                  <div className="">
                    <form>
                      <div className="">
                        <div className="flex flex-row justify-center mt-10 space-x-2">
                          <button
                            type="button"
                            className="py-2 px-4 text-sm rounded-full text-gray-700 bg-gray-10 border border-gray-700 hover:border-gray-900"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="disabled:opacity-50 py-2 px-4 text-sm rounded-full bg-gray-800 hover:bg-gray-900 text-white"
                          >
                            Create
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
