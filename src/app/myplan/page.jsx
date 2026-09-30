"use client";

import MyplanLibrary from '@/components/shared/addedLibrary/MyplanLibrary';
import SavedLibrary from '@/components/shared/addedLibrary/SavedLibrary';
import { LibraryContext } from '@/context/LibraryContext';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const MyPlanPage = () => {
    const { workoutPlan, workoutSaved, sortBy, setSortBy } = useContext(LibraryContext);

    const [activeBtn, setActiveBtn] = useState('todayPlan');

    const handleUpdatebtnType = (type) => {
        setActiveBtn(type);
    };

    const currentList = activeBtn === 'todayPlan' ? workoutPlan : workoutSaved;

    return (
        <div className='text-white mx-4 sm:mx-6 md:mx-9 my-6 md:my-9'>
            <h2 className='text-3xl sm:text-4xl font-medium'>MY PLAN</h2>

            <p className='text-sm text-[#9CA3AF] my-2'>
                Cap of five lifts for today. finish them, then load more.
            </p>

            {/* Stats */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 my-4 p-4 sm:p-5 bg-[#13161D] border border-[#3D3F45] rounded-xl'>
                <div>
                    <p className='text-sm text-[#9CA3AF] my-1'>Exercise</p>
                    <h2 className='text-2xl sm:text-3xl text-[#C2F800]'>
                        {currentList.length}
                    </h2>
                </div>

                <div>
                    <p className='text-sm text-[#9CA3AF] my-1'>Minutes</p>
                    <h2 className='text-2xl sm:text-3xl'>
                        {currentList.reduce(
                            (total, workout) => total + workout.duration,
                            0
                        )}
                    </h2>
                </div>

                <div>
                    <p className='text-sm text-[#9CA3AF] my-1'>Calories</p>
                    <h2 className='text-2xl sm:text-3xl'>
                        {currentList.reduce(
                            (total, workout) => total + workout.caloriesBurned,
                            0
                        )}
                    </h2>
                </div>
            </div>

            {/* Tabs + Sort */}
            <div className='flex flex-col gap-4 md:flex-row md:justify-between md:items-center'>
                {/* Tabs */}
                <div className='flex gap-2 sm:gap-3 bg-[#13161D] py-2 px-2 sm:px-3 border border-[#3D3F45] rounded-xl w-fit'>
                    <button
                        onClick={() => handleUpdatebtnType('todayPlan')}
                        className={`text-xs sm:text-sm btn ${
                            activeBtn === 'todayPlan' ? 'btn-success' : ''
                        } text-white cursor-pointer`}
                    >
                        Today&apos;s Plan
                    </button>

                    <button
                        onClick={() => handleUpdatebtnType('saved')}
                        className={`text-xs sm:text-sm btn ${
                            activeBtn === 'saved' ? 'btn-success' : ''
                        } text-white cursor-pointer`}
                    >
                        Saved
                    </button>
                </div>

                {/* Sort */}
                <div className='flex items-center gap-3 w-full md:w-auto'>
                    <div className='text-sm text-[#9CA3AF]'>
                        Sort by
                    </div>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className='select select-success border border-[#3D3F45] w-full sm:w-auto'
                    >
                        <option value='duration'>Duration</option>
                        <option value='calories'>Calories</option>
                        <option value='rating'>Rating</option>
                    </select>
                </div>
            </div>

            {/* Content */}
            {currentList.length > 0 ? (
                <div className='w-full my-6 md:my-10 p-4 sm:p-6 md:p-10 border border-dashed border-[#3D3F45] rounded-2xl overflow-hidden'>
                    {activeBtn === 'todayPlan' ? (
                        <MyplanLibrary />
                    ) : (
                        <SavedLibrary />
                    )}
                </div>
            ) : (
                <div className='text-center w-full my-6 md:my-10 p-8 sm:p-12 md:p-15 border border-dashed border-[#3D3F45] rounded-2xl'>
                    <h2 className='text-2xl sm:text-3xl font-medium'>
                        NOTHING HERE YET
                    </h2>

                    <p className='text-sm text-[#9CA3AF] my-4 sm:m-5'>
                        Browse the library and add a lift to get today moving.
                    </p>

                    <Link href='/'>
                        <button className='bg-[#C2F800] text-black font-medium px-4 py-2 rounded-full cursor-pointer'>
                            Go to workouts
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MyPlanPage;