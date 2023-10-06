import React from "react";
import Image from "next/image";

export default function LiveToday() {
  return (
    <main className=" bg-gray-300 p-4 mt-14">
      <div className="md:w-[80%] mx-auto flex justify-between">
        <div className="w-full px-5">
          <p className="font-bold text-xl ">
            بث مباشر لمبارات كرة القدم, النتائج و التركيبات
          </p>
          <div className="flex gap-x-5 mt-10 justify-center">
            <div className="flex hover:bg-white hover:text-black items-center flex-col bg-black w-fit px-10 py-1 text-sm rounded-md text-white">
              <span>الامس</span>
              <span>Oct 5</span>
            </div>
            <div className="flex flex-col bg-white  items-center  w-fit px-10 py-1 text-sm rounded-md ">
              <span>اليوم</span>
              <span>Oct 6</span>
            </div>
            <div className="flex flex-col hover:bg-white hover:text-black items-center bg-black w-fit px-10 py-1 text-sm rounded-md text-white">
              <span>الغد</span>
              <span>Oct 7</span>
            </div>
          </div>

          <div className="text-white ltr-grid  bg-black rounded-lg  mt-3">
            <div className=" flex gap-x-2 items-center py-2 px-10">
              <Image
                alt={"spain"}
                src={"https://media-4.api-sports.io/football/leagues/233.png"}
                width={40}
                height={40}
              />
              Spain League
            </div>
            <div className="bg-white flex items-center  text-black px-10 py-4">
              <div className="w-[10%]">22:00</div>
              <div className="flex w-full justify-center gap-x-2 items-center">
                <span>Al Ittihad</span>
                <Image
                  src={"https://media-4.api-sports.io/football/teams/1572.png"}
                  width={70}
                  height={70}
                  alt="Al Ittihad"
                />
                <span>0</span>
                <span>-</span>
                <span>0</span>
                <Image
                  src={"https://media-4.api-sports.io/football/teams/1574.png"}
                  width={70}
                  height={70}
                  alt="Al Ittihad"
                />
                <span>El Gouna FC</span>
              </div>
              <div className="bg-green-100 px-6 py-2 rounded-md">Live</div>
            </div>
          </div>
          <div className="text-white ltr-grid  bg-black rounded-lg  mt-3">
            <div className=" flex gap-x-2 items-center py-2 px-10">
              <Image
                alt={"spain"}
                src={"https://media-4.api-sports.io/football/leagues/233.png"}
                width={40}
                height={40}
              />
              Spain League
            </div>
            <div className="bg-white flex items-center  text-black px-10 py-4">
              <div className="w-[10%]">22:00</div>
              <div className="flex w-full justify-center gap-x-2 items-center">
                <span>Al Ittihad</span>
                <Image
                  src={"https://media-4.api-sports.io/football/teams/1572.png"}
                  width={70}
                  height={70}
                  alt="Al Ittihad"
                />
                <span>0</span>
                <span>-</span>
                <span>0</span>
                <Image
                  src={"https://media-4.api-sports.io/football/teams/1574.png"}
                  width={70}
                  height={70}
                  alt="Al Ittihad"
                />
                <span>El Gouna FC</span>
              </div>
              <div className="bg-green-100 px-6 py-2 rounded-md">Live</div>
            </div>
          </div>
          <div className="flex mt-3 justify-center">
            <Image src={"/banner1.jpg"} width={728} height={60} alt={"ads"} />
          </div>
          <div className="text-white ltr-grid  bg-black rounded-lg  mt-3">
            <div className=" flex gap-x-2 items-center py-2 px-10">
              <Image
                alt={"spain"}
                src={"https://media-4.api-sports.io/football/leagues/233.png"}
                width={40}
                height={40}
              />
              Spain League
            </div>
            <div className="bg-white flex items-center  text-black px-10 py-4">
              <div className="w-[10%]">22:00</div>
              <div className="flex w-full justify-center gap-x-2 items-center">
                <span>Al Ittihad</span>
                <Image
                  src={"https://media-4.api-sports.io/football/teams/1572.png"}
                  width={70}
                  height={70}
                  alt="Al Ittihad"
                />
                <span>0</span>
                <span>-</span>
                <span>0</span>
                <Image
                  src={"https://media-4.api-sports.io/football/teams/1574.png"}
                  width={70}
                  height={70}
                  alt="Al Ittihad"
                />
                <span>El Gouna FC</span>
              </div>
              <div className="bg-red-200 px-6 py-2 rounded-md">End</div>
            </div>
          </div>
        </div>
        <div>
          <Image src={"/banner3.jpg"} width={300} height={600} alt={"ads"} />
        </div>
      </div>
    </main>
  );
}
