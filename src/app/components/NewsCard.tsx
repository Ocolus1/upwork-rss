import * as React from 'react';
import Image from 'next/image';
import { truncateString } from "@/lib/helper"

interface NewsCardprops {
    img_src: string;
    icon_img: string;
    icon_text: string;
    link_text: string;
    time_ago: number;
}

export default function NewsCard({img_src, icon_img, icon_text, link_text, time_ago}: NewsCardprops) {
	return (
		<div className="w-[220px] bg-[#282929] rounded-t-lg border-b-2 border-[#fdff63] pt-0">
            <Image src={img_src} width="220" height="50" className="min-w-23 min-h-20 rounded-t-lg" alt="sample image" />
            <div className="p-2">
                <div className="flex flex-row items-center gap-1 font-semibold py-2">
                    <Image src={icon_img} width="16" height="16" alt="icon image" />
                    <p className="text-xs text-[#808181]">{icon_text}</p>
                </div>
                <p>
                    <a href="#" className="text-white font-semibold text-lg">
                        {truncateString(link_text, 60)}
                    </a>
                </p>
                <p className="text-xs text-[#808181] py-2.5">{time_ago}h ago</p>
            </div>
        </div>
	);
}
