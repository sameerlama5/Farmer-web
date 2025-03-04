import Sidebar from "@/components/sidebar-app";
import {
  BarChart3,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Truck,
  User,
  LogOut,
} from "lucide-react";
import React from "react";

const sidebarItems = [
  {
    href: "/vendor/dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  { href: "/vendor/product", label: "Products", icon: <Package size={20} /> },
  { href: "/vendor/order", label: "Orders", icon: <ShoppingCart size={20} /> },
  { href: "/vendor/delivery", label: "Delivery", icon: <Truck size={20} /> },
  {
    href: "/vendor/analytics",
    label: "Analytics",
    icon: <BarChart3 size={20} />,
  },
  { href: "/vendor/profile", label: "Profile", icon: <User size={20} /> },
  {
    href: "/logout",
    label: "Logout",
    icon: <LogOut size={20} />,
    isLogout: true,
  },
];

const VendorLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar items={sidebarItems} />
      {children}
    </div>
  );
};

export default VendorLayout;
