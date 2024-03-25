'use client'

import Marquee from './marquee';

interface NavBarProps {
    userName: string;
}

export default function TopBar({ userName }: NavBarProps) {
    const truncatedUserName = userName.length > 8 ? userName.slice(0, 5) + '...' : userName;

    return (
        <nav className="max-w-1440 text-base flex flex-row z-30 wh-8 mt-9 ml-9 mr-9 mb-9">
            <div className="w-[85%] mr-4 flex items-center bg-stone-800">
                <Marquee />
            </div>
            <div className="w-[15%] flex items-center z-40 bg-stone-800">
                <p className="pl-2 pr-2 pt-1 pb-1 text-stone-100">
                    <span className="hidden sm:inline">{truncatedUserName}</span>
                    <span className="sm:hidden sm:content-center">Menu</span>
                </p>
            </div>
        </nav>
    );
}
