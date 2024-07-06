"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MdAlternateEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="relative grid place-items-center h-screen">
        <div className="absolute inset-0">
          <svg
            width="1440"
            height="1024"
            viewBox="0 0 1440 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M1153.27 -22.5066L1521.1 -94.3088L1397.66 261.616L1153.27 -22.5066Z"
              fill="#FDDD6F"
              fill-opacity="0.86"
            />
            <path
              d="M-118.735 905.493L249.097 833.691L125.662 1189.62L-118.735 905.493Z"
              fill="#F8DD7E"
            />
            <path
              d="M-154.735 186.493L213.097 114.691L89.662 470.616L-154.735 186.493Z"
              fill="#EFBC07"
            />
            <path
              d="M1284.72 637.491L1481.22 591.163L1436.67 770.415L1284.72 637.491Z"
              fill="#F7C104"
            />
            <path
              d="M814.265 1004.49L1182.1 932.691L1058.66 1288.62L814.265 1004.49Z"
              fill="#35B092"
            />
            <path
              d="M552.5 909.324L575.919 842.222L623.55 911.02L552.5 909.324Z"
              fill="#CBE90F"
            />
            <path
              d="M215.192 491.942L365.812 456.917L311.786 612.701L215.192 491.942Z"
              fill="#DBD42B"
              fill-opacity="0.51"
            />
            <path
              d="M1120.26 475.643L1213.3 456.839L1181.68 548.019L1120.26 475.643Z"
              fill="#DBD42B"
            />
          </svg>
        </div>
        <div className="relative shadow-lg p-5 rounded-lg border-t-4 border-blue-400 bg-[#27291E24]">
          <h1 className="text-xl font-bold my-4">Login</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          

          <div className="relative">
              <MdAlternateEmail  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
                className="pl-10 pr-3 py-2"
              />
            </div>
            <div className="relative">
            <MdLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="pl-10 pr-3 py-2"
            />
            </div>
            <button className="bg-blue-600 text-white font-bold cursor-pointer px-6 py-2 rounded-2xl">
              Login
            </button>
            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}

            <Link className="text-sm mt-3 text-right font-bold" href={"/register"}>
              Don't have an account? <span className="underline text-red-600 font-bold">Register</span>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
