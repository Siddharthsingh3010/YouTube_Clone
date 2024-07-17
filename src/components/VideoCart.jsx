import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { MdCheckCircle } from "react-icons/md";
import axios from "axios";
import { API_KEY } from "../constant/youtube";
import { useSelector } from "react-redux";

const VideoCart = ({ item }) => {
  const [view, setView] = useState(Math.floor(Math.random() * 600));
  const [time, setTime] = useState(Math.floor(Math.random() * 60));

  const [ytIcon, setYtIcon] = useState("");
  const getYtChannelName = async () => {
    try {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`)
      // console.log(res)
      setYtIcon(res.data.items[0].snippet.thumbnails.high.url)

    } catch (error) {
      console.log(error);
    }
  };

  const open = useSelector((store) => store.app.open);



  useEffect(() => {
    getYtChannelName();
  }, [])
  return (
    <div className=" mt-7 ml-2 font-roboto mr-2 cursor-pointer">
      <img
        src={item.snippet.thumbnails.high.url}
        alt="video"
        className={`${open ? "w-[450px] h-[220px] m-auto rounded-xl object-cover hover:rounded-none transition-all duration-150" : "w-[500px] h-[187px] rounded-xl object-cover hover:rounded-none transition-all duration-150"}`}
      />

      <div>
        <div className=" flex mt-2 relative">
          <Avatar
            src={ytIcon}
            size={36}
            round={true}
            className=" cursor-pointer mt-[2.8px]"
          />

          <div className=" ml-4 mt-[2.8px]">
            <h1 className=" max-w-[400px] font-medium">{item.snippet.title}</h1>
            <p className=" text-sm text-gray-500 flex items-center gap-1">
              {item.snippet.channelTitle}
              <span>
                <MdCheckCircle />
              </span>
            </p>
          </div>
          {/* Three dots initially hidden */}
          <div className="mt-[2.8px] ml-[365px] absolute hidden group-hover:block">
            <PiDotsThreeVerticalBold size={24} />
          </div>

          {/* <div className={`mt-[2.8px] ml-[365px] absolute`}>
            <PiDotsThreeVerticalBold size={24} />
          </div> */}

        </div>

        <div className="ml-[50px]">
          <p className="text-sm text-gray-500 flex items-center gap-1 mt-[-10px]">{view}k views <span className="mb-3 text-xl font-bold">.</span> {time} minutes ago</p>
        </div>

      </div>
    </div>
  );
};

export default VideoCart;
