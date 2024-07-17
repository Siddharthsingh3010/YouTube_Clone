import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { API_KEY } from "../constant/youtube";
import Avatar from "react-avatar";
import { MdCheckCircle } from "react-icons/md";
import { BiSolidBellRing } from "react-icons/bi";
import { IoChevronDown } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineChevronDown } from "react-icons/hi";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { RiSendPlaneFill } from "react-icons/ri";
import LiveChat from "./LiveChat";
import { useDispatch } from "react-redux";
import { setMessgae } from "../utils/chatSlice";

const Watch = () => {
    const [input, setInput] = useState("");
    const [singleInfo, setSingleInfo] = useState("");
    const [subscribers, setSubscribers] = useState(Math.floor(Math.random() * 30));
    const [likes, setLikes] = useState(Math.floor(Math.random() * 15));

    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');

    const dispatch = useDispatch();

    const getSingleVideo = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${videoId}&key=${API_KEY}`);
            setSingleInfo(res?.data?.items[0]);
        } catch (error) {
            console.log(error)
        }
    }

    const sendMessage = () => {
        dispatch(setMessgae({ name: "Siddharth", message: input, }))
        setInput("");
    }

    useEffect(() => {
        getSingleVideo();
    }, [])

    return (
        <div className="flex justify-between mt-[59px] ml-[100px] font-roboto w-[100%]">
            {/* video */}
            <div className=" mt-8 font-roboto">
                <iframe
                    className=" rounded-xl object-cover h-[550px] w-[980px]"
                    src={`https://www.youtube.com/embed/${videoId}?si=1R5zicXzDI5k6pfX&autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                <h1 className=" text-[20px] font-semibold max-w-[850px] mt-2">{singleInfo?.snippet?.title}</h1>


                <div className=" flex">
                    {/* aadha */}
                    <div className=" flex items-center gap-2 w-[50%] mt-1 justify-start">
                        {/* awatar */}
                        <div className=" cursor-pointer mt-1">
                            <Avatar
                                src={singleInfo?.snippet?.channelId}
                                size={36}
                                round={true}
                            />
                        </div>

                        {/* cha name and sus */}
                        <div className=" font-roboto cursor-pointer">
                            {/*  cha name and icon */}
                            <div className=" flex items-center gap-1">
                                <h1 className=" text-[16px] font-semibold text-gray-800 mt-1">{singleInfo?.snippet?.channelTitle}</h1>
                                <span className="  text-gray-500 mt-1">
                                    <MdCheckCircle />
                                </span>
                            </div>
                            {/* subscriiber */}

                            <div className=" leading-2">
                                <p className=" text-[12px] font-light text-gray-500">
                                    {subscribers}M subscribers
                                </p>
                            </div>
                        </div>

                        {/* button */}
                        <div className=" font-roboto bg-[#F2F2F2] flex items-center gap-2 rounded-full px-[15px] py-[10px] text-sm font-medium ml-3 hover:bg-[#E5E5E5]">
                            <BiSolidBellRing size={22} />
                            <button>Subscribed</button>
                            <IoChevronDown size={20} />
                        </div>
                    </div>

                    {/* dusra aadha */}
                    <div className="flex items-center w-[55%] mt-1 justify-end">
                        {/* like dislike */}
                        <div className="flex cursor-pointer">
                            <div className=" ml-2 font-roboto bg-[#F2F2F2] flex items-center gap-2 rounded-l-full px-[15px] py-[10px] text-sm font-medium hover:bg-[#E5E5E5]">
                                <BiLike size={20} />
                                <p className=" text-[14px] font-medium text-gray-800">
                                    {likes}K
                                </p>
                            </div>
                            <div className="font-roboto bg-[#F2F2F2] flex items-center rounded-r-full px-[15px] py-[10px] text-sm font-medium hover:bg-[#E5E5E5] border-l">
                                <BiDislike size={20} />
                            </div>
                        </div>
                        {/* share*/}
                        <div className="font-roboto bg-[#F2F2F2] flex items-center gap-2 rounded-full px-[15px] py-[10px] text-sm font-medium ml-3 hover:bg-[#E5E5E5]">
                            <PiShareFatLight size={20} />
                            <span>Share</span>
                        </div>
                        {/* download */}
                        <div className="font-roboto bg-[#F2F2F2] flex items-center gap-2 rounded-full px-[15px] py-[10px] text-sm font-medium ml-3 hover:bg-[#E5E5E5]">
                            <LiaDownloadSolid size={20} />
                            <span>Download</span>
                        </div>
                        {/* three dot */}
                        <div className="font-roboto bg-[#F2F2F2] flex items-center gap-2 rounded-full p-3 text-sm font-medium ml-3 hover:bg-[#E5E5E5]">
                            <HiOutlineDotsHorizontal size={20} />
                        </div>
                    </div>
                </div>
            </div>
            {/* ***************************************************************************************** */}
            {/* live chat */}
            <div className="mt-8 font-roboto border border-gray-400 ml-8 rounded-lg w-[50%] mr-10 h-fit p-3">
                {/* top */}
                <div className="flex justify-between items-cente w-full text-[18px] p-[8px] border-b border-gray-400">
                    <div className="flex gap-2 items-center">
                        <h1>Top chat</h1>
                        <HiOutlineChevronDown className="mt-[4px] cursor-pointer" />
                    </div>
                    <div className="flex gap-2 items-center cursor-pointer">
                        <div className="rounded-full p-2 hover:bg-[#E5E5E5]"> <PiDotsThreeVerticalBold size={22} /></div>
                        <div className="rounded-full p-2 hover:bg-[#E5E5E5]">  <RxCross2 size={22} /></div>
                    </div>
                </div>

                {/* Chat */}
                <div className=" overflow-y-auto w-full h-[28rem] flex flex-col-reverse">
                    <LiveChat />
                </div>

                {/*  input field*/}

                <div className=" flex items-center justify-between border-t p-2">
                    <div className=" flex items-center">
                        <div>
                            <Avatar
                                src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=338&ext=jpg&ga=GA1.1.1687694167.1711843200&semt=ais"
                                size={50}
                                round={true}
                                className=" cursor-pointer"
                            />
                        </div>
                        <input value={input} onChange={(e) => setInput(e.target.value)} className=" border-b border-gray-400 outline-none" type="text" placeholder="Send Message..." />
                        <div className="bg-gray-200 cursor-pointer rounded-full p-2 hover:bg-gray-400">
                            <RiSendPlaneFill size={20} onClick={sendMessage} />
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Watch;
