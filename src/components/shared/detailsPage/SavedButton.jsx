"use client";

import { LibraryContext } from '@/context/LibraryContext';
import React, { useContext } from 'react';
import { BiSave } from 'react-icons/bi';
import { toast } from 'react-toastify';

const SavedButton = (library) => {
    const {workoutSaved, setWorkoutSaved} = useContext(LibraryContext);

    const handleMyPlan = () => {
        setWorkoutSaved([...workoutSaved, library]);
        toast.success('Save for later')
    }
    return (
        <div>
            <button className='flex items-center gap-1 bg-[#C2F800] text-black font-medium px-4 py-2 rounded-xl cursor-pointer' onClick={() => handleMyPlan()}>{<BiSave />} <span>Save for later</span></button>
        </div>
    );
};

export default SavedButton;