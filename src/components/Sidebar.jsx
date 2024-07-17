import React from "react";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { LuHistory } from "react-icons/lu";
import { BsClockHistory } from "react-icons/bs";
import { GoDownload } from "react-icons/go";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiOutlineFire } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { SlMusicToneAlt } from "react-icons/sl";
import { BiCameraMovie } from "react-icons/bi";
import { HiMiniSignal } from "react-icons/hi2";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { FaShirtsinbulk } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdReportGmailerrorred } from "react-icons/md";
import { GrHelpBook } from "react-icons/gr";
import { MdOutlineFeedback } from "react-icons/md";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { Link } from "react-router-dom";

// ************************
const SidebarItems = [
  {
    icons: <GoHomeFill size="24px" />,
    title: "Home",
    link: "/", // Add the link to the Home page
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Shorts",
    link: "/"
  },
  {
    icons: <MdSubscriptions size="24px" />,
    title: "Subscription",
    link: "/"
  },
];

const SidebarYour = [
  {
    icons: <CgProfile size="20px" />,
    title: "Your Channel",
  },
  {
    icons: <LuHistory size="20px" />,
    title: "History",
  },
  {
    icons: <BsClockHistory size="20px" />,
    title: "Watch Later",
  },
  {
    icons: <GoDownload size="20px" />,
    title: "Downloads",
  },
  {
    icons: <RiArrowDownSLine size="20px" />,
    title: "Show More",
  },
];

const SidebarSetting = [
  {
    icons: <IoSettingsOutline size="20px" />,
    title: "Setting",
  },
  {
    icons: <MdReportGmailerrorred size="20px" />,
    title: "Report",
  },
  {
    icons: <GrHelpBook size="20px" />,
    title: "Help",
  },
  {
    icons: <MdOutlineFeedback size="20px" />,
    title: "Send Feedback",
  },
];

const SidebarExplore = [
  {
    icons: <HiOutlineFire size="20px" />,
    title: "Trending",
  },
  {
    icons: <HiOutlineShoppingBag size="20px" />,
    title: "Shopping",
  },
  {
    icons: <SlMusicToneAlt size="20px" />,
    title: "Music",
  },
  {
    icons: <BiCameraMovie size="20px" />,
    title: "Movie",
  },
  {
    icons: <HiMiniSignal size="20px" />,
    title: "Live",
  },
  {
    icons: <IoGameControllerOutline size="20px" />,
    title: "Gaming",
  },
  {
    icons: <HiOutlineNewspaper size="20px" />,
    title: "News",
  },
  {
    icons: <FaShirtsinbulk size="20px" />,
    title: "Fashion & Beauty",
  },
];


const Sidebar = () => {
  const open = useSelector((store) => store.app.open);
  return (
    <div className="fixed top-0 ml-0 bg-white mt-16 left-0 h-[calc(100vh-4.625rem)] overflow-hidden hover:overflow-y-scroll px-2">
      {SidebarItems.map((item, index) => {
        return (
          <Link to={item.link} key={index}>
            <div
              className={`flex px-5 items-center h-10 w-full cursor-pointer hover:bg-[#F0F0F0] rounded-lg ${open ? "" : " my-3"
                }`}
            >
              {item.icons}
              <p className={`ml-7 text-sm font-medium ${open ? " " : "hidden"}`}>
                {item.title}
              </p>
            </div>
          </Link>
        );
      })}
      <hr className={`w-45 mt-3 ${open ? " " : "hidden"}`}></hr>
      <p
        className={`flex gap-1 items-center ml-[18px] mt-5 ${open ? " " : "hidden"
          }`}
      >
        <span className="font-semibold">You</span>
        <MdOutlineKeyboardArrowRight
          size="20px"
          className="flex items-center"
        />
      </p>

      {SidebarYour.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex my-1 px-5 items-center h-10 w-full cursor-pointer hover:bg-[#F0F0F0] rounded-lg ${open ? " " : "hidden"
              }`}
          >
            {item.icons}
            <p className={`ml-7 text-sm ${open ? " " : "hidden"}`}>
              {item.title}
            </p>
          </div>
        );
      })}
      <hr className={`w-45 mt-3 ${open ? " " : "hidden"}`}></hr>

      {/* ***************** */}
      <p
        className={`flex gap-1 items-center ml-[18px] mt-5 ${open ? " " : "hidden"
          }`}
      >
        <span className="font-semibold">Expolre</span>
        <MdOutlineKeyboardArrowRight
          size="20px"
          className="flex items-center"
        />
      </p>
      {SidebarExplore.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex my-1 px-5 items-center h-10 w-full cursor-pointer hover:bg-[#F0F0F0] rounded-lg ${open ? " " : "hidden"
              }`}
          >
            {item.icons}
            <p className="ml-7 text-sm">{item.title}</p>
          </div>
        );
      })}
      <hr className={`w-45 mt-3 ${open ? " " : "hidden"}`}></hr>
      {/* ******************* */}

      {SidebarSetting.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex my-1 px-5 items-center h-10 w-full cursor-pointer hover:bg-[#F0F0F0] rounded-lg ${open ? " " : "hidden"
              }`}
          >
            {item.icons}
            <p className="ml-7 text-sm">{item.title}</p>
          </div>
        );
      })}
      <hr className={`w-45 mt-3 ${open ? " " : "hidden"}`}></hr>
      <div className={`${open ? " " : "hidden"}`}>
        <p className="text-[13px] text-[#8a7f7f] mb-[8px] pt-[10px] font-semibold flex ml-4">
          About Press Copyright <br />
          Contact us Creators <br />
          Advertise Developers
        </p>
        <p className="text-[13px] text-[#8a7f7f] mb-[8px] pt-[10px] pb-[24px] font-semibold ml-4">
          Terms Privacy <br />
          Policy & Safety <br />
          How YouTube works <br />
          Test new features
        </p>
        <p className="text-[12px] text-[#b2a6a6] ml-4 mt-[-20px]">
          © 2024 Google LLC
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
