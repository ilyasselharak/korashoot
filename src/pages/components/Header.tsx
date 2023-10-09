"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
export default function Header() {
  const [menu, setMenu] = useState(0);
  const hello = useMemo(() => menu, [menu]);

  return (
    <>
      <div className=" md:w-[80%]  shadow-xl mx-auto  font-bold bg-gray-300 p-7 rounded-md">
        <div className="md:justify-start flex gap-x-5 items-center">
          <div
            onClick={() => setMenu((prev) => prev + 1)}
            className="text-3xl cursor-pointer"
          >
            <AiOutlineMenu /> {hello}
          </div>
          <Link href={"/"} className="mx-auto md:mx-0">
            <Image
              src={"/korashot-logo.png"}
              width={200}
              height={250}
              alt="logo"
            />
          </Link>
          <Link href={"/liveToday"} className=" hidden md:block">
            مباريات اليوم
          </Link>
        </div>
        <div className={`mt-14 ${menu ? "hidden" : "block"}`}>
          <Link href={"/liveToday"} className="md:hidden block bg-gray-300">
            مباريات اليوم
          </Link>
        </div>
      </div>

      <div className="flex  cursor-pointer justify-center mt-14">
        <Image width={728} height={90} alt={"ads"} src={"/banner2.jpg"} />
      </div>
    </>
  );
}
