"use client";

import Link from "next/link";

export default function DemoButton() {
  return (
    <div className="flex flex-row">
      <Link href="https://bit.ly/4cjMlNY" passHref>
        <div className="cursor-pointer text-black bg-white h-12 w-full sm:w-auto flex flex-row justify-center sm:justify-between items-center rounded-full px-8 py-8 transition hover:bg-gray-100">
          <p className="text-[16px] sm:text-[18px]">Download Demo</p>
        </div>
      </Link>
    </div>
  );
}
