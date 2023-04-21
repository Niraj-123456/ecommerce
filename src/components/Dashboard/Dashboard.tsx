import React from "react";

import DashboardMain from "./DashboardMain";
import TopSellingProducts from "./TopSelling/TopSellingProducts";
import MainLayout from "../layout/MainLayout/MainLayout";

const Dashboard = () => {
  return (
    <MainLayout>
      <DashboardMain />
      <TopSellingProducts />
    </MainLayout>
  );
};

export default Dashboard;
