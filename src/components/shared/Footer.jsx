import Image from 'next/image';
import React from 'react';
import FooterLogo from '@/assets/logo.png';

const Footer = () => {
    return (
        <div>
            <hr className="mt-6 border-[#3D3F45]" />

            <div className="mx-5 sm:mx-9 my-7 sm:my-9 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                <div className="flex justify-center sm:justify-start items-center gap-2 font-bold">
                    <Image
                        className="w-auto h-auto"
                        src={FooterLogo}
                        alt="Footer Image"
                    />
                    <p className="text-white">FitLog</p>
                </div>

                <div>
                    <p className="text-[#9CA3AF] text-sm sm:text-base">
                        &copy; 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;