import React, { useState } from "react";
import "./ButtonList.css";
import { useDispatch } from 'react-redux';
import { setCategory } from "../utils/appSlice";

const buttonList = ["All", "JavaScript", "Gaming", "Live", "Music", "Songs", "Vlogs", "Trending",
  "Sports", "News", "Movies", "TV Series", "Web Series", "Laptop", "Comedy",
  "Horror", "Science", "Technology", "Art", "Fashion", "Cooking", "Travel"
];
const ButtonList = () => {

  const [active, setActive] = useState("All");
  const dispatch = useDispatch();

  const videoByTag = (tag) => {
    if (active != tag) {
      dispatch(setCategory(tag))
      setActive(tag);
    }
  }
  return (
    <div className="flex overflow-x-scroll  custom-scrollbar font-roboto">

      {buttonList.map((buttonName, index) => {
        return (
          <div key={index} className="">
            <button
              onClick={() => { videoByTag(buttonName) }}
              className={`${active === buttonName ? "bg-black text-white" : " "} bg-[#F0F0F0] px-3 py-1 rounded-lg transition-all duration-200 mx-2 text-[14px] text-black`}
            >
              <span className=" whitespace-nowrap">{buttonName}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ButtonList;
