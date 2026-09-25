import Image from 'next/image';
import React from 'react';

 
const LibraryDetailsPage = async({params}) => {
    const {libraryId} = await params;

    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${libraryId}`);
    const library = await res.json();
    return (
        <div className='text-white'>
            <div>
                <Image src={library.image} width={300} height={200} alt={`${library.name} Image`}></Image>
            </div>
            <div>
                <h2>{library.name}</h2>
                <p>{library.description}</p>
                {library.muscleGroups.map((muscle) => ( 
                        <span key={muscle} 
                        className="bg-[#C2F800] text-black font-bold px-3 py-1 rounded-full" 
                        > {muscle} 
                        </span> ))}
                        
            </div>
        </div>
    );
};

export default LibraryDetailsPage;