import Image from 'next/image';
import React from 'react';
import { BiSave } from 'react-icons/bi';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { Oswald } from 'next/font/google';
import MyPlanButton from '@/components/shared/detailsPage/MyPlanButton';
import SavedButton from '@/components/shared/detailsPage/SavedButton';


const oswald = Oswald({
    subsets: ['latin'],
})

 
const LibraryDetailsPage = async({params}) => {
    const {libraryId} = await params;

    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${libraryId}`);
    const library = await res.json();
    return (
        <div className='text-white flex justify-center gap-10 mx-70 my-10'>
            <div>
                <Image className='h-150 w-175 rounded-2xl' src={library.image} width={300} height={200} alt={`${library.name} Image`}></Image>
            </div>
            <div className='container max-w-full'>
                <h2 className={`${oswald.className} text-3xl font-bold`}>{library.name}</h2>
                <p className='text-sm text-[#9CA3AF] mt-1 mb-3'>{library.description}</p>
                {library.muscleGroups.map((muscle) => ( 
                        <span key={muscle} 
                        className="bg-[#C2F800] text-black font-medium px-2 py-0.5 rounded-full text-sm" 
                        > {muscle} 
                        </span> ))}
                 <table className="text-sm text-[#9CA3AF] w-full my-3 border border-[#3D3F45] rounded-xl overflow-hidden bg-[#151922]">
                    <tbody>
                        <tr className='border-b border-[#3D3F45]'>
                            <td className="p-3">EQUIPMENT</td>
                            <td className="text-right p-3">{library.equipment}</td>
                        </tr>

                        <tr className='border-b border-[#3D3F45]'>
                            <td className="p-3">DIFFICULTY</td>
                            <td className="text-right p-3">{library.difficulty}</td>
                        </tr>

                        <tr className='border-b border-[#3D3F45]'>
                            <td className="p-3">SETS</td>
                            <td className="text-right p-3">{library.sets}</td>
                        </tr>

                        <tr className='border-b border-[#3D3F45]'>
                            <td className="p-3">REPS</td>
                            <td className="text-right p-3">{library.reps}</td>
                        </tr>

                        <tr className='border-b border-[#3D3F45]'>
                            <td className="p-3">DURATION</td>
                            <td className="text-right p-3">{library.duration} min</td>
                        </tr>

                        <tr className='border-b border-[#3D3F45]'>
                            <td className="p-3">CALORIES</td>
                            <td className="text-right p-3">{library.caloriesBurned} kcal</td>
                        </tr>

                        <tr className='border-b border-[#3D3F45]'>
                            <td className="p-3">RATING</td>
                            <td className="text-right p-3">{library.rating}</td>
                        </tr>
                        </tbody>
                </table> 

                <h2 className='my-2'>INSTRUCTIONS</h2>
                <ol className="list-decimal ml-5 space-y-2">
                    {library.instructions.map((instruction, index) => (
                        <li className='text-sm text-[#9CA3AF]' key={index}>{instruction}</li>
                    ))}
                </ol>     
                <div className='flex gap-6 my-4'>
                    <MyPlanButton library={library}></MyPlanButton>
                    <SavedButton library={library}></SavedButton>
                </div>
                
            </div>
        </div>
    );
};

export default LibraryDetailsPage;