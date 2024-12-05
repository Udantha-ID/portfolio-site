import React from 'react'

const DownloadButton = ({
    title,
    icon,
    position,
    handelDownload,
    otherClasses,
}: {
    title: string;
    icon: React.ReactNode;
    position: 'left' | 'right';
    handelDownload: () => void;
    otherClasses?: string;
}) => {
    return (
        <button
            className={`px-8 py-3.5 flex items-center justify-center rounded-md bg-[#1ED760] font-bold text-black tracking-widest 
                uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200 ${otherClasses}`}
            onClick={handelDownload}
        >
            {position === 'left' && <span className="mr-2">{icon}</span>}
            {title}
            {position === 'right' && <span className="ml-2">{icon}</span>}
        </button>
    )
}

export default DownloadButton
