"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, Phone, Lock, User, Users, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const phoneRegExp = /^[0-9]{10}$/;

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number must be 10 digits")
    .required("Phone number is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  role: Yup.string()
    .oneOf(["Customer", "Vendor"], "Invalid role")
    .required("Role is required"),
  fullName: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Full name is required"),
  addressName: Yup.string()
    .min(1, "Address name must be at least 1 characters")
    .required("Address name is required"),
});

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      phoneNumber: "",
      fullName: "",
      password: "",
      role: "",
      addressName: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/register`,
          values
        );
        alert(data.msg);
        resetForm();
      } catch (error) {
        if (error.response && error.response.data.msg) {
          alert(error.response.data.msg);
        } else {
          alert("An unexpected error occurred. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    },
  });
  const router = useRouter();

  return (
    <div className="max-w-2xl mx-auto backdrop-blur-sm rounded-2xl  p-8 border-[2px] border-green-400">
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Doe"
                className="bg-white border-[2px] border-green-400 text-gray-400 py-[20px] px-[30px] outline-none"
                {...formik.getFieldProps("fullName")}
              />
            </div>
            {formik.touched.fullName && formik.errors.fullName && (
              <p className="text-sm text-red-400">{formik.errors.fullName}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="bg-white border-[2px] border-green-400 text-gray-400 py-[20px] px-[30px] outline-none"
                {...formik.getFieldProps("email")}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="text-sm text-red-400">{formik.errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumbe">Phone Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                placeholder="1234567890"
                className="bg-white border-[2px] border-green-400 text-gray-400 py-[20px] px-[30px] outline-none"
                {...formik.getFieldProps("phoneNumber")}
              />
            </div>
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <p className="text-sm text-red-400">
                {formik.errors.phoneNumber}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="bg-white border-[2px] border-green-400 text-gray-400 py-[20px] px-[30px] outline-none"
                {...formik.getFieldProps("password")}
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-sm text-red-400">{formik.errors.password}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="addressName">Address</Label>
            <div className="relative">
              <Users className="absolute left-3 top-3 h-5 w-5 text-green-400" />
              <Input
                id="addressName"
                name="addressName"
                type="text"
                placeholder="Address"
                className="bg-white border-[2px] border-green-400 text-gray-400 py-[20px] px-[30px] outline-none"
                {...formik.getFieldProps("addressName")}
              />
            </div>
            {formik.touched.addressName && formik.errors.addressName && (
              <p className="text-sm text-red-400">
                {formik.errors.addressName}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Select
              name="role"
              onValueChange={(value) =>
                formik.setFieldValue("role", value, true)
              }
            >
              <SelectTrigger className="bg-white border-[2px] border-green-400 text-gray-400 py-[20px] px-[30px] outline-none">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent className="bg-green-400 text-white border-white/20">
                <SelectItem value="Customer">User</SelectItem>
                <SelectItem value="Vendor">Kishan</SelectItem>
              </SelectContent>
            </Select>
            {formik.touched.role && formik.errors.role && (
              <p className="text-sm text-red-400">{formik.errors.role}</p>
            )}
          </div>
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            className="w-full bg-green-400 text-white hover:bg-green-300 transition-all duration-200 py-[20px] px-[30px]"
          >
            {formik.isSubmitting ? "Creating Account..." : "Create Account"}
          </Button>
        </div>
      </form>
      <div className="mt-6 text-center">
        <p className="text-sm text-black">
          Already have an account?
          <button
            onClick={() => router.push("/login")}
            className="text-blue-500 hover:underline"
          >
            Click to Login
          </button>
        </p>
      </div>
    </div>
  );
}
