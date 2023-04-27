import Link from "next/link";
import { HiOutlineMail, HiOutlineUsers } from "react-icons/hi";
import { AiOutlineHdd, AiOutlineAreaChart } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";

function InnerDomainNav() {
  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-col gap-1 w-full lg:w-[250px] sticky top-0   mb-5 lg:mb-0">
        <Link
          href="/"
          className="flex items-start gap-2 bg-gray-200 w-full p-2 rounded-md group hover:bg-gray-100"
        >
          <div className="shrink-0  hidden md:block">
            <HiOutlineMail className="text-black text-[20px]" />
          </div>
          <div className="flex justify-between items-center grow">
            <div className="flex flex-col">
              <h4 className="text-gray-700 text-[14px] group-hover:text-gray-900">
                Mail Accounts
              </h4>
              <h5 className="text-gray-500 text-[12px] group-hover:text-gray-900 hidden lg:block">
                1000 Mail Address
              </h5>
            </div>
            <div className="flex-shrink-0  hidden md:block">
              <MdArrowForwardIos className=" text-gray-700 group-hover:text-gray-900" />
            </div>
          </div>
        </Link>

        <Link
          href="/"
          className="flex items-start gap-2 w-full p-2 rounded-md group  hover:bg-gray-100"
        >
          <div className="shrink-0  hidden md:block">
            <HiOutlineUsers className="text-black text-[20px]" />
          </div>
          <div className="flex justify-between items-center grow">
            <div className="flex flex-col">
              <h4 className="text-gray-700 text-[14px]  group-hover:text-gray-900">
                Users
              </h4>
              <h5 className="text-gray-500 text-[12px]  group-hover:text-gray-900 hidden lg:block">
                0 active
              </h5>
            </div>
            <div className="flex-shrink-0  hidden md:block">
              <MdArrowForwardIos className=" text-gray-700  group-hover:text-gray-900" />
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="flex items-start gap-2 bg-gray-200 w-full p-2 rounded-md group hover:bg-gray-100"
        >
          <div className="shrink-0  hidden md:block">
            <AiOutlineHdd className="text-black text-[20px]" />
          </div>
          <div className="flex justify-between items-center grow">
            <div className="flex flex-col">
              <h4 className="text-gray-700 text-[14px] group-hover:text-gray-900">
                Sites
              </h4>
              <h5 className="text-gray-500 text-[12px] group-hover:text-gray-900 hidden lg:block">
                1000 Sites
              </h5>
            </div>
            <div className="flex-shrink-0  hidden md:block">
              <MdArrowForwardIos className=" text-gray-700 group-hover:text-gray-900" />
            </div>
          </div>
        </Link>
        <Link
          href="/"
          className="flex items-start gap-2 w-full p-2 rounded-md group hover:bg-gray-100"
        >
          <div className="shrink-0  hidden md:block">
            <AiOutlineAreaChart className="text-black text-[20px]" />
          </div>
          <div className="flex justify-between items-center grow">
            <div className="flex flex-col">
              <h4 className="text-gray-700 text-[14px] group-hover:text-gray-900">
                Stats
              </h4>
              <h5 className="text-gray-500 text-[12px] group-hover:text-gray-900 hidden lg:block">
                0 active
              </h5>
            </div>
            <div className="flex-shrink-0  hidden md:block">
              <MdArrowForwardIos className=" text-gray-700 group-hover:text-gray-900" />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default InnerDomainNav;
