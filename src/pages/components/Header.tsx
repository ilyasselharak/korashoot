import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      <div className=" md:w-[80%] mx-auto flex gap-x-5 items-center font-bold bg-gray-300 p-7 rounded-md">
        <Link href={"/"}>
          <Image
            src={"/korashot-logo.png"}
            width={200}
            height={250}
            alt="logo"
          />
        </Link>
        <Link href={"/liveToday"}> مباريات اليوم</Link>
        <Link href={"/liveScore"}>بث مباشر للمباريات</Link>
      </div>
      <div className="flex justify-center mt-14">
        <Image width={728} height={90} alt={"ads"} src={"/banner2.jpg"} />
      </div>
    </>
  );
}
