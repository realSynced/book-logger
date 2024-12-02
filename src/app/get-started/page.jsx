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
        <div className="">
            <h1>Let's get started, yeah?</h1>
            <button className="bg-accent w-[10rem] px-3 py-2 rounded-xl">Yeah!</button>
        </div>
      </main>
    </div>
  );
}


