"use client";
import styles from "../../css/layout.module.css";
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
  const route = useRouter();
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
    <div className={styles.leftsidebar}>
      <div className={styles.Logo}>
        <div className={styles.logoimg}>
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className={styles.logoTxt}>
          <p>Foursquare</p>
          <p>Student Portal</p>
        </div>
      </div>
      <div className={styles.leftList}>
        <ul>
          {StudentLeft.map((item, index) => {
            return (
              <li key={index} className={styles.leftListItem}>
                <Link
                  href={`${item.route}?schoolid=${schoolId}&userid=${userId}`}
                >
                  <span
                    className={pathname === item.route ? styles.active : ""}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={pathname === item.route ? styles.active : ""}
                  >
                    {item.Name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.logout}>
          <button onClick={handleLogout}>
            <span>
              <TbLogout size={22} />
            </span>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
