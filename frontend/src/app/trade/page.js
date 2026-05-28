"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logo from '../../../public/logo.png'
import soon from '../../../public/soon.jpeg'

export default function TradePage() {

    let router = useRouter();

    return (
        <div className="min-h-screen bg-[#dcf6c9] text-[#061e20]" style={{ fontFamily: "PressStart" }}>
            <nav className="flex items-center justify-between p-4 bg-[#447a60] px-16 text-white">
                <Image src={logo} alt="Lumions Logo" className="h-10 w-36 cursor-pointer" onClick={() => router.push('/')} />
                <div className="flex space-x-16">
                    <p className="cursor-pointer" onClick={() => window.open('https://x.com/lumionseth', '_blank')} >X</p>
                    <p className="cursor-pointer" onClick={() => router.push('/trade')} >Trade</p>
                    <p className="cursor-pointer" onClick={() => router.push('/leaderboard')} >Leaderboard</p>
                </div>
            </nav>
            <div className="flex flex-col items-center justify-center h-[80vh]" >
                <Image src={soon} alt="Lumions Logo" className="w-1/2" />
                <button className="mt-8 px-6 py-3 bg-[#447a60] text-white rounded-lg hover:bg-[#3b654d] transition-colors duration-300 cursor-pointer" onClick={() => router.push('/')}>Go Back Home</button>
            </div>
        </div>
    )
}