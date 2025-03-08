import DashboardHeader from "@/components/dashboardHeader";
import UserListComponent from "@/hooks/user-list-table";
import React from "react";

const UserListPage = () => {
  return (
    <div className="flex-1 flex flex-col">
      <DashboardHeader />
      <main className="flex-1 p-6 overflow-auto bg-gray-50">
        <UserListComponent />
      </main>
    </div>
  );
};

export default UserListPage;
