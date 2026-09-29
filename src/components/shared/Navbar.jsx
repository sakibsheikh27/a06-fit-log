"use client";

import Image from 'next/image';
import React, { useContext } from 'react';
import logo from '@/assets/logo.png'
import Link from 'next/link';
import { LibraryContext } from '@/context/LibraryContext';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const {workoutPlan, workoutSaved} = useContext(LibraryContext);
    const pathname = usePathname();
    return (
        <div className="sticky top-0 z-50 bg-[#0F1115]">
            <div className='flex justify-between my-4 mx-9'>
                <div className='flex justify-between gap-4'>
                    <Image src={logo} width={100} height={100} className='h-auto w-auto' alt='logo icon'></Image>
                    <h2 className='font-bold text-2xl text-white'>FITLOG</h2>
                </div>

                <div className='flex justify-between gap-4 text-[#9CA3AF]'>
                    <Link
                        href={'/'}
                        className={pathname === "/" ? "text-[#C2F800] font-bold" : "text-[#9CA3AF]"}
                        >Workouts
                    </Link>
                    <Link
    href="/myplan"
    className={pathname === "/myplan" ? "text-[#C2F800] font-bold" : "text-[#9CA3AF]"}
>
    My Plan
</Link>
                </div>

                <div className='flex justify-between gap-4 text-[#9CA3AF]'>
                    <p>Plan <span className='border border-black bg-[#C2F800] text-black px-1.5 rounded-full font-medium'>{workoutPlan.length}</span></p>
                    <p>Saved <span className='border border-[#9CA3AF]  px-1.5 rounded-full font-medium'>{workoutSaved.length}</span></p>
                </div>
            </div>
            <hr className="mt-6 border-[#3D3F45]" />
        </div>
    );
};

export default Navbar;