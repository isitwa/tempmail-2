import React from "react";
import Image from "next/image";
import maiIcon from "../../public/images/user.png";
import Link from "next/link";
export default function OpenMail_InnerBox() {
  return (
    <>
      <div className="w-full lg:w-[1087px] mx-auto md:table bg-white shadow-md rounded-md border border-gray-100">
        <div className="flex justify-between align-middle border-b border-gray-100 p-4">
          <div className="shrink-0">
            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
              </svg>
              <Link href="#" className="flex gap-2 align-middle">
                <h4 className="text-gray-800 text-[16px] uppercase">Back</h4>
              </Link>
            </div>
          </div>

          <div className="shrink-0">
            <div className="flex align-middle gap-4">
              <Link href="#" className="flex gap-2 align-middle">
                <h4 className="text-gray-800 text-[16px] uppercase">Save</h4>
              </Link>
              <Link href="#" className="flex gap-2 align-middle">
                <h4 className="text-gray-800 text-[16px] uppercase">Delete</h4>
              </Link>
              <Link href="#" className="flex gap-2 align-middle">
                <h4 className="text-gray-800 text-[16px] uppercase">Info</h4>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-[30px]">
          <div className="flex justify-between py-[20px] px-5">
            <div className="shrink-0">
              <div className="flex gap-3 items-center">
                <Link
                  href=""
                  className=" w-[30px] h-[30px] overflow-hidden rounded-full  shrink-0
                  "
                >
                  <Image
                    src={maiIcon}
                    alt="imagemail"
                    className="w-full h-full object-cover"
                  />
                </Link>
                <div className="flex flex-col">
                  <h5 className="text-gray-900  text-[14px] font-semibold w-[100px] text-ellipsis truncate  overflow-hidden">
                    Unsplash Team
                  </h5>
                  <h6 className="text-gray-600 text-[12px] font-light">
                    delivery@unsplash.com
                  </h6>
                </div>
              </div>
            </div>
            <div className="shrink-0">
              <h3 className="text-gray-600 font-semibold text-[14px]">20:07</h3>
            </div>
          </div>
          <div className="flex flex-col h-[600px] overflow-y-auto">
            <div className="border-b border-t border-gray-200 py-[20px] mb-4">
              <h3 className="text-gray-600 font-light text-[14px]">
                <span className="font-semibold">Subject:</span> Confirm your
                Unsplash Account
              </h3>
            </div>
            <div className="flex flex-col gap-2 border-b border-gray-200 pb-8">
              <p className="text-gray-500 text-[14px]">Hey ashu543, </p>
              <p className="text-gray-500 text-[14px]">
                In order to get full access to Unsplash features, you need to
                confirm your email address by following the link below. commodo
                laborum id excepteur voluptate consequat reprehenderit ea.
                Proident irure sint incididunt ad labore pariatur mollit cillum.
                Anim quis mollit aliquip ea cupidatat irure et.
              </p>
              <p className="text-gray-500 text-[14px]">
                In order to get full access to Unsplash features, you need to
                confirm your email address by following the link below. commodo
                laborum id excepteur voluptate consequat reprehenderit ea.
                Proident irure sint incididunt ad labore pariatur mollit cillum.
                Anim quis mollit aliquip ea cupidatat irure et.
              </p>
              <p className="text-gray-500 text-[14px]">
                In order to get full access to Unsplash features, you need to
                confirm your email address by following the link below. commodo
                laborum id excepteur voluptate consequat reprehenderit ea.
                Proident irure sint incididunt ad labore pariatur mollit cillum.
                Anim quis mollit aliquip ea cupidatat irure et.
              </p>
              <p className="text-gray-500 text-[14px]">
                In order to get full access to Unsplash features, you need to
                confirm your email address by following the link below. commodo
                laborum id excepteur voluptate consequat reprehenderit ea.
                Proident irure sint incididunt ad labore pariatur mollit cillum.
                Anim quis mollit aliquip ea cupidatat irure et.
              </p>
              <p className="text-gray-500 text-[14px]">
                In order to get full access to Unsplash features, you need to
                confirm your email address by following the link below. commodo
                laborum id excepteur voluptate consequat reprehenderit ea.
                Proident irure sint incididunt ad labore pariatur mollit cillum.
                Anim quis mollit aliquip ea cupidatat irure et.
              </p>
              <p className="text-gray-500 text-[14px]">
                In order to get full access to Unsplash features, you need to
                confirm your email address by following the link below. commodo
                laborum id excepteur voluptate consequat reprehenderit ea.
                Proident irure sint incididunt ad labore pariatur mollit cillum.
                Anim quis mollit aliquip ea cupidatat irure et.
              </p>
              <p className="text-gray-500 text-[14px]">
                In order to get full access to Unsplash features, you need to
                confirm your email address by following the link below. commodo
                laborum id excepteur voluptate consequat reprehenderit ea.
                Proident irure sint incididunt ad labore pariatur mollit cillum.
                Anim quis mollit aliquip ea cupidatat irure et.
              </p>
              <p className="text-gray-500 text-[14px]">
                In order to get full access to Unsplash features, you need to
                confirm your email address by following the link below. commodo
                laborum id excepteur voluptate consequat reprehenderit ea.
                Proident irure sint incididunt ad labore pariatur mollit cillum.
                Anim quis mollit aliquip ea cupidatat irure et.
              </p>
              <p className="text-gray-500 text-[14px]">
                In order to get full access to Unsplash features, you need to
                confirm your email address by following the link below. commodo
                laborum id excepteur voluptate consequat reprehenderit ea.
                Proident irure sint incididunt ad labore pariatur mollit cillum.
                Anim quis mollit aliquip ea cupidatat irure et.
              </p>
              <p className="text-gray-500 text-[14px]">
                In order to get full access to Unsplash features, you need to
                confirm your email address by following the link below. commodo
                laborum id excepteur voluptate consequat reprehenderit ea.
                Proident irure sint incididunt ad labore pariatur mollit cillum.
                Anim quis mollit aliquip ea cupidatat irure et.
              </p>
              <p className="text-gray-500 text-[14px]">
                In order to get full access to Unsplash features, you need to
                confirm your email address by following the link below. commodo
                laborum id excepteur voluptate consequat reprehenderit ea.
                Proident irure sint incididunt ad labore pariatur mollit cillum.
                Anim quis mollit aliquip ea cupidatat irure et.
              </p>
              <p className="text-gray-500 text-[14px]">
                In order to get full access to Unsplash features, you need to
                confirm your email address by following the link below. commodo
                laborum id excepteur voluptate consequat reprehenderit ea.
                Proident irure sint incididunt ad labore pariatur mollit cillum.
                Anim quis mollit aliquip ea cupidatat irure et.
              </p>
              <Link href="#" className="text-[14px] text-blue-500">
                Click here to confirm your account
              </Link>
              <p className="text-gray-500 text-[14px]  italic">
                Note: If you did not sign up for this account, you can ignore
                this email and the account will be deleted within 60 days.{" "}
              </p>
              <p className="text-gray-500 text-[14px]">— Unsplash</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
