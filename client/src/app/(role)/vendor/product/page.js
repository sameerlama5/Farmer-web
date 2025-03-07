"use client";
import DashboardHeader from "@/components/dashboard-header";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/products`
        );
        console.log("Fetched Products:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex-1 flex flex-col">
      <DashboardHeader />
      <main className="flex-1 p-6 overflow-auto bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.length > 0 ? (
            products.map((product) => (
              <Card key={product._id}>
                {" "}
                {/* ✅ Fixed key prop */}
                <CardHeader>
                  <CardTitle>{product.name || "No Name"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={product.image || "/fallback-image.jpg"} // ✅ Fixed missing image issue
                    alt={product.name || "No Name"}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <p className="mt-2 text-gray-600">
                    {product.description || "No description available."}
                  </p>
                  <p className="mt-2 font-bold">Rs. {product.price || "N/A"}</p>{" "}
                  {/* ✅ Fixed missing price issue */}
                  <p className="text-sm text-gray-500">
                    Stock: {product.stock ?? "Unknown"}{" "}
                    {/* ✅ Handles null/undefined stock */}
                  </p>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500">No products found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Product;
