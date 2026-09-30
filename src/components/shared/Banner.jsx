import Image from 'next/image';
import React from 'react';
import BannerImg from '@/assets/banner.png';
import { Oswald } from 'next/font/google';

const oswald = Oswald({
    subsets: ['latin'],
});

const Banner = () => {
    return (
        <div className='text-white py-10 sm:py-14 lg:py-18 mx-4 sm:mx-6 lg:mx-9 my-10 sm:my-14 lg:my-18 flex flex-col lg:flex-row items-center justify-between bg-[#15171D] rounded-2xl overflow-hidden'>
            
            <div className='flex flex-col justify-center px-6 sm:px-10 lg:mx-15 text-center lg:text-left'>
                <p className='text-[13px] text-[#C2F800] font-bold'>
                    WORKOUT LIBRARY
                </p>

                <h2 className={`${oswald.className} text-3xl sm:text-4xl lg:text-6xl font-bold my-4 sm:my-5 lg:my-6`}>
                    TRAIN WITH INTENT. LOG <br className='hidden lg:block' />
                    EVERY SET.
                </h2>

                <p className='text-[#9CA3AF] w-full max-w-[440px] mb-6 text-sm sm:text-base'>
                    FitLog is a dark, no-nonsense gym companion: pick a lift,
                    lock it into today&apos;s plan, and watch the week&apos;s work add up.
                </p>

                <button className='self-center lg:self-start bg-[#C2F800] text-black text-[12px] font-bold py-3 px-6 rounded-md'>
                    BROWSE WORKOUTS
                </button>
            </div>

            <div className='w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0'>
                <Image
                    src={BannerImg}
                    alt='Banner image'
                    className='w-full max-w-[450px] h-auto'
                />
            </div>
        </div>
    );
};

export default Banner;