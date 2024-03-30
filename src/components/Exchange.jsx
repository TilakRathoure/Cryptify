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
        <div className='h-[70vh] w-full'>An Error has Occured</div>
      )
    }


  return (
    <div className='h-full w-full flex flex-wrap gap-10 p-12'>
      {loading? (
      <Loader/>
      ):(
      exchanges.map((i)=>(
        <ExchangeCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url} />
      )))
      }
    </div>
  )
}

const ExchangeCard = ({name,img,rank,url}) => {
  return (
    <a href={url} target='blank'>
    <div className='w-[200px] h-[250px] shadow-xl flex flex-col items-center content-center p-5 gap-5'>
      <img src={img} className='w-[100px] h-[100px]'/>
      <h2 className='text-[18px] w-full text-center'>{name}</h2>
      <p > {rank}</p>
    </div>
    </a>
  )
}


export default Exchanges