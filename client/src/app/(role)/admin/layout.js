import Sidebar from "@/components/sidebar-app";
import {
  BarChart3,
  LayoutDashboard,
  LogOut,
  Package,
  ShoppingCart,
  UserCheck,
  Users,
} from "lucide-react";
import React from "react";
const sidebarItems = [
  {
    href: "/admin/dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  { href: "/admin/users", label: "Users", icon: <Users size={20} /> },
  {
    href: "/admin/adminApproval",
    label: "admin Approvals",
    icon: <UserCheck size={20} />,
  },
  {
    href: "/admin/product",
    label: "Products",
    icon: <Package size={20} />,
  },
  {
    href: "/admin/order",
    label: "Orders",
    icon: <ShoppingCart size={20} />,
  },
  {
    href: "/admin/anlytics",
    label: "Analytics",
    icon: <BarChart3 size={20} />,
  },
  {
    href: "/logout",
    label: "Logout",
    icon: <LogOut size={20} />,
    isLogout: true,
  },
];
const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar items={sidebarItems} />
      {children}
    </div>
  );
};

export default AdminLayout;
