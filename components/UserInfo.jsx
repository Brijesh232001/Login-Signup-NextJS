"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

import { Inter } from 'next/font/google'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function UserInfo() {
  
  
  const { data: session } = useSession();

  return (
    <>
      <div className="grid place-items-center h-screen">
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
        <div className="flex shadow-lg p-8 bg-white gap-4 items-center my-6 rounded-lg">
          <div>
            Name: <span className="font-bold">{session?.user?.name}</span>
          </div>
          <div>
            Email: <span className="font-bold">{session?.user?.email}</span>
          </div>
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white font-bold px-6 py-2 rounded"
          >
            Log Out
          </button>
        </div>
        
      </div>
    </>
  );
}
