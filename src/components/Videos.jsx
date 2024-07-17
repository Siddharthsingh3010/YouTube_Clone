import React, { useEffect, useState } from "react";
import axios from "axios";
import { VIDEO_API, API_KEY } from "../constant/youtube";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setHomeVideo } from "../utils/appSlice";

const Videos = () => {

  const { video, category, open } = useSelector((store) => store.app)
  const dispatch = useDispatch();

  const fetchVideo = async () => {
    try {
      const res = await axios.get(`${VIDEO_API}`);
      dispatch(setHomeVideo(res?.data?.items))
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideoByCategory = async () => {
    try {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`)
      dispatch(setHomeVideo(res?.data?.items))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (category === "All") {
      fetchVideo();
    } else {
      fetchVideoByCategory();
    }
  }, [category]);

  return (
    <div className={`${open ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 object-cover" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 object-cover"}`}>
      {
        video.map((item) => (
          <Link to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id}`} key={typeof item.id === 'object' ? item.id.videoId : item.id}>
            <VideoCart item={item} />
          </Link>
        ))
      }
    </div>
  );
};

export default Videos;
