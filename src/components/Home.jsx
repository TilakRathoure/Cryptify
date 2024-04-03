import React from 'react'
import img1 from "../assests/1_VqKuTe9DmMZZRT0ERH2t4Q__1_-removebg.png"



const Home = () => {

  const list=[{name:"Real-time"},{name:"Comprehensive"},{name:"Insightful"}]

  return (
    <div className='bg-black px-5 h-[58vh] pt-10'>
      <h1 className='custom w-full text-center text-white text-5xl uppercase mb-[-15px] '>Cryptify</h1>
      <div id="move" className='py-[0px] w-full flex h-[200px] justify-center items-center relative '>
        <div>
          <img src={img1} alt="" className=''/>
      </div>
        <img src={img1} alt="" className='absolute top-[75px] opacity-25 blur-sm' />
      </div>
      <div className='text-white w-full mt-5 '>
        <ul className='flex w-full justify-around'>{list.map((e)=>(
          <li className='border-2 border-white rounded-full p-4 z-5'>{e.name}</li>
        ))}</ul>
      </div>
    </div>

  )
}

export default Home