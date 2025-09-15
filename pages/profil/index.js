import React from 'react'
import Head from "next/head";
import SectionDivider from '@/components/layout/SectionDivider';
import DeskripsiProfilSection from '@/components/sections/DeskripsiProfilSection';
import GambaranUmumSection from '@/components/sections/GambaranUmumSection';

const Profil = () => {
  return (
    <>
    <Head>

    </Head>
    <main className='text-black'>
        <div className="max-w-[1240px] mx-auto">
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center pt-8'>Profil Padukuhan Manukan</h1>
        </div>
        <DeskripsiProfilSection />
        <SectionDivider />
        <GambaranUmumSection />
    </main>
      
    </>
  )
}

export default Profil
