import Link from "next/link";
import React from "react";
import Image from "next/image";
import google from "../public/images/icons/search.png";

export default function signin() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-stretch">
        <div className="wfull md:w-[50%] h-screen px-[15px] bg-white">
          <div className="flex justify-center h-full">
            <div className="flex my-auto flex-col gap-4 w-full md:w-[80%] lg:w-[60%]">
              <h2 className="text-gray-900 font-bold text-[30px] md:text-[40px] leading-7">
                Welcome back
              </h2>
              <p className="text-gray-400 text-[16px] font-normal">
                Welcome back! Please enter your details.
              </p>
              <form action="">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor=""
                      className="text-gray-600 text-[18px] font-semibold"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="text-[14px] p-3 border border-gray-300 rounded-md w-full text-black"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor=""
                      className="text-gray-600 text-[18px] font-semibold"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="text-[14px] p-3 border border-gray-300 rounded-md w-full text-black"
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="">
                      <label className=" block text-[16px] font-medium text-gray-700">
                        <input
                          id="comments"
                          aria-describedby="comments-description"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
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
                  </div>
                  <button
                    type="submit"
                    className="text-[16px] text-center text-white font-semibold w-full rounded-md bg-blue-600 hover:bg-blue-700 py-[15px] px-[30px]"
                  >
                    Sign in
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
                        Dont's have an account?
                      </p>
                      <Link
                        href=""
                        className="text-gray-900 underline underline-offset-1 text-[14px] font-medium"
                      >
                        Sign up
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="wfull md:w-[50%] h-screen bg-img1 bg-cover  bg-center"></div>
      </div>
    </>
  );
}
