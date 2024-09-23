import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { server } from '..';
import Loader from './Loader'

const Exchanges = () => {
    const [exchanges,setexchanges]=useState([]);
    const [loading,setloading]=useState(true);
    const [error,seterror]=useState(false);


    useEffect(()=>{
        const fetchapi=async ()=>{
            try{
            const {data}=await axios.get(`${server}/exchanges`);
            setexchanges(data);
            setloading(false);
            }catch(error){
                seterror(true);
                setloading(false);
            }
        }
        fetchapi();
    },[]);


    if(error){
      return(
        <div className='custom h-[58vh]'>
        <h1 className='text-xl mt-[10px]'>An Error has Occured while fetching data, try changing page or reloading!</h1>
        </div>
      )
    }


  return (
    <div className='custom'>
      {loading? (
      <Loader/>
      ):(
        <div>

        <h1 className='bg-black p-12 text-white text-[18px] border-2 border-white'>Discover top cryptocurrency trading platforms. Click to access each site directly. Stay informed, trade smarter with Cryptify.</h1>


        <div className='h-full w-full flex flex-wrap gap-10 p-12 justify-center custom bg-black'>

      {exchanges.map((i)=>(
        <ExchangeCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url} />

      ))}
      </div>

      </div>
      )
      }
    </div>
  )
}

const ExchangeCard = ({name,img,rank,url}) => {
  return (
    <a href={url} target='blank'>
    <div className='border-t-2 border-t-white rounded-xl w-[200px] h-[250px] shadow-lg  flex flex-col items-center content-center p-5 gap-5 text-white shadow-white'>
      <img src={img} alt='nice' className='w-[100px] h-[100px]'/>
      <h2 className='text-[18px] w-full text-center'>{name}</h2>
      <p > {rank}</p>
    </div>
    </a>
  )
}


export default Exchanges