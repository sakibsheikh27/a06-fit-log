import Image from 'next/image';
import React from 'react';
import FooterLogo from '@/assets/logo.png'

const Footer = () => {
    return (
        <div >
            <hr className="mt-6 border-[#3D3F45]" />
            <div className='flex justify-between items-center mx-9 my-9'>
                <div className=' flex justify-between items-center gap-2 font-bold'>
                    <Image className='w-fit font-bold' src={FooterLogo} alt={'Footer Image'}></Image>
                    <p className='text-white'>FitLog</p>
                </div>
                    
                <div>
                    <p className='text-[#9CA3AF]'>&copy; 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;