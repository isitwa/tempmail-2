import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AboutYou from "./AboutYou";
import AccountPage from "./AccountPage";
import BillingSection from "./BillingSection";
import Security from "./Security";

export default function Profile_Tabs() {
  return (
    <>
      <div className="flex flex-col gap-4 p-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl text-gray-900 font-bold font-CalSans">
            Profile
          </h1>
          <p className="mt-2 text-sm text-neutral-500">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <Tabs className="search-page-list float-left w-full">
          <TabList className="flex border-b border-gray-100">
            <Tab className="text-gray-400 text-sm cursor-pointer py-2 px-3 mr-2">
              About you
            </Tab>
            <Tab className="text-gray-400 text-sm cursor-pointer py-2 px-3 mr-2">
              Security
            </Tab>
            <Tab className="text-gray-400 text-sm cursor-pointer py-2 px-3 mr-2">
              Account
            </Tab>
            <Tab className="text-gray-400 text-sm cursor-pointer py-2 px-3 mr-2">
              Billing
            </Tab>
          </TabList>
          <TabPanel>
            <div className="py-6">
              <AboutYou />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="py-6">
              <Security />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="py-6">
              <AccountPage />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="py-6">
              <BillingSection />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
