import logo from "../assets/Youtube_2.png";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import Avatar from "react-avatar";
import { IoMdMic } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSearchSuggestion, toggleSlidebar } from "../utils/appSlice";
import axios from "axios";
import { SEARCH_API } from "../constant/youtube";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [input, setInput] = useState("")
  const dispatch = useDispatch();
  const { searchSuggestion } = useSelector((store) => store.app);


  const searchVideo = () => {
    dispatch(setCategory(input))
    setInput("");
  }

  const Togglehandler = () => {
    dispatch(toggleSlidebar());
  };

  const showSuggestion = async () => {
    try {
      const res = await axios.get(SEARCH_API + input);
      dispatch(setSearchSuggestion(res?.data[1]))

    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    const timer = setTimeout(() => {
      showSuggestion();
    }, 200)

    return () => {
      clearTimeout(timer)
    }
  }, [input])

  const handleSuggestionClick = (suggestion) => {
    dispatch(setCategory(suggestion));
    setInput("");
  };

  return (
    <div className=" flex justify-between px-5 py-1 fixed top-0 z-10 bg-white font-roboto lg:w-[100%] md:w-[60%]">
      <div className="flex items-center gap-5 w-[15%]">
        <div className="p-2 h-10 rounded-[100%] flex items-center justify-center cursor-pointer hover:bg-[#D9D9D9]">
          <RxHamburgerMenu
            onClick={Togglehandler}
            size="24px"
            className=" cursor-pointer"
          />
        </div>

        {/* <img
          src={logo}
          alt="logo"
          height="20px"
          width="30px"
          className=" aspect-[4/3] object-cover cursor-pointer"
        />
        <h1 className=" ml-[-18px] font-bold text-xl cursor-pointer">
          YouTube
        </h1>
        <p className=" mb-4 text-[10px] ml-[-15px] cursor-pointer">IN</p> */}

        <Link to="/"> {/* Add this Link */}
          <div className=" flex items-center gap-5">
            <img
              src={logo}
              alt="logo"
              height="20px"
              width="30px"
              className=" aspect-[4/3] object-cover cursor-pointer"
            />
            <h1 className=" ml-[-18px] font-bold text-xl cursor-pointer">
              YouTube
            </h1>
            <p className=" mb-4 text-[10px] ml-[-15px] cursor-pointer">IN</p>
          </div>
        </Link>
      </div>

      <div className="flex w-[45%] items-center">
        <div className="py-2 px-4 border border-gray-400 rounded-full p-2 rounded-r-none text-black lg:w-[100%] md:w-[60%]">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Search"
            className="w-full outline-none"
          />
        </div>
        <div onClick={searchVideo} className="border border-gray-400 rounded-full py-3 px-4 rounded-l-none w-[13%] bg-[#F0F0F0] flex items-center justify-center">
          <button>
            <IoSearchOutline />
          </button>
        </div>
        <div className="p-2 mx-5 h-10 bg-[#F0F0F0] rounded-[100%] flex items-center justify-center cursor-pointer hover:bg-[#D9D9D9]">
          <IoMdMic size={22} />
        </div>
        {/* **********show suggestion */}
        <div className=" absolute z-50 bg-white shadow-lg mt-12 w-fit top-1 border-t-white border-gray-400 rounded-lg">
          <ul>
            {searchSuggestion.map((text, idx) => (
              <div key={idx} className="flex items-center px-4  hover:bg-gray-200" onClick={() => handleSuggestionClick(text)}>
                <div><IoSearchOutline /></div>
                <li className="px-2 py-1 cursor-pointer text-md font-roboto">{text}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="p-2 h-10 rounded-[100%] flex items-center justify-center cursor-pointer hover:bg-[#D9D9D9]">
          <RiVideoAddLine size="24px" />
        </div>

        <div className="p-2 h-10 rounded-[100%] flex items-center justify-center cursor-pointer hover:bg-[#D9D9D9]">
          <IoMdNotificationsOutline size="24px" />
        </div>

        <Avatar
          src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=338&ext=jpg&ga=GA1.1.1687694167.1711843200&semt=ais"
          size={50}
          round={true}
          className=" cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
