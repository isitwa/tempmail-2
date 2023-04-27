import Link from "next/link";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { TbSend } from "react-icons/tb";
import { CgSoftwareDownload } from "react-icons/cg";

function Random() {
  return (
    <>
      <div
        className="block lg:h-screen "
        style={{ backgroundColor: "#f9f8f3" }}
      >
        <div className="w-full md:w-5/6 md:mx-auto  py-5 px-5">
          <h1 className="text-[28px] lg:text-[60px] text-gray-800 text-center font-semibold mb-2">
            Random Password Generator
          </h1>
          <p className="text-gray-800 text-[16px] text-center">
            Get a secure and random password. All passwords are securely
            generated on your device only
            <br className="hidden lg:block" /> and are{" "}
            <b> never sent across the internet.</b>
          </p>
          <div className="flex flex-col  justify-center lg:w-[700px] mx-auto mt-10">
            <div className="grid lg:flex gap-5 items-center w-full mb-3">
              <div className="grow">
                <div className="flex rounded-md overflow-hidden border border-teal-700 bg-teal-600/50 p-3 items-center">
                  <div className="grow">
                    <input
                      type="text"
                      value="d:+>(U>N=9F0H)@!p"
                      placeholder="Code Here"
                      className="w-full text-14px text-teal-700 focus-visible:outline-none bg-transparent"
                    />
                  </div>
                  <div className="shrink-0">
                    <button
                      type="button"
                      className=" focus-visible:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-green-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="shrink-0">
                <button
                  type="button"
                  className="bg-emerald-800 text-white font-semibold text-[20px] rounded-full py-3 px-16  focus-visible:outline-none w-full lg:w-auto"
                >
                  Regenerate
                </button>
              </div>
            </div>
            <div className="flex gap-2">
              <h4 className="text-green-700 text-[16px]">
                Strong! Could take 317,098 years to crack.
              </h4>
              <div className="relative group cursor-pointer ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  />
                </svg>
                <div
                  className="bg-gray-800 p-3 rounded-md w-[250px] text-center absolute bottom-6 z-50 group-hover:block hidden"
                  style={{ transform: "translateX(-50%)", left: "50%" }}
                >
                  <h6 className="text-[14px] text-white">
                    Estimate is based on a "brute force" attack generating
                    random guesses. Entering a non-random password (such as
                    P4s$w0rd987 or a long string of repeated characters) may
                    produce unreliable results. Always us truly random
                    passwords.
                  </h6>
                </div>
              </div>
            </div>
            <div className="grid gap-3 lg:flex items-stretch my-8">
              <div className="lg:w-1/2">
                <h4 className="text-[18px] text-gray-800 font-semibold">
                  Character types{" "}
                </h4>

                <fieldset className="grid grid-rows-3 grid-cols-2 gap-0 mt-4">
                  <div className="relative flex items-start ">
                    <div className="flex h-5 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-200 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-[16px]">
                      <label for="comments" className="text-gray-700">
                        A-Z (uppercase){" "}
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start ">
                    <div className="flex h-5 items-center">
                      <input
                        id="candidates"
                        aria-describedby="candidates-description"
                        name="candidates"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-200 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-[16px]">
                      <label for="candidates" className="text-gray-700">
                        0-9
                      </label>
                    </div>
                  </div>

                  <div className="relative flex items-start ">
                    <div className="flex h-5 items-center">
                      <input
                        id="offers"
                        aria-describedby="offers-description"
                        name="offers"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-200 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-[16px]">
                      <label for="offers" className="text-gray-700">
                        a-z (lowercase){" "}
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start ">
                    <div className="flex h-5 items-center">
                      <input
                        id="offers1"
                        aria-describedby="offers-description"
                        name="offers1"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-200 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-[16px]">
                      <label for="offers1" className="text-gray-700">
                        !@#$%^, etc.{" "}
                      </label>
                    </div>
                  </div>
                  <div className="relative flex items-start  col-span-2">
                    <div className="flex h-5 items-center">
                      <input
                        id="offers2"
                        aria-describedby="offers-description"
                        name="offers2"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-200  text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-[16px]">
                      <label for="offers2" className="text-gray-700">
                        Avoid ambiguous characters (e.g., uppercase I, number 1,
                        lowercase l){" "}
                      </label>
                    </div>
                  </div>
                </fieldset>
                <Link
                  href="/"
                  className="text-[16px] text-green-600  underline-offset-4 underline mt-4 inline-block"
                >
                  Reset to default settings
                </Link>
              </div>
              <div className="lg:w-1/2">
                <div className="flex flex-col gap-4">
                  <h4 className="text-[18px] text-gray-800 font-semibold">
                    Password length{" "}
                  </h4>
                  <div className="block">
                    <input
                      id="medium-range"
                      type="range"
                      value="50"
                      className="w-full h-2 bg-gray-200  rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                  </div>
                  <h4 className="text-[18px] text-gray-800 font-semibold">
                    Need more than one password?
                  </h4>
                  <Link
                    href="/"
                    className="block text-[18px] text-center font-semibold text-gray-800 border border-green-700 border-2 hover:border-lime-400 hover:bg-lime-400 rounded-full py-4 px-10"
                  >
                    Generate Multiple Passwords
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid gap-3 lg:flex items-stretch">
              <div className="lg:w-1/2">
                <h4 className="text-[18px] text-gray-800 font-semibold">
                  Share this tool
                </h4>
                <div className="flex gap-4 items-center mt-3">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-gray-800 text-[14px] font-semibold"
                  >
                    <TiSocialFacebook className="text-[24px]" />
                    Facebook
                  </Link>
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-gray-800 text-[14px] font-semibold"
                  >
                    <TbSend className="text-[19px]" />
                    Email
                  </Link>
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-gray-800 text-[14px] font-semibold"
                  >
                    <TiSocialTwitter className="text-[23px]" />
                    Twitter
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h4 className="text-[18px] text-gray-800 font-semibold flex gap-2 items-center">
                  Offline version{" "}
                  <div className="relative group cursor-pointer ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                      />
                    </svg>
                    <div
                      className="bg-gray-800 p-3 rounded-md w-[250px] text-center absolute bottom-6 z-50 group-hover:block hidden"
                      style={{ transform: "translateX(-50%)", left: "50%" }}
                    >
                      <h6 className="text-[14px] text-white">
                        Both the online and offline versions of these tools
                        operate on your device and will never send passwords
                        over the internet. To generate passwords on an offline
                        computer, click Securely Download This Page.
                      </h6>
                    </div>
                  </div>
                </h4>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-gray-800 text-[16px] font-semibold mt-3"
                >
                  <CgSoftwareDownload className="text-[23px]" />
                  Securely Download This Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Random;
