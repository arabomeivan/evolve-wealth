import DashboardMain from "@/components/dashboardComponents/DashboardMain";
import DashboardSidebar from "@/components/dashboardComponents/DashboardSidebar";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex container">
      <DashboardSidebar />
      <DashboardMain />
    </div>
  );
};

export default Dashboard;
