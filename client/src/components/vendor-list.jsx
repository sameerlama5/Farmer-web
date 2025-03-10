"use client";
import UserApprovalTable from "@/hooks/vendor-list-table";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Approval = () => {
  const [vendorList, setVendorList] = useState([]);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users`
      );
      const vendors = data.filter((user) => user.role === "Vendor");
      setVendorList(vendors);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (vendorList.length === 0) return <p>Loading...</p>;

  return <UserApprovalTable vendorList={vendorList} fetchUsers={fetchUsers} />;
};

export default Approval;
