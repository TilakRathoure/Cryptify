import React from 'react'
import img1 from '../assests/github.png'
import img2 from '../assests/linkedin.png'


const Footer = () => {
  return (
    <div className='py-4 h-[30vh] bg-black custom px-12 overflow-hidden'>
        <h1 className='pb-1 text-white text-xl border-b-2 border-white w-[70px]'>
            About
        </h1>
        <div className='mt-5 flex justify-between'>
            <div className=' text-white text-lg w-[70%]'>
            
Cryptify: Your go-to hub for cryptocurrency trading. Explore top trading websites, track prices, rankings, and trends with real-time updates and intuitive charts. Join us and dive into the world of crypto trading today!
            </div>
            <div className='text-white text-lg flex flex-col mr-[50px]'>
              <p>Created By</p>
              <p>Tilak Rathoure</p>
              <div className='flex gap-2 mt-2'>
              <a href="https://github.com/TilakRathoure"><img src={img1} alt="Github" className='bg-white rounded-sm w-[25px] hover:translate-y-[-2px]'/></a>
              <a href="https://www.linkedin.com/in/tilakrathoure/"><img src={img2} alt="LinkedIn" className='w-[27px] hover:translate-y-[-2px] ' /></a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer