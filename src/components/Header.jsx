import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='sticky top-0'>
    <div className='w-full h-[9vh] bg-black'>
        <ul className='flex h-full items-center gap-4'>
            <li className='ml-3 text-white text-xl'>
                <Link to={"/"}>Home</Link>
            </li>
            <li className='text-white text-xl'>
                <Link to={"/exchange"}>Exchange</Link>
            </li>
            <li className='text-white text-xl bolder'>
                <Link to={"/coins"}>Coins</Link>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Header