

import { LibraryContext } from '@/context/LibraryContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { FaFire, FaRegStar } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';

const MyplanLibrary = () => {
    const {workoutPlan, workoutSaved, setWorkoutPlan} = useContext(LibraryContext);
    const [markedId, setMarkId] = useState([]);
    const handleMarkDone = (id) =>{
        setMarkId([...markedId, id]);
        toast('Mark as Done');
    };

    const handleDelete = (id) => {
        setWorkoutPlan(workoutPlan.filter(card => card.id !== id));
        toast.success('Successfully Deleted');
    };
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
                                <Link 
                                    href={`/library/${card.id}`} 
                                    className='border border-[#9CA3AF] rounded-full bg-[#14171E] text-md py-1.5 px-3 mx-4 '
                                    >
                                    View Details
                                </Link>
                                <button 
                                    onClick={() => handleMarkDone(card.id)}
                                    className={`border border-[#9CA3AF] rounded-full text-md py-1.5 px-3 font-medium text-black ${
                                    markedId.includes(card.id)
                                        ? 'bg-green-500'
                                        : 'bg-[#C2F800]'
                                    }`}
                                    >
                                    {markedId.includes(card.id) ? `Mark as Done` : 'Mark as Done'}
                                    </button>
                                <button 
                                    onClick={() => handleDelete(card.id)}
                                    className=' mx-3 hover:text-red-500 text-xl'
                                    ><RxCross2 />
                                </button>
                            </div>
                        </div>
                    )
                })}
                
            </div>


        </div>
    );
};

export default MyplanLibrary;