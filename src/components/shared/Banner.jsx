import Image from 'next/image';
import React from 'react';
import BannerImg from '@/assets/banner.png';
import { Oswald } from 'next/font/google';


const oswald = Oswald({
    subsets: ['latin'],
})

const Banner = () => {
    return (
        <div className='text-white py-18 mx-9 my-18 flex justify-between bg-[#15171D] rounded-2xl'>
            <div className='flex flex-col justify-center mx-15'>
                <p className='text-[13px] text-[#C2F800] font-bold'>WORKOUT LIBRARY</p>
                <h2 className={`${oswald.className} text-6xl font-bold my-6`}>TRAIN WITH INTENT. LOG <br />EVERY SET.</h2>
                <p className='text-[#9CA3AF] w-110 mb-6'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.</p>
                <button className='self-start bg-[#C2F800] text-black text-[12px] font-bold py-3 px-6 rounded-md'>BROWSE WORKOUTS</button>
            </div>
            <div>
                <Image src={BannerImg} alt={'Banner image'}></Image>
            </div>
        </div>
    );
};

export default Banner;