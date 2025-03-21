import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FaSchoolFlag, FaUser, FaUserShield } from "react-icons/fa6";
import { LuFileChartLine, LuLogOut } from "react-icons/lu";
import { TbDashboard } from "react-icons/tb";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
const LeftSidebar = ({ setUser }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const schoolId = searchParams.get("schoolid");
  const userId = searchParams.get("userid");
  const pathname = usePathname();
  const handleLogout = () => {
    router.push("/");
    setUser(null);
  };

  const SuperAdminLeft = [
    {
      Name: "Dashboard",
      icon: <TbDashboard />,
      route: "/Super-Admin/DashBoard",
    },
    {
      Name: "Manage Schools",
      icon: <FaSchoolFlag />,
      route: "/Super-Admin/Manage-Existing-Schools",
    },
    {
      Name: "Manage School Admin",
      icon: <FaUserShield />,
      route: "/Super-Admin/Manage-School-Admin",
    },
    {
      Name: "Manage User",
      icon: <FaUser />,
      route: "/Super-Admin/Manage-User",
    },
    {
      Name: "Monitor Subscription",
      icon: <LuFileChartLine />,
      route: "/Super-Admin/Monitor-Subscription",
    },
    {
      Name: "Compliance & Security",
      icon: <AiOutlineFileProtect />,
      route: "/Super-Admin/Compliance-Document-Upload",
    },
    {
      Name: "Communicate",
      icon: <IoChatboxEllipsesOutline />,
      route: "/Super-Admin/Algorithmx-Multischool-Chat",
    },
  ];

  return (
    <div className="h-full justify-between grid grid-rows-[100px_1fr_auto] pt-8">
      <div className="flex flex-col items-center gap-2  w-full">
        <div className="object-contain max-w-[50px] max-h-[50px]">
          <Image
            className="w-auto h-auto"
            src={"/logo.svg"}
            alt="logo"
            width={50}
            height={50}
          />
        </div>
        <div className="text-white ">
          <p className="font-bold">Foursquare</p>
          <p className="font-bold">Student Portal</p>
        </div>
        <hr className="w-full border-t border-[#80ADCB] mt-2" />
      </div>
      <div>
        <ul className="mt-8 text-white flex flex-col gap-0.5 ">
          {SuperAdminLeft.map((item, index) => (
            <li
              key={index}
              className={`${
                pathname.includes(item.route) ? "bg-[#0B71B5]" : ""
              } pt-2 pb-2 hover:bg-[#025A9A] `}
            >
              <Link
                href={`${item.route}?schoolid=${schoolId}&userid=${userId}`}
                className="flex flex-row items-center gap-2 sm:pl-2 md:pl-2 xl:pl-5 md:text-sm xl:text-base hover:scale-105"
              >
                <span>{item.icon}</span>
                <span className="">{item.Name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <hr className="w-full border-t border-[#80ADCB] md:mt-15 xl:mt-2" />
      </div>
      <div className="text-white flex flex-col sm:pl-2 xl:pl-5 md:pl-2 md:text-sm xl:text-base md:pb-2 xl:pb-0.5 hover:bg-[#025A9A] cursor-pointer">
        <div className="flex flex-row items-center gap-2 ">
          <span>
            <LuLogOut />
          </span>
          <span className="">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
