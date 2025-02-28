"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/login`,
          values
        );
        if (data) {
          dispatch(loginUser(data));
          toast(String(data.msg));
        }
        if (data.isLoggednIn) {
          if (data?.user?.role == "vender") {
            router.push(`/dashboard`);
          } else {
            router.push("/");
          }
        }
      } catch (error) {
        const errorMsg = error?.response?.data?.msg || "An error occurred";
        toast.error(errorMsg);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="max-w-2xl mx-auto backdrop-blur-sm bg-white/10 rounded-2xl p-8 border-[2px] border-green-400">
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div className="flex flex-col gap-6 md:grid-cols-2">
          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email">
              Email
            </Label>
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

          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="password">
              Password
            </Label>
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
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            className="w-full bg-green-400 text-white hover:bg-green-300 transition-all duration-200 py-[10px] px-[30px]"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Signing In..." : "Login"}
          </Button>
        </div>
      </form>
      {/* Register Link */}
      <div className="mt-6 text-center">
        <p className="text-sm text-black">
          Don't have an account?{" "}
          <Button
            variant="link"
            className="text-blue-500 hover:text-underline p-0"
            onClick={() => router.push("/register")}
          >
            Create an account
          </Button>
        </p>
      </div>
    </div>
  );
}
