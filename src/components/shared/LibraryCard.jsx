import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFire, FaRegStar } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';

const LibraryCard = ({ library }) => {
    return (
        <Link href={`/library/${library.id}`} className="block h-full">
            <div className="h-full text-white bg-[#15171D] rounded-2xl border border-[#3D3F45] hover:border-[#C2F800] cursor-pointer overflow-hidden">

                {/* Image */}
                <Image
                    src={library.image}
                    alt="Library Image"
                    width={600}
                    height={400}
                    className="w-full h-48 sm:h-52 lg:h-55 object-cover"
                />

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6">

                    {/* Muscle Groups */}
                    <div className="flex flex-wrap gap-2">
                        {library.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="bg-[#C2F800] text-black text-xs sm:text-sm font-bold px-2.5 sm:px-3 py-1 rounded-full"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Name */}
                    <h2 className="text-xl sm:text-2xl font-bold mt-4">
                        {library.name}
                    </h2>

                    {/* Equipment */}
                    <p className="text-sm sm:text-base text-[#9CA3AF] my-2">
                        {library.equipment}
                    </p>

                    <hr className="mt-5 sm:mt-6 border-[#3D3F45]" />

                    {/* Stats */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-sm sm:text-base text-[#9CA3AF]">

                        <p className="flex items-center gap-1">
                            <IoTimeOutline />
                            <span>{library.duration}</span>
                            <span>min</span>
                        </p>

                        <p className="flex items-center gap-1">
                            <FaFire />
                            <span>{library.caloriesBurned}</span>
                            <span>kcal</span>
                        </p>

                        <p className="flex items-center gap-1">
                            <FaRegStar />
                            <span>{library.rating}</span>
                        </p>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default LibraryCard;