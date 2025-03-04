"use client";
import { CreditCard, Package, Settings, ShoppingCart, User, UserCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Approval from "@/components/vendor-list";
import DashboardHeader from "@/components/dashboardHeader";

export default function AdminDashboard() {
  return (
    <div className="flex-1 flex flex-col">
      <DashboardHeader />
      {/* Dashboard Content */}
      <main className="flex-1 p-6 overflow-auto bg-gray-50">
        <div className="grid gap-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Users"
              value="2,845"
              description="+145 this month"
              icon={<Users className="h-5 w-5 text-amber-500" />}
            />
            <StatsCard
              title="Pending Approvals"
              value="12"
              description="Vendor registrations"
              icon={<UserCheck className="h-5 w-5 text-amber-500" />}
            />
            <StatsCard
              title="Total Products"
              value="1,286"
              description="Across 48 vendors"
              icon={<Package className="h-5 w-5 text-amber-500" />}
            />
            <StatsCard
              title="Total Revenue"
              value="$24,582.25"
              description="+18% from last month"
              icon={<CreditCard className="h-5 w-5 text-amber-500" />}
            />
          </div>

          {/* Vendor Approval Requests */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Pending Vendor Approvals</CardTitle>
                <CardDescription>
                  Farmers waiting for account activation
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <Approval />
            </CardContent>
          </Card>

          {/* Charts and Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle>User Registration</CardTitle>
                <CardDescription>
                  New user registrations over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[240px] flex items-end gap-2">
                  {[40, 35, 50, 65, 40, 80, 75, 95, 60, 70, 75, 85].map(
                    (height, i) => (
                      <div
                        key={i}
                        className="flex-1 flex flex-col items-center gap-2"
                      >
                        <div
                          className="w-full bg-amber-500 rounded-t-sm"
                          style={{ height: `${height * 2}px` }}
                        ></div>
                        <span className="text-xs text-muted-foreground">{`${
                          i + 1
                        }`}</span>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>User Distribution</CardTitle>
                <CardDescription>By role</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <span>Customers</span>
                    </div>
                    <span className="font-medium">75%</span>
                  </div>
                  <Progress
                    value={75}
                    className="h-2 bg-amber-100"
                    indicatorClassName="bg-amber-500"
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span>Vendors</span>
                    </div>
                    <span className="font-medium">20%</span>
                  </div>
                  <Progress
                    value={20}
                    className="h-2 bg-green-100"
                    indicatorClassName="bg-green-500"
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span>Admins</span>
                    </div>
                    <span className="font-medium">5%</span>
                  </div>
                  <Progress
                    value={5}
                    className="h-2 bg-blue-100"
                    indicatorClassName="bg-blue-500"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent System Activity */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent System Activity</CardTitle>
                <CardDescription>Latest actions in the system</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    action: "User Registration",
                    user: "Emily Parker",
                    time: "10 minutes ago",
                    icon: <User className="h-4 w-4" />,
                  },
                  {
                    action: "Vendor Approved",
                    user: "Admin (You)",
                    time: "25 minutes ago",
                    icon: <UserCheck className="h-4 w-4" />,
                  },
                  {
                    action: "New Product Added",
                    user: "Green Farms",
                    time: "1 hour ago",
                    icon: <Package className="h-4 w-4" />,
                  },
                  {
                    action: "Order Completed",
                    user: "Fresh Harvest",
                    time: "2 hours ago",
                    icon: <ShoppingCart className="h-4 w-4" />,
                  },
                  {
                    action: "System Settings Updated",
                    user: "Admin (You)",
                    time: "3 hours ago",
                    icon: <Settings className="h-4 w-4" />,
                  },
                ].map((activity, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0"
                  >
                    <div className="bg-amber-100 p-2 rounded-full text-amber-800">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          {activity.user}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Performing Vendors */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Top Performing Vendors</CardTitle>
                <CardDescription>Based on monthly sales</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Products</TableHead>
                    <TableHead>Monthly Sales</TableHead>
                    <TableHead>Growth</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Green Valley Farms",
                      products: 45,
                      sales: "$4,582.25",
                      growth: "+12%",
                    },
                    {
                      name: "Fresh Harvest Co.",
                      products: 38,
                      sales: "$3,975.50",
                      growth: "+8%",
                    },
                    {
                      name: "Organic Delights",
                      products: 52,
                      sales: "$3,450.75",
                      growth: "+15%",
                    },
                    {
                      name: "Sunny Fields",
                      products: 29,
                      sales: "$2,890.30",
                      growth: "+5%",
                    },
                    {
                      name: "Nature's Basket",
                      products: 34,
                      sales: "$2,675.90",
                      growth: "+7%",
                    },
                  ].map((vendor, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">
                        {vendor.name}
                      </TableCell>
                      <TableCell>{vendor.products}</TableCell>
                      <TableCell>{vendor.sales}</TableCell>
                      <TableCell className="text-green-600">
                        {vendor.growth}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function StatsCard({ title, value, description, icon }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      </CardContent>
    </Card>
  );
}
