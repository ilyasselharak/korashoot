import React from "react";
import Header from "./components/Header";
import Image from "next/image";
import Link from "next/link";

export default function LiveScore() {
  return (
    <main className=" bg-gray-300 p-4 mt-14">
      <div className="md:w-[80%] mx-auto flex justify-between">
        <div className="w-full px-5">
          <p className="font-bold text-xl ">
            بث مباشر لمبارات كرة القدم بين سبورت
          </p>

          <div className=" mt-10 flex gap-4 flex-wrap ">
            {Array.from({ length: 6 }).map((_, index) => (
              <Link key={index} href={`/beinSport/${index + 1}`}>
                <div className=" bg-violet-600 min-w-[400px] text-white text-center py-6 rounded-lg">
                  Bein Sport {index + 1}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Image src={"/banner3.jpg"} width={300} height={600} alt={"ads"} />
        </div>
      </div>
    </main>
  );
}
