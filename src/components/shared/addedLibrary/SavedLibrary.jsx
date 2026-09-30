import { LibraryContext } from '@/context/LibraryContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { FaFire, FaRegStar } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';

const SavedLibrary = () => {
    const { workoutSaved, setWorkoutSaved, sortBy } = useContext(LibraryContext);
    const [markedId, setMarkId] = useState([]);

    const handleMarkDone = (id) => {
        setMarkId([...markedId, id]);
        toast('Mark as Done');
    };

    const handleDelete = (id) => {
        setWorkoutSaved(workoutSaved.filter(card => card.id !== id));
        toast.success('Successfully Deleted');
    };

    const sortByWorkout = (workout) => {
        const sortedWorkout = [...workout];

        if (sortBy === 'duration') {
            sortedWorkout.sort((a, b) => b.duration - a.duration);
        } else if (sortBy === 'calories') {
            sortedWorkout.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        } else if (sortBy === 'rating') {
            sortedWorkout.sort((a, b) => b.rating - a.rating);
        }

        return sortedWorkout;
    };

    const sortedWorkoutPlan = sortByWorkout(workoutSaved);

    return (
        <div className="w-full">
            <div className="text-white">
                {sortedWorkoutPlan.map(card => {
                    const isMarked = markedId.includes(card.id);

                    return (
                        <div
                            key={card.id}
                            className={`my-4 flex flex-col gap-4 rounded-xl border border-[#3D3F45] p-3 sm:flex-row sm:items-center sm:justify-between ${
                                isMarked ? 'bg-green-950/30' : 'bg-[#13161D]'
                            }`}
                        >
                            {/* Left side */}
                            <div className="flex min-w-0 gap-3 sm:gap-4">
                                <Image
                                    src={card.image}
                                    alt="Library Image"
                                    width={600}
                                    height={100}
                                    className="h-17.5 w-24 shrink-0 rounded-xl object-cover sm:w-32.5"
                                />

                                <div className="min-w-0">
                                    <h2 className="truncate text-base font-medium sm:text-xl">
                                        {card.name}
                                    </h2>

                                    <p className="truncate text-sm text-[#9CA3AF]">
                                        {card.equipment}
                                    </p>

                                    <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#9CA3AF] sm:text-sm">
                                        <p className="flex items-center gap-1">
                                            <IoTimeOutline />
                                            <span>{card.duration} min</span>
                                        </p>

                                        <p className="flex items-center gap-1">
                                            <FaFire />
                                            <span>{card.caloriesBurned} kcal</span>
                                        </p>

                                        <p className="flex items-center gap-1">
                                            <FaRegStar />
                                            <span>{card.rating}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right side */}
                            <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:flex-nowrap">
                                <Link
                                    href={`/library/${card.id}`}
                                    className="flex-1 whitespace-nowrap rounded-full border border-[#9CA3AF] bg-[#14171E] px-3 py-1.5 text-center text-sm sm:flex-none"
                                >
                                    View Details
                                </Link>

                                <button
                                    onClick={() => handleMarkDone(card.id)}
                                    className={`flex-1 whitespace-nowrap rounded-full border border-[#9CA3AF] px-3 py-1.5 text-sm font-medium text-black sm:flex-none ${
                                        isMarked
                                            ? 'bg-green-500'
                                            : 'bg-[#C2F800]'
                                    }`}
                                >
                                    Mark as Done
                                </button>

                                <button
                                    onClick={() => handleDelete(card.id)}
                                    className="rounded-full p-2 text-xl hover:text-red-500"
                                >
                                    <RxCross2 />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SavedLibrary;