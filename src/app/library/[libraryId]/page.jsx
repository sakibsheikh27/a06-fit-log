import Image from 'next/image';
import React from 'react';
import { Oswald } from 'next/font/google';
import MyPlanButton from '@/components/shared/detailsPage/MyPlanButton';
import SavedButton from '@/components/shared/detailsPage/SavedButton';

const oswald = Oswald({
    subsets: ['latin'],
});

const LibraryDetailsPage = async ({ params }) => {
    const { libraryId } = await params;

    const res = await fetch(
        `https://api.api-store.workers.dev/api/fitlog/${libraryId}`
    );
    const library = await res.json();

    return (
        <div className="text-white flex flex-col lg:flex-row justify-center gap-6 lg:gap-10 mx-4 sm:mx-8 lg:mx-16 xl:mx-24 2xl:mx-32 my-6 lg:my-10">

            <div className="w-full lg:w-1/2">
                <Image
                    className="h-auto w-full max-h-[600px] object-cover rounded-2xl"
                    src={library.image}
                    width={700}
                    height={500}
                    alt={`${library.name} Image`}
                />
            </div>

            <div className="w-full lg:w-1/2">

                <h2
                    className={`${oswald.className} text-2xl sm:text-3xl font-bold`}
                >
                    {library.name}
                </h2>

                <p className="text-sm text-[#9CA3AF] mt-1 mb-3">
                    {library.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {library.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="bg-[#C2F800] text-black font-medium px-2 py-0.5 rounded-full text-sm"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                <div className="overflow-x-auto">
                    <table className="text-sm text-[#9CA3AF] w-full my-3 border border-[#3D3F45] rounded-xl overflow-hidden bg-[#151922]">
                        <tbody>
                            <tr className="border-b border-[#3D3F45]">
                                <td className="p-3">EQUIPMENT</td>
                                <td className="text-right p-3">{library.equipment}</td>
                            </tr>

                            <tr className="border-b border-[#3D3F45]">
                                <td className="p-3">DIFFICULTY</td>
                                <td className="text-right p-3">{library.difficulty}</td>
                            </tr>

                            <tr className="border-b border-[#3D3F45]">
                                <td className="p-3">SETS</td>
                                <td className="text-right p-3">{library.sets}</td>
                            </tr>

                            <tr className="border-b border-[#3D3F45]">
                                <td className="p-3">REPS</td>
                                <td className="text-right p-3">{library.reps}</td>
                            </tr>

                            <tr className="border-b border-[#3D3F45]">
                                <td className="p-3">DURATION</td>
                                <td className="text-right p-3">
                                    {library.duration} min
                                </td>
                            </tr>

                            <tr className="border-b border-[#3D3F45]">
                                <td className="p-3">CALORIES</td>
                                <td className="text-right p-3">
                                    {library.caloriesBurned} kcal
                                </td>
                            </tr>

                            <tr>
                                <td className="p-3">RATING</td>
                                <td className="text-right p-3">{library.rating}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="my-3 font-semibold">INSTRUCTIONS</h2>

                <ol className="list-decimal ml-5 space-y-2">
                    {library.instructions.map((instruction, index) => (
                        <li
                            className="text-sm text-[#9CA3AF]"
                            key={index}
                        >
                            {instruction}
                        </li>
                    ))}
                </ol>

               
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 my-5">
                    <MyPlanButton library={library} />
                    <SavedButton library={library} />
                </div>

            </div>
        </div>
    );
};

export default LibraryDetailsPage;