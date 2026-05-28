"use client";

import Image from 'next/image';
import {useRouter} from 'next/navigation';
import logo from '../../public/logo.png'
import img1 from '../../public/body.png'
import img2 from '../../public/egg.png'
import img3 from '../../public/a2.gif'
import img4 from '../../public/a3.gif'
import img5 from '../../public/discord.gif'
import img6 from '../../public/b4.gif'
import img7 from '../../public/b2.gif'
import img8 from '../../public/b1.gif'
import img9 from '../../public/b3.gif'
import img10 from '../../public/b5.gif'


export default function HomePage() {

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
      <div className="px-16 pt-8 pb-28 space-y-16" >
        <div className="flex h-58 px-32">
          <div className="w-1/2 flex justify-center" >
            <div className="w-106 bg-[#061e20] text-white rounded-lg p-6" >
              <p className="font-bold text-lg text-center tracking-widest">We Hatched here!</p>
              <p className="text-center text-xl mt-4" style={{ fontFamily: "NineByFive" }}>Get ready to embark on your Lumions adventure today! Acquire your very own Lumionsi Egg and hatch your digital pet. Train, battle, and care for your trusty companions on the blockchain. So, what are you waiting for? Take the first step on your Lumions journey today!”</p>
            </div>
          </div>
          <div className="w-1/2" >
            <Image src={img1} alt="Lumions" className="h-60 w-96 mx-auto" />
          </div>
        </div>

        <div>
          <p className="text-center font-bold text-xl tracking-widest">Witness the Lumions Magic</p>
          <p className="text-center text-2xl mt-4 tracking-wider" style={{ fontFamily: "NineByFive" }}>Experience the thrill as Lumions Eggs hatch into vibrant companions, ready to join you on your adventures. Transactions within our ecosystem are seamlessly powered by Solana’s lightning-fast blockchain. Your assets are safeguarded against manipulation or fraud, ensuring a secure and efficient experience. Join us and immerse yourself in the enchanting world of Lumions. Start your journey now and watch the magic unfold!</p>
        </div>

        <div className="flex justify-center items-center gap-20" >
          <div className="space-y-4" >
            <div className="border-2 border-black" >
              <Image src={img8} alt="Lumions Magic" className="h-96 w-96" />
            </div>
            <div className="border-2 border-black" >
              <Image src={img7} alt="Lumions Magic" className="h-96 w-96" />
            </div>
          </div>
          <div>
            <div>
              <Image src={img10} alt="Lumions Magic" className="h-72 w-72" />
              <p className="text-center font-bold text-lg">Professor Lily</p>
            </div>
          </div>
          <div className="space-y-4" >
            <div className="border-2 border-black" >
              <Image src={img9} alt="Lumions Magic" className="h-96 w-96" />
            </div>
            <div className="border-2 border-black" >
              <Image src={img6} alt="Lumions Magic" className="h-96 w-96" />
            </div>
          </div>
        </div>

        <div>
          <p className="text-center font-bold text-xl tracking-widest">Key steps to glory!</p>
          <p className="text-center text-sm bg-[#061e20] text-white px-16 py-4 mt-4 tracking-wider leading-relaxed rounded-xl">Start your Pokegochi journey today by following these simple steps and unlock a world of adventure with your digital companions!</p>
        </div>

        <div className="flex justify-between px-12 text-sm">
          <div className="w-1/4 flex flex-col items-center text-center gap-6" >
            <p>Mint your Eggs</p>
            <Image src={img2} alt="Lumions Egg" className="h-48 w-40" />
            <p>All the Lumions Companions start as a Baby Egg</p>
          </div>
          <div className="w-1/4 flex flex-col items-center text-center gap-6" >
            <p>Hatch Them</p>
            <Image src={img3} alt="Lumions Hatching" className="h-48 w-48" />
            <p>After Acquire your Lumions Eggs head towards the hatching machine to hatch your eggs</p>
          </div>
          <div className="w-1/4 flex flex-col items-center text-center gap-6" >
            <p>Evolve N Battle</p>
            <Image src={img4} alt="Lumions Evolution" className="h-48 w-48" />
            <p>Explore the Lumions evolving stages, Battle earn XP and level up your companion</p>
          </div>
        </div>

        <div className="text-center space-y-8" >
          <p>How to WL</p>
          <div className="flex flex-col items-center gap-6" >
            <p>Join Discord</p>
            <Image src={img5} alt="Discord" className="h-48 w-48" />
          </div>
        </div>

        <div className="text-center text-sm" >
          <p>Try to get access to the Lumions official Discord server and solve the codes. Solving each code will earn you one GTD spot, meaning one guaranteed companion of your chosen species. Each player is limited to one companion only. Once all 100 codes are solved, the chance to get a GTD companion may be gone.</p>
        </div>
      </div>
    </div>
  );
}