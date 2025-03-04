"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Box, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Sidebar({ items }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname(); // Get current URL

  return (
    <div
      className={`${
        sidebarOpen ? "w-64" : "w-20"
      } bg-white border-r border-border transition-all duration-300 flex flex-col`}
    >
      {/* Sidebar Header */}
      <div className="p-4 border-b flex items-center justify-between">
        {sidebarOpen ? (
          <div className="flex items-center gap-2">
            <Box className="h-6 w-6 text-amber-500" />
            <span className="font-bold text-lg">Farmer Web</span>
          </div>
        ) : (
          <Box className="h-6 w-6 mx-auto text-amber-500" />
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="ml-auto"
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              !sidebarOpen ? "rotate-90" : ""
            }`}
          />
        </Button>
      </div>

      {/* Sidebar Links */}
      <div className="flex flex-col gap-1 p-2 flex-1">
        {items.map((item) => (
          <SidebarItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            label={item.label}
            active={pathname === item.href}
            sidebarOpen={sidebarOpen}
          />
        ))}
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, href, active, sidebarOpen }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
        active
          ? "bg-amber-100 text-amber-900"
          : "text-gray-600 hover:bg-gray-100"
      } ${!sidebarOpen && "justify-center"}`}
    >
      {icon}
      {sidebarOpen && <span>{label}</span>}
    </Link>
  );
}
