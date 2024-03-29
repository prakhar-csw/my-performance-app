import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";

import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";

const TabSection = dynamic(() => import('../components/TabSection'), {
  loading: () => <p>Loading...</p>,
  ssr:true,
})
const TopSection = dynamic(() => import('../components/TopSection'), {
  loading: () => <p>Loading...</p>,
  ssr:true,
})

// import TabSection from "./components/TabSection";
// import TopSection from "./components/TopSection";

const inter = Inter({ subsets: ["latin"],display: 'swap', });

export default function Home() {
  return (
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <TopSection/>
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.webp"
            alt="Next.js Logo"
            width={180}
            height={37}
            // priority
          />
          <Button variant='outline' size='sm'>Hit me</Button>
        </div>
        <TabSection/>
      </main>
  );
}
