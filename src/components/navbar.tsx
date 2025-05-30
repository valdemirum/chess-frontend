'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
// import { Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const router = useRouter();

    const handleHomeClick = () => {
        router.push('/');
    };

    return (
        <nav className="flex items-center justify-start p-4">
            <Link
                href={'https://chessgame-85747.vercel.app/'}
                className="flex items-center"
            >
                <button
                    onClick={handleHomeClick}
                    className="w-full md:w-min bg-[#4682a8] text-white px-4 py-2 rounded-md hover:bg-[#6d98ba] transition-colors duration-300 cursor-pointer"
                >
                    {/* <Home className="mr-2" /> */}
                    Home
                </button>
            </Link>
            <Link
                href={'https://github.com/valdemirum/chess-frontend'}
                className="flex items-center ml-auto"
            >
                <Image
                    src="/github.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="w-10 h-10"
                />
            </Link>
        </nav>
    );
};

export default Navbar;
