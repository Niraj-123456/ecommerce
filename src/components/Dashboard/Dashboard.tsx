import React from "react";

import DashboardMain from "./DashboardMain";
import TopSellingProducts from "./TopSelling/TopSellingProducts";
import MainLayout from "../layout/MainLayout/MainLayout";
import UniqueVisitors from "../UniqueVisitors/UniqueVisitors";

const Dashboard = () => {
  return (
    <MainLayout>
      <DashboardMain />
      <div className="w-[40%] p-10 ">
        <TopSellingProducts />
        <UniqueVisitors />
      </div>
    </MainLayout>
  );
};

export default Dashboard;
