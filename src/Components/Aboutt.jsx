import React from 'react'

function Aboutt() {
  return (
    <div className='w-full p-10 bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl text-black'>
        <h1 className=' p-10 font-neue-montreal text-5xl leading-[4.5vw]' >Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='w-full flex gap-5 border-t-[1px] pt-5 mt-16 border-[#a1b562]'>
            <div className='w-1/2'>
            <h1 className='text-4xl'>Our approach:</h1>
            <button className='uppercase flex gap-5 items-center px-10 py-4 bg-zinc-900 mt-5 rounded-full text-white'>Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div></button></div>
            <div className='w-1/2 h-[60vh] rounded-2xl bg-[#b0c859]'>
            <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    ></img></div>
        

            
        </div>
      
    </div>
  )
}

export default Aboutt
