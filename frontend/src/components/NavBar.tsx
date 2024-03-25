'use client'

import { BiMenu } from 'react-icons/bi';
import Box from './marquee';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Marquee from './marquee';

interface NavBarProps {
    userName: string;
}

export default function NavBar({ userName }: NavBarProps) {
    const truncatedUserName = userName.length > 8 ? userName.slice(0, 5) + '...' : userName;
    const links = [
        {
            href: "/",
            label: "Home",
        },
        {
            href: "/about",
            label: "About",
        },
        {
            href: "/contact",
            label: "Contact",
        },
        {
            href: "/blog",
            label: "Blog",
        }
    ];

    return (
        <nav className="text-base flex flex-row z-20 wh-8 mt-9 ml-9 mr-9 mb-9">
            <div className="w-[85%] mr-4 flex items-center bg-indigo-900">
                <Marquee />
            </div>
            <div className="w-[15%] flex items-center z-40 bg-indigo-900">
                <p className="pl-2 pr-2 pt-1 pb-1 text-white">
                    <span className="hidden sm:inline">{truncatedUserName}</span>
                    <span className="sm:hidden sm:content-center">Menu</span>
                </p>
            </div>
        </nav>
    );
}
