"use client";
import { TbDashboard } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { LuNotepadText } from "react-icons/lu";
import { BiPieChartAlt2 } from "react-icons/bi";
import { RiBookShelfLine } from "react-icons/ri";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { LiaHeartbeatSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

  const StudentLeft = [
    {
      Name: "Dashboard",
      icon: <TbDashboard />, 
      route: "/Student/DashBoard",
    },
    {
      Name: "Fees Payment",
      icon: <IoWalletOutline />, 
      route: "/Student/Fees-Payment",
    },
    {
      Name: "Result",
      icon: <LuNotepadText />, 
      route: "/Student/Result",
    },
    {
      Name: "Attendance",
      icon: <BiPieChartAlt2 />, 
      route: "/Student/Attendance",
    },
    {
      Name: "Subject Registration",
      icon: <RiBookShelfLine />, 
      route: "/Student/Subject-Registration",
    },
    {
      Name: "Timetable",
      icon: <MdOutlineCalendarMonth />, 
      route: "/Student/Timetable",
    },
    {
      Name: "Health Record",
      icon: <LiaHeartbeatSolid />, 
      route: "/Student/Health-Record",
    },
    {
      Name: "Profile",
      icon: <FaRegUser />, 
    },
  ];

  return (
    <div className="h-screen flex flex-col items-center">
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-20">
        <div className="max-w-[60px]">
          <img src="/logo.svg" alt="logo" className="w-full object-cover" />
        </div>
        <div className="font-bold text-lg">
          <p>Foursquare</p>
          <p>Student Portal</p>
        </div>
      </div>

      {/* Navigation List */}
      <div className="w-full flex flex-col items-center">
        <ul className="list-none flex flex-col gap-6 w-full">
          {StudentLeft.map((item, index) => (
            <li
              key={index}
              className="flex gap-[15px] font-normal text-base cursor-pointer transition-colors duration-300 ease-in-out hover:text-[rgba(185,185,185,0.4)] p-4"
            >
              <Link
                href={`${item.route}?schoolid=${schoolId}&userid=${userId}`}
                className="flex gap-[15px] items-center"
              >
                <span
                  className={
                    pathname === item.route ? "text-[rgba(249,65,68,1)]" : ""
                  }
                >
                  {item.icon}
                </span>
                <span
                  className={
                    pathname === item.route ? "text-[rgba(249,65,68,1)]" : ""
                  }
                >
                  {item.Name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Logout Button */}
      <div className="flex items-center justify-center mt-10 w-full">
        <button
          onClick={handleLogout}
          className="text-white bg-[rgba(249,65,68,1)] rounded-[5px] p-4 font-bold text-base flex items-center justify-center gap-[10px] cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-80 min-w-[120px] min-h-[40px]"
        >
          <span>
            <TbLogout size={32} />
          </span>
          Logout
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
