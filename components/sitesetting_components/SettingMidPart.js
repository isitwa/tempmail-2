import React from "react";
import Link from "next/link";
import Image from "next/image";
import mailIcon from "../../public/images/icons/ui-avatars.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { HiOutlineChevronDown } from "react-icons/hi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SettingInfo from "./SettingInfo";
import SettingDesign from "./SettingDesign";
import SettingDomain from "./SettingDomain";
import SettingAdvanced from "./SettingAdvanced";
import SettingDetails from "./SettingDetails";
import SettingPage from "./SettingPage";
// import "react-tabs/style/react-tabs.css";

const people = [
  { id: 1, name: "Public" },
  { id: 2, name: "Private " },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SettingMidPart() {
  const [selected, setSelected] = useState(people[0]);
  return (
    <>
      <div className="block py-5 md:py-10 px-4 xl:px-16">
        <h3 className="text-cus-10 text-[20px] lg:text-[25px] font-bold mb-6">
          Site Setting
        </h3>
        <Tabs>
          <TabList className="flex border-b border-cus-20 search-page-list">
            <Tab className="py-2 mr-2  pr-4 text-[12px] md:text-[14px] text-cus-10 font-light border-b border-transparent focus:border-b cursor-pointer focus:border-cus-500 focus-within:outline-none">
              Info
            </Tab>
            <Tab className="py-2 mr-2  pr-4 text-[12px] md:text-[14px] text-cus-10 font-light border-b border-transparent focus:border-b cursor-pointer focus:border-cus-500 focus-within:outline-none">
              Pages
            </Tab>
            <Tab className="py-2 mr-2  pr-4 text-[12px] md:text-[14px] text-cus-10 font-light border-b border-transparent focus:border-b cursor-pointer focus:border-cus-500 focus-within:outline-none">
              Design
            </Tab>
            <Tab className="py-2 mr-2  pr-4 text-[12px] md:text-[14px] text-cus-10 font-light border-b border-transparent focus:border-b cursor-pointer focus:border-cus-500 focus-within:outline-none">
              Setting
            </Tab>
            <Tab className="py-2 mr-2  pr-4 text-[12px] md:text-[14px] text-cus-10 font-light border-b border-transparent focus:border-b cursor-pointer focus:border-cus-500 focus-within:outline-none">
              Domain
            </Tab>
            <Tab className="py-2 mr-2  pr-4 text-[12px] md:text-[14px] text-cus-10 font-light border-b border-transparent focus:border-b cursor-pointer focus:border-cus-500 focus-within:outline-none">
              Advanced
            </Tab>
          </TabList>

          <TabPanel>
            <div className="py-6">
              <SettingInfo />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="py-6">
              <SettingPage />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="py-6">
              <SettingDesign />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="py-6">
              <SettingDetails />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="py-6">
              <SettingDomain />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="py-6">
              <SettingAdvanced />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
