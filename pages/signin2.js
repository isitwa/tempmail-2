import React from "react";
import Link from "next/link";
import Image from "next/image";
import google from "../public/images/icons/search.png";

export default function signin2() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-stretch">
        <div className="wfull md:w-[60%] lg:w-[40%] h-screen px-[15px] bg-white md:order-2">
          <div className="flex justify-center h-full">
            <div className="flex my-auto flex-col gap-4 w-full md:w-[80%] lg:w-[70%]">
              <h2 className="text-gray-900 font-bold text-[30px] md:text-[40px] leading-7">
                Create an account
              </h2>
              <p className="text-gray-400 text-[16px] font-normal">
                Let's get started with your 30 day free trial.
              </p>
              <form action="">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    {/* <label
                      htmlFor=""
                      className="text-gray-600 text-[18px] font-semibold"
                    >
                      Name
                    </label> */}
                    <input
                      type="text"
                      placeholder="Name"
                      className="text-[14px] p-3 border border-gray-300 rounded-md w-full text-black"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    {/* <label
                      htmlFor=""
                      className="text-gray-600 text-[18px] font-semibold"
                    >
                      Email
                    </label> */}
                    <input
                      type="text"
                      placeholder="Email"
                      className="text-[14px] p-3 border border-gray-300 rounded-md w-full text-black"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    {/* <label
                      htmlFor=""
                      className="text-gray-600 text-[18px] font-semibold"
                    >
                      Password
                    </label> */}
                    <input
                      type="password"
                      placeholder="Password"
                      className="text-[14px] p-3 border border-gray-300 rounded-md w-full text-black"
                    />
                  </div>
                  {/* <div className="flex justify-between">
                    <div className="">
                      <label className=" block text-[16px] font-medium text-gray-700">
                        <input
                          name="notification-method"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="ml-3">Remember for 30 days</span>
                      </label>
                    </div>

                    <Link
                      href=""
                      className="text-[16px] text-blue-500 font-semibold"
                    >
                      Forgot password
                    </Link>
                  </div> */}
                  <button
                    type="submit"
                    className="text-[16px] text-center text-white font-semibold w-full rounded-md bg-gray-900 hover:bg-gray-800 py-[15px] px-[30px]"
                  >
                    Create account
                  </button>
                  <button
                    type="button"
                    className=" border border-gray-300 bg-white hover:bg-slate-50 py-[13px] px-[30px] text-[16px] text-center text-gray-500 font-semibold w-full rounded-md text-center"
                  >
                    <div className="flex gap-3 justify-center items-center">
                      <div className="w-[26px] h-[26px] rounded-full">
                        <Image
                          src={google}
                          alt="image"
                          className=" object-cover aspect-square"
                        />
                      </div>
                      <h5>Sign in with Google</h5>
                    </div>
                  </button>
                  <div className="flex justify-center">
                    <div className="text-center flex gap-2">
                      <p className="text-[14px] text-gray-400">
                        Already have an account?
                      </p>
                      <Link
                        href=""
                        className="text-gray-900 underline underline-offset-1 text-[14px] font-medium"
                      >
                        Log in
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="wfull md:w-[70%] lg:w-[80%] h-screen bg-img2 bg-cover bg-center md:order-1"></div>
      </div>
    </>
  );
}
