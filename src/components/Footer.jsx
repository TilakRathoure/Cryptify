import React from 'react'


const Footer = () => {
  return (
    <div className='pt-4 h-[30vh] bg-black custom px-12'>
        <h1 className='pb-1 text-white text-xl border-b-2 border-white w-[70px]'>
            About
        </h1>
        <div className='mt-5 flex gap-10'>
            <div className=' text-white text-lg w-[70%]'>
            Track real-time cryptocurrency prices and view historical price charts for each coin on our website. Stay informed and make smarter investment decisions with ease.
            </div>
            <div className='text-white text-lg flex flex-col'>
              <p>Created By</p>
              <p>Tilak Rathoure</p>
            </div>
        </div>
    </div>
  )
}

export default Footer