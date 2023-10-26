import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { NAVIGATION_ITEMS } from "../data";

export const LeftSidebar = () => {
  return (
    <div className="w-[23%] text-white fixed top-0 xl:flex flex-col h-[100vh]">
      <div className="flex flex-col w-full items-stretch gap-1 h-[85vh] space-y-4 mt-4">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            className="hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6"
            href={"/"}
            key={item.title}
          >
            <div>
              <item.icon />
            </div>
            {item.title !== "Twitter" && <div>{item.title}</div>}
          </Link>
        ))}
        <button className="rounded-full w-[200px] m-4 bg-[#00acee] p-3   text-2xl text-center hover:bg-opacity-70 transition duration-200">
          Tweet
        </button>
      </div>
      <button className="rounded-full flex items-center space-x-2 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-slate-400 w-10 h-10"></div>
          <div className="text-left text-sm">
            <div className="font-semibold">fskkkds</div>
            <div className="">@userData.user?.user</div>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </div>
  );
};
