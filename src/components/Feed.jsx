import React from "react";
import ButtonList from "./ButtonList";
import Videos from "./Videos";
import { useSelector } from "react-redux";

const Feed = () => {
  const open = useSelector((store) => store.app.open);
  return (
    <div className={`${open ? "mt-[65px] ml-[227px] w-[85%] relative overflow-x-hidden" : "mt-[65px]  ml-[120px] w-[95%] relative overflow-x-hidden"}`}>
      <div className=" ml-[2px]">
        <ButtonList />
      </div>
      <div className=" mt-[-20px]">
        <Videos />
      </div>


    </div>
  );
};

export default Feed;
