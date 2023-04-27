import Link from "next/link";
import Image from "next/image";
import userimg from "../public/images/user.bmp";
import { useState } from "react";

import LeftSidebar from "../components/inbox_components/LeftSidebar";
import RightSidebarnew from "../components/inbox_components/RightSidebarnew";
import WriteEmail from "./../components/inbox_components/WriteEmail";
import EmailList from "../components/inbox_components/EmailList";
import FooterFixNav from "../components/common_elements/FooterFixNav";
import LeftSidebarDomain from "../components/domain_components/LeftSidebarDomain";

const user = {
  name: "Whitney Francis",
  email: "whitney.francis@example.com",
  imageUrl: "/public/images/user.bmp",
};
const navigation = [
  {
    name: "Inboxes",
    href: "#",
    children: [
      { name: "Technical Support", href: "#" },
      { name: "Sales", href: "#" },
      { name: "General", href: "#" },
    ],
  },
  { name: "Reporting", href: "#", children: [] },
  { name: "Settings", href: "#", children: [] },
];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function demopage() {
  return (
    <>
      <div className="flex h-full flex-col mb-40 lg:mb-0">
        {/* Top nav*/}

        {/* Bottom section */}
        <div className="flex min-h-0 flex-1 overflow-hidden">
          {/* Narrow sidebar*/}
          <LeftSidebarDomain />

          {/* Main area */}
          <main className="min-w-0 flex-1 border-t border-gray-200 xl:flex lg:ml-52 xl:ml-60 lg:mr-64 xl:mr-80 px-3 lg:px-0">
            <div className="flex flex-col">
              {/* Email List component */}
              <EmailList />
              {/* Write Email component */}
              <WriteEmail />
            </div>

            {/* Message list*/}
            {/* Right sidebar */}
            <aside className="hidden lg:block xl:flex-shrink-0 lg:w-64 xl:w-80 fixed right-0 top-0 bottom-0 ">
              <RightSidebarnew />
            </aside>
          </main>
        </div>
      </div>
      {/* Mobile Footer Nav */}
      <FooterFixNav />
    </>
  );
}

export default demopage;
