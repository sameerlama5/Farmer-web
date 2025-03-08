"use client";

import { CreditCard, Package, Plus, ShoppingCart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DashboardHeader from "@/components/dashboard-header";

export default function VendorDashboard() {
  return (
    <div className="flex-1 flex flex-col">
      <DashboardHeader />
      {/* Dashboard Content */}
      <main className="flex-1 p-6 overflow-auto bg-gray-50">
        <div className="grid gap-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Sales"
              value="$4,582.25"
              description="+12% from last month"
              icon={<CreditCard className="h-5 w-5 text-amber-500" />}
            />
            <StatsCard
              title="Active Orders"
              value="24"
              description="6 pending delivery"
              icon={<ShoppingCart className="h-5 w-5 text-amber-500" />}
            />
            <StatsCard
              title="Products"
              value="128"
              description="12 low in stock"
              icon={<Package className="h-5 w-5 text-amber-500" />}
            />
            <StatsCard
              title="Customers"
              value="1,205"
              description="+18 this week"
              icon={<Users className="h-5 w-5 text-amber-500" />}
            />
          </div>

          {/* Charts and Recent Orders */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle>Sales Overview</CardTitle>
                <CardDescription>Monthly sales performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[240px] flex items-end gap-2">
                  {[40, 30, 70, 80, 50, 90, 75, 85, 95, 60, 45, 65].map(
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
                <CardTitle>Product Categories</CardTitle>
                <CardDescription>Distribution by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <span>Vegetables</span>
                    </div>
                    <span className="font-medium">45%</span>
                  </div>
                  <Progress
                    value={45}
                    className="h-2 bg-amber-100"
                    indicatorClassName="bg-amber-500"
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span>Fruits</span>
                    </div>
                    <span className="font-medium">30%</span>
                  </div>
                  <Progress
                    value={30}
                    className="h-2 bg-green-100"
                    indicatorClassName="bg-green-500"
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span>Dairy</span>
                    </div>
                    <span className="font-medium">15%</span>
                  </div>
                  <Progress
                    value={15}
                    className="h-2 bg-blue-100"
                    indicatorClassName="bg-blue-500"
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span>Others</span>
                    </div>
                    <span className="font-medium">10%</span>
                  </div>
                  <Progress
                    value={10}
                    className="h-2 bg-purple-100"
                    indicatorClassName="bg-purple-500"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Orders */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>You have 24 active orders</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Products</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "ORD-7352",
                      customer: "John Doe",
                      products: "Tomatoes, Potatoes",
                      total: "$45.50",
                      status: "Processing",
                      date: "2023-06-12",
                    },
                    {
                      id: "ORD-7353",
                      customer: "Jane Smith",
                      products: "Apples, Oranges",
                      total: "$32.75",
                      status: "Shipped",
                      date: "2023-06-11",
                    },
                    {
                      id: "ORD-7354",
                      customer: "Robert Johnson",
                      products: "Carrots, Onions",
                      total: "$18.25",
                      status: "Delivered",
                      date: "2023-06-10",
                    },
                    {
                      id: "ORD-7355",
                      customer: "Emily Davis",
                      products: "Milk, Cheese",
                      total: "$27.90",
                      status: "Processing",
                      date: "2023-06-10",
                    },
                    {
                      id: "ORD-7356",
                      customer: "Michael Wilson",
                      products: "Lettuce, Cucumber",
                      total: "$15.40",
                      status: "Shipped",
                      date: "2023-06-09",
                    },
                  ].map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.products}</TableCell>
                      <TableCell>{order.total}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            order.status === "Processing"
                              ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                              : order.status === "Shipped"
                              ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                              : "bg-green-100 text-green-800 hover:bg-green-100"
                          }
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Low Stock Products */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Low Stock Products</CardTitle>
                <CardDescription>Products that need restocking</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Current Stock</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Organic Tomatoes",
                      category: "Vegetables",
                      price: "$4.99/kg",
                      stock: 5,
                    },
                    {
                      name: "Fresh Milk",
                      category: "Dairy",
                      price: "$3.50/L",
                      stock: 8,
                    },
                    {
                      name: "Red Apples",
                      category: "Fruits",
                      price: "$2.99/kg",
                      stock: 7,
                    },
                    {
                      name: "Honey",
                      category: "Others",
                      price: "$8.75/jar",
                      stock: 3,
                    },
                    {
                      name: "Carrots",
                      category: "Vegetables",
                      price: "$1.99/kg",
                      stock: 6,
                    },
                  ].map((product, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">
                        {product.name}
                      </TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span
                            className={
                              product.stock < 5
                                ? "text-red-500"
                                : "text-amber-500"
                            }
                          >
                            {product.stock} units
                          </span>
                          <Progress
                            value={product.stock * 10}
                            className="h-2 w-24 bg-gray-100"
                            indicatorClassName={
                              product.stock < 5 ? "bg-red-500" : "bg-amber-500"
                            }
                          />
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Restock
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
