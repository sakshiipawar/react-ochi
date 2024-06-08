import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-20 gap-5'>
        <div className='cardcontainer h-96 w-1/2'>
        <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"></img>
            <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019-2020</button>
        </div>
        </div>
        <div className='cardcontainer flex gap-5 w-1/2 h-96'>
        <div className='card relative flex items-center justify-center rounded-xl  w-full h-full bg-[#192826]'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"></img>
        <button className='absolute px-2 py-1 rounded-full border-2 left-10 bottom-10 text-xs'>RATINGS 5.0 ON CLUTCH</button>
        </div>
        <div className='card relative flex items-center justify-center rounded-xl  w-full h-full bg-[#192826]'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"></img>
        <button className='absolute px-2 py-1 rounded-full border-2 left-10 bottom-10 text-xs'>BUSSINESS BOOTCAMP ALUMINI</button>
        </div>
        </div>
        </div>

        

        


        

        

   
  )
}

export default Cards
