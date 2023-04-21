import React, { ReactNode } from "react";

import Navigations from "../../Navigations/Navigations";
import DashboardHeader from "@/components/Dashboard/DashboardHeader";

type ChildrenProps = {
  children: string | JSX.Element | JSX.Element[] | ReactNode;
};

const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <div className="flex p-5">
      <Navigations />
      <div className="w-full min-h-screen p-10 rounded-3xl bg-white text-[#42427D]">
        <DashboardHeader />
        <div className="flex">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
