import Image from 'next/image'
import React from 'react'

interface ActionsCardProps {
    imagePath: string;
    imageAlt: string;
    title: string;
    text: string;
}

function ActionsCard({ imagePath, imageAlt, title, text }: ActionsCardProps) {
    return (
        <div className='flex flex-col items-center justify-center sm:4/5 md:3/5 lg:w-41/160 shadow-lg gap-6 lg:gap-9 p-8 text-center rounded-2xl'>
            <Image
                src={imagePath}
                alt={imageAlt}
                width={64}
                height={64}
            />
            <h1 className='text-3xl font-bold w-full break-words'>{title}</h1>
            <p className="w-2/3 md:w-3/5 lg:w-4/5 break-words">{text}</p>
            <button className='text-[14px] md:text-[18px] w-3/5 text-[#00A63E] font-bold bg-[#F9FAFB] rounded-2xl shadow-lg p-2 cursor-pointer hover:scale-105'>
                Comenzar
            </button>  
        </div>
    );
}

export default ActionsCard