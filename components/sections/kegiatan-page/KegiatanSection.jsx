import React from 'react'
import KegiatanCard from '@/components/ui/KegiatanCard'

const KegiatanSection = () => {
  return (
    <section id='kegiatan' className='py-12 px-4 lg:px-16 bg-white'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <KegiatanCard image={null} />
                <KegiatanCard image={null} />
                <KegiatanCard image={null} />
                <KegiatanCard image={null} />

            </div>
        </div>
      
    </section>
  )
}

export default KegiatanSection
