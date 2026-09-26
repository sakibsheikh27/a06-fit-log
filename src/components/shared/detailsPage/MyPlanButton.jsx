"use client";

import { LibraryContext } from '@/context/LibraryContext';
import React, { useContext, useState } from 'react';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { toast } from 'react-toastify';

const MyPlanButton = (library) => {
    const {workoutPlan, setWorkoutPlan} = useContext(LibraryContext);
    const [isAdded, setIsAdded] = useState(false);
    const handleMyPlan = () => {
        setWorkoutPlan([...workoutPlan, library]);
        toast.success('Added to today plan');
    }
    return (
        <div>
            <button className='flex items-center gap-1 bg-[#C2F800] text-black font-medium px-4 py-2 rounded-xl cursor-pointer' 
            disabled={isAdded}
            onClick={() => handleMyPlan()}>
                {<MdOutlineCalendarToday />} <span>Add to today&apos;s plan</span>
            </button>
        </div>
    );
};

export default MyPlanButton;