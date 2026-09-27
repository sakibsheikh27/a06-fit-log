

import { LibraryContext } from '@/context/LibraryContext';
import Image from 'next/image';
import React, { useContext } from 'react';
import { FaFire, FaRegStar } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';

const MyplanLibrary = () => {
    const {workoutPlan, workoutSaved} = useContext(LibraryContext);
    console.log('workout plan', workoutPlan)
    return (
        <div>
            <div className='text-white'>
                {workoutPlan.map(card => {
                    return (
                        <div key={card.id} className='text-white flex justify-between items-center my-4 p-3 bg-[#13161D] border border-[#3D3F45] rounded-xl'>
                            <div className='flex gap-4'>
                                <Image 
                                src={card.image}
                                alt='Library Image' 
                                width={600}
                                height={100}
                                className='w-32.5 h-17.5 object-cover rounded-xl'
                                ></Image>
                            
                                <div className=''>
                                    <h2 className='text-xl font-medium'>{card.name}</h2>
                                    <p className='text-sm text-[#9CA3AF] text-left'>{card.equipment}</p>
                                    <div className='text-sm text-[#9CA3AF] flex gap-2'>
                                        <p className='flex items-center gap-1'><span><IoTimeOutline /></span><span>{card.duration}</span><span>min</span></p>
                                        <p className='flex items-center gap-1'><span><FaFire /></span><span>{card.caloriesBurned}</span><span>kcal</span></p>
                                        <p className='flex items-center'><span><FaRegStar /></span><span>{card.rating}</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <button className='border border-[#9CA3AF] rounded-full bg-[#14171E] text-md py-1.5 px-3 mx-4 '>View Details</button>
                                <button className='border border-[#9CA3AF] rounded-full bg-[#C2F800] text-md py-1.5 px-3 mx- font-medium text-black'>Mark as Done</button>
                            </div>
                        </div>
                    )
                })}
                
            </div>


        </div>
    );
};

export default MyplanLibrary;