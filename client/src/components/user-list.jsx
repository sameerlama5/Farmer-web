"use client";
import UserApprovalTable from "@/hooks/vendor-list-table";
import axios from "axios";
import { useEffect, useState } from "react";

const Approval = () => {
  const [userList, setUserList] = useState([]);
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users`
      );
      const users = data.filter((user) => user.role === "Customer");
      setUserList(users);
      debugger;
      console.log("Fetched users:", users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  if (userList.length == 0) return "loading...";

  return <UserApprovalTable userList={userList} fetchUsers={fetchUsers} />;
};

export default Approval;
