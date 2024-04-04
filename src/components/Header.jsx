import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

    const [selected,UseSelect]=useState("Home");

  return (
    <div className='sticky top-0 custom font-light z-20'>
    <div className='w-full h-[12vh] flex justify-between items-center bg-black px-12'>
        <div className='text-white uppercase text-xl'>Cryptify.</div>
        <ul className='flex h-full items-center gap-4'>
            <li className={`ml-3 text-xl ${selected=="Home"? "text-yellow-300" : "text-white"}`} onClick={()=>{UseSelect("Home")}}>
                <Link to={"/"}>Home</Link>
            </li>
            <li className={`text-xl ${selected=="Exchange"? "text-yellow-300" : "text-white"}`} onClick={()=>{UseSelect("Exchange")}}>
                <Link to={"/exchange"}>Exchange</Link>
            </li>
            <li className={`text-xl ${selected=="Coins"? "text-yellow-300" : "text-white"}`} onClick={()=>{UseSelect("Coins")}}>
                <Link to={"/coins"}>Coins</Link>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Header