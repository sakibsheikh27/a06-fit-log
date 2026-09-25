import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between my-4 mx-9'>
                <div className='flex justify-between gap-4'>
                    <Image src={logo} width={100} height={100} className='h-auto w-auto' alt='logo icon'></Image>
                    <h2 className='font-bold text-2xl text-white'>FITLOG</h2>
                </div>

                <div className='flex justify-between gap-4 text-[#9CA3AF]'>
                    <p>Workouts</p>
                    <p>My Plan</p>
                </div>

                <div className='flex justify-between gap-4 text-[#9CA3AF]'>
                    <p>Plan</p>
                    <p>Saved</p>
                </div>
            </div>
            <hr className="mt-6 border-[#3D3F45]" />
        </div>
    );
};

export default Navbar;