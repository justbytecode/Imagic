import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-800 lg:flex-row">
               <Sidebar />
               <MobileNav />
      <div className=" mt-16 flex-1 overflow-auto py-8 lg:mt-0 lg:max-h-screen lg:py-10">
        <div className="max-w-5xl mx-auto px-5 md:px-10 w-full text-dark-400 p-16-regular">{children}</div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
