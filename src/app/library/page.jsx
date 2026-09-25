import React from 'react';
import { Oswald } from 'next/font/google';
import LibraryCard from '@/components/shared/LibraryCard';

const oswald = Oswald({
    subsets: ['latin'],
})

const getLibrary = async() => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}
const Library = async() => {
    const librariesData = await getLibrary();
    console.log(librariesData);
    return (
        <div className='mx-9 mb-6'>
            <h2 className={`${oswald.className} text-white text-3xl font-bold`}>THE LIBRARY</h2>
            <p className='text-[#9CA3AF] mb-9'>Twelve lifts covering every major muscle group.</p>
            <div className='grid grid-cols-3 gap-9'>
                {librariesData.map(library => <LibraryCard key={library.id} library={library}></LibraryCard>)}
            </div>
        </div>
    );
};

export default Library;