import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFire, FaRegStar } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';

const LibraryCard = ({ library }) => {
    return (
        <Link href={`/library/${library.id}`}>
            <div className='text-white bg-[#15171D] rounded-2xl border border-[#3D3F45]  hover:border-[#C2F800] cursor-pointer'>
                <div className=''>
                    <Image 
                        src={library.image}
                        alt='Library Image' 
                        width={600}
                        height={100}
                        className='w-full h-55 object-cover rounded-t-2xl'
                    ></Image>
                </div>

                <div className='m-6'> 
                    {library.muscleGroups.map((muscle) => ( 
                        <span key={muscle} 
                        className="bg-[#C2F800] text-black font-bold px-3 py-1 rounded-full" 
                        > {muscle} 
                        </span> ))}
                    <h2 className='text-2xl font-bold mt-4'>{library.name}</h2>
                    <p className='text-[#9CA3AF] my-2'>{library.equipment}</p>
                    <hr className="mt-6 border-[#3D3F45]" />
                    <div className='flex items-center gap-6 mt-4 text-[#9CA3AF]'>
                        <p className='flex items-center gap-1'><span><IoTimeOutline /></span><span>{library.duration}</span><span>min</span></p>
                        <p className='flex items-center gap-1'><span><FaFire /></span><span>{library.caloriesBurned}</span><span>kcal</span></p>
                        <p className='flex items-center'><span><FaRegStar /></span><span>{library.rating}</span></p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default LibraryCard;