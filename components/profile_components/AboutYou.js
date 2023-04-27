import React from "react";
import Link from "next/link";
import Image from "next/image";
import user from "../../public/images/user.bmp";
import {
  FaEnvelope,
  FaTwitter,
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaLink,
} from "react-icons/fa";
export default function AboutYou() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="block bg-white p-6 rounded-md shadow">
          <div className="border-b border-gray-100 pb-4">
            <h1 className="text-lg font-bold text-gray-800">Basic Info</h1>
          </div>
          <div className="flex justify-between py-4">
            <div className="flex-grow">
              <h2 className="mb-3 text-md font-bold w-full ">Name</h2>
              <h3 className="text-md border-b border-gray-100 pb-4 mb-4 text-gray-700 w-full">
                Matthew
              </h3>

              <p className="text-sm text-gray-700">
                Your name appears on your
                <Link legacyBehavior href="">
                  <a className="underline mx-1">Profile</a>
                </Link>
                page, as your byline, and in your responses. Its is a required
                field.
              </p>
            </div>
            <div className="ml-4 flex-grow-0">
              <Link legacyBehavior href="">
                <a className="inline-block border py-1 px-5 border-gray-300 hover:border-gray-600 hover:bg-gray-600 hover:text-white text-gray-600 text-sm rounded-full">
                  Edit
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="block bg-white p-6 rounded-md shadow">
          <div className="flex justify-between pb-4">
            <div className="flex-grow">
              <h2 className="mb-3 text-md font-bold w-full ">Bio</h2>
              <h3 className="text-md border-b border-gray-100 pb-4 mb-4 text-gray-700 w-full">
                Hello Everyone!
              </h3>

              <p className="text-sm text-gray-700">
                Your bio appears on your
                <Link legacyBehavior href="">
                  <a className="underline mx-1">Profile</a>
                </Link>
                and next to your stories. Max 160 characters.
              </p>
            </div>
            <div className="ml-4 flex-grow-0">
              <Link legacyBehavior href="">
                <a className="inline-block border py-1 px-5 border-gray-300 hover:border-gray-600 hover:bg-gray-600 hover:text-white text-gray-600 text-sm rounded-full">
                  Edit
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="block bg-white p-6 rounded-md shadow">
          <div className="flex justify-between pb-4">
            <div className="flex-grow">
              <h2 className="mb-3 text-md font-bold w-full">Photo</h2>
              <p className="text-sm text-gray-700">
                Your photo appears on your
                <Link legacyBehavior href="">
                  <a className="underline mx-1">Profile</a>
                </Link>
                page and with your stories across Koows. Recommended size:
                Square, max 500 pixels per side. File type: JPG, PNG.
              </p>
            </div>
            <div className="flex-grow-0 ml-4">
              <div className=" w-24 h-24 overflow-hidden rounded-full">
                <Image src={user} alt="user" />
              </div>
            </div>
            <div className="ml-4 flex-grow-0">
              <Link legacyBehavior href="">
                <a className="inline-block border py-1 px-5 border-gray-300 hover:border-gray-600 hover:bg-gray-600 hover:text-white text-gray-600 text-sm rounded-full">
                  Edit
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="block bg-white p-6 rounded-md shadow">
          <div className="flex justify-between pb-4">
            <div className="flex-grow">
              <h2 className="mb-3 text-lg font-bold w-full">Social Profiles</h2>
              <div className="flex items-center">
                <div className="flex-grow-0">
                  <FaLink className="text-gray-400 w-8 text-lg" />
                </div>
                <div className="flex-grow">
                  <input
                    type="text"
                    placeholder="Website"
                    className="text-md border-b border-gray-100 p-4 text-gray-700 w-full focus:none focus-visible:none focus-within:none focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-grow-0">
                  <FaTwitter className="text-gray-400 w-8 text-lg" />
                </div>
                <div className="flex-grow-0">
                  <h3 className="text-gray-700 text-sm font-semibold ml-2">
                    twitter.com/
                  </h3>
                </div>
                <div className="flex-grow">
                  <input
                    type="text"
                    placeholder="username"
                    Photo
                    className="text-md border-b border-gray-100 p-4 text-gray-700 w-full focus:none focus-visible:none focus-within:none focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-grow-0">
                  <FaFacebook className="text-gray-400 w-8 text-lg" />
                </div>
                <div className="flex-grow-0">
                  <h3 className="text-gray-700 text-sm font-semibold ml-2">
                    facebook.com/
                  </h3>
                </div>
                <div className="flex-grow">
                  <input
                    type="text"
                    placeholder="pagename"
                    className="text-md border-b border-gray-100 p-4 text-gray-700 w-full focus:none focus-visible:none focus-within:none focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-grow-0">
                  <FaLinkedin className="text-gray-400 w-8 text-lg" />
                </div>
                <div className="flex-grow-0">
                  <h3 className="text-gray-700 text-sm font-semibold ml-2">
                    linkedin.com/
                  </h3>
                </div>
                <div className="flex-grow">
                  <input
                    type="text"
                    placeholder="pagename"
                    className="text-md border-b border-gray-100 p-4 text-gray-700 w-full focus:none focus-visible:none focus-within:none focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-grow-0">
                  <FaInstagramSquare className="text-gray-400 w-8 text-lg" />
                </div>
                <div className="flex-grow-0">
                  <h3 className="text-gray-700 text-sm font-semibold ml-2">
                    instagram.com/
                  </h3>
                </div>
                <div className="flex-grow">
                  <input
                    type="text"
                    placeholder="username"
                    className="text-md border-b border-gray-100 p-4 text-gray-700 w-full focus:none focus-visible:none focus-within:none focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex mt-4">
                <h4 className="text-sm text-gray-300 font-medium">
                  These links will be public.
                </h4>
              </div>
            </div>
            <div className="ml-4 flex-grow-0">
              <Link legacyBehavior href="">
                <a className="inline-block border py-1 px-5 border-gray-300 hover:border-gray-600 hover:bg-gray-600 hover:text-white text-gray-600 text-sm rounded-full">
                  Edit
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
