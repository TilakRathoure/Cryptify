import React from 'react'
import {TailSpin as Loadering} from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='bg-black h-[58vh] w-full'>
	<Loadering color="#00BFFF" height={300} width="100%" />

    </div>
  )
}

export default Loader