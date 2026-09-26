"use client";

import MyplanLibrary from '@/components/shared/addedLibrary/MyplanLibrary';
import SavedLibrary from '@/components/shared/addedLibrary/SavedLibrary';
import { LibraryContext } from '@/context/LibraryContext';
import React, { useContext, useState } from 'react';

const MyPlanPage = () => {
    const {workoutPlan} = useContext(LibraryContext);

    const [activeBtn, setActiveBtn] = useState('todayPlan');

    const handleUpdatebtnType = (type) => {
        setActiveBtn(type);
    };
    return (
        <div className='text-white m-9'>
            <h2 className='text-4xl font-medium'>MY PLAN</h2>
            <p className='text-sm text-[#9CA3AF] my-2'>Cap of five lifts for today. finish them, then load more.</p>
            <div className='flex justify-between items-center my-4 p-5 bg-[#13161D] border border-[#3D3F45] rounded-xl'>
                <div>
                    <p className='text-sm text-[#9CA3AF] my-1'>Exercise</p>
                    <h2 className='text-3xl text-[#C2F800]'>2</h2>
                </div>
                <div>
                    <p className='text-sm text-[#9CA3AF] my-1'>Minutes</p>
                    <h2 className='text-3xl'>23</h2>
                </div>
                <div>
                    <p className='text-sm text-[#9CA3AF] my-1'>Calories</p>
                    <h2 className='text-3xl'>190</h2>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='flex gap-3 bg-[#13161D] py-2 px-3 border border-[#3D3F45] rounded-xl'>
                    <button 
                    onClick={() => handleUpdatebtnType('todayPlan')}
                    className={`text-sm btn ${activeBtn === 'todayPlan' ? 'btn-success' : ''} text-[9CA3AF] cursor-pointer`}>
                        Today&apos;s Plan
                    </button>
                    <button 
                    onClick={() => handleUpdatebtnType('saved')}
                    className={`text-sm btn ${activeBtn === 'saved' ? 'btn-success' : ''} text-[9CA3AF] cursor-pointer`}>
                        Saved
                    </button>
                </div>
                <div className='flex gap-4'>
                    <button className='text-sm text-[9CA3AF]'>Sort by</button>
                    <button className='text-sm text-[9CA3AF bg-[#13161D] py-2 px-3 border border-[#3D3F45] rounded-xl'>Duration</button>
                </div>
            </div>
            <div className='text-center w-full my-10 p-15 border border-dashed border-[#3D3F45] rounded-2xl'>
                <h2 className='text-3xl font-medium'>NOTHING HERE YET</h2>
                <p className='text-sm text-[#9CA3AF] m-5'>Browse the library and add a lift to get today moving.</p>
                <button className='bg-[#C2F800] text-black font-medium px-4 py-2 rounded-full cursor-pointer'>Go to workouts</button>
            </div>
            {activeBtn === 'todayPlan' ? (
                <MyplanLibrary></MyplanLibrary>
            ) : (
                <SavedLibrary></SavedLibrary>
            )}
        </div>
    );
};

export default MyPlanPage;