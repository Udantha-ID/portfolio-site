// OpenButton.tsx
import React from 'react'

const OpenButton = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
}: {
    title: string;
    icon: React.ReactNode;
    position: 'left' | 'right';
    handleClick: () => void;
    otherClasses?: string;
}) => {
    return (
        <button
            className={`px-8 py-3.5 flex items-center justify-center rounded-md font-bold text-black tracking-widest 
                uppercase transform hover:scale-105 transition-colors duration-200 ${otherClasses}`}
            onClick={handleClick}
        >
            {position === 'left' && <span className="mr-2">{icon}</span>}
            {title}
            {position === 'right' && <span className="ml-2">{icon}</span>}
        </button>
    )
}

export default OpenButton
