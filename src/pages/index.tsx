import Link from "next/link";
import Header from "./components/Header";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState(false);
  console.log(menu);
  return (
    <>
      <main className=" bg-gray-300 p-4 mt-14">
        <div className="md:w-[80%] mx-auto flex justify-between">
          <div className="w-full px-5">
            <button onClick={() => setMenu(!menu)}>click here</button>
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
      <div className="flex justify-center mt-16">
        <Image src={"/banner2.jpg"} width={726} height={68} alt={"ads"} />
      </div>
    </>
  );
}
