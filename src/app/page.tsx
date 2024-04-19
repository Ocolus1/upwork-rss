"use client";

import React, { useState, useEffect} from "react";

import Image from "next/image";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";

import { truncateString } from "@/lib/helper"

const newsList = [
  {
    id: 1,
    img_src: "/sample_img.png",
    icon_img: "/small_icon.png",
    icon_text: "Triathle",
    link_text: "Weekend Swim Workout: 125s and Pop-Ups",
    time_ago: 4
  },
  {
    id: 2,
    img_src: "/sample_img.png",
    icon_img: "/small_icon.png",
    icon_text: "Triathle",
    link_text: "Weekend Swim Workout: 125s and Pop-Ups",
    time_ago: 4
  },
  {
    id: 3,
    img_src: "/sample_img.png",
    icon_img: "/small_icon.png",
    icon_text: "Triathle",
    link_text: "Weekend Swim Workout: 125s and Pop-Ups",
    time_ago: 4
  },
  {
    id: 4,
    img_src: "/sample_img.png",
    icon_img: "/small_icon.png",
    icon_text: "Triathle",
    link_text: "Weekend Swim Workout: 125s and Pop-Ups",
    time_ago: 4
  },
  {
    id: 5,
    img_src: "/sample_img.png",
    icon_img: "/small_icon.png",
    icon_text: "Triathle",
    link_text: "Weekend Swim Workout: 125s and Pop-Ups",
    time_ago: 4
  },
  {
    id: 6,
    img_src: "/sample_img.png",
    icon_img: "/small_icon.png",
    icon_text: "Triathle",
    link_text: "Weekend Swim Workout: 125s and Pop-Ups",
    time_ago: 4
  },
]


type Post = {
  title: string;
  contentSnippet: string;
  link: string;
}

export default function Home() {

  const [newsFeed, setNewsFeed] = useState<Post[]>();

  useEffect(() => {

    const getNewsFeed = async () => {
      const res = await fetch('/api');
      const posts = await res.json();
      setNewsFeed(posts.feed.items)
    }

    getNewsFeed();
  }, [])

  return (
    <div className="bg-[#1c1d1d]">
      <Navbar />
      <main className="p-5 flex flex-col items-center min-h-dvh">
        <div className="w-full max-w-screen-lg">
          <h1 className="text-2xl md:text-4xl font-semibold text-white py-2 mb-4"><i>NEWS</i></h1>
          <div className="flex flex-row flex-wrap gap-3">
              {newsFeed?.map((post, index) => {
                return(
                  <div key={index} className="w-[220px] bg-[#282929] rounded-t-lg border-b-2 border-[#fdff63] pt-0">
                      <Image src="/sample_img.png" width="220" height="50" className="min-w-23 min-h-20 rounded-t-lg" alt="sample image" />
                      <div className="p-2">
                          <div className="flex flex-row items-center gap-1 font-semibold py-2">
                              <Image src="/small_icon.png" width="16" height="16" alt="icon image" />
                              <p className="text-xs text-[#808181]">Triathle</p>
                          </div>
                          <p>
                              <a href="#" className="text-white font-semibold text-lg">
                                  {truncateString(post.contentSnippet, 60)}
                              </a>
                          </p>
                          <p className="text-xs text-[#808181] py-2.5">5h ago</p>
                      </div>
                  </div>
                )
              }
              )}
            {/* {newsList.map((item) => {
              return (<NewsCard key={item.id} {...item} />)
            })} */}
          </div>
        </div>
      </main>
    </div>
  );
}
