'use client'

import Image from "next/image"
import { useRouter } from "next/navigation";
import { windsong } from "../assets/fonts";
import { Book } from "../assets/images";

// color palette: https://colorhunt.co/palette/e4e0e1d6c0b3ab886d493628
// shades: https://maketintsandshades.com/#AB886D

export default function Home() {
  const router = useRouter();
  return (

    <div className="flex justify-center w-full min-h-screen p-5">
      <main className="flex flex-col w-full items-center space-y-8">
        <div className="w-full flex flex-col items-center">
          <div className="text-center leading-3">
            <h1 className="text-primary text-8xl font-bold drop-shadow-glow ">Book</h1>
            <h1 className={`${windsong.className} text-black text-8xl font-extrabold -mt-12`}>Repository</h1>
          </div>
          <div className="fixed  w-full h-full flex items-center justify-center top-12">
            <Image src={Book} width={800} height={1400} alt="Book" layout="fixed" className="z-0 opacity-10" />
          </div>
        </div>
        <div className="flex flex-col text-center text-lg">
          <h1 className="mb-4">Welcome to the ultimate Book Repository!</h1>
          <h1>Here you can log the books you've read,</h1>
          <h1>want to read or books you're simply interested in.</h1>
        </div>
        
        <div className="z-10 w-full  flex items-center justify-center rounded-3xl p-5">
          <button onClick={() => router.push('/get-started')} className="hover:cursor-pointer w-[10rem] bg-accent px-x py-2 rounded-xl transition-all duration-200 ease-in-out hover:drop-shadow-glow hover:-translate-y-1">Get Started</button>
        </div>
      </main>
    </div>
  );
}


