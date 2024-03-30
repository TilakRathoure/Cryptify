import React from 'react'
import { server } from '..';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Loader from './Loader';
import { Link } from 'react-router-dom';

const Coins = () => {

  const [exchanges,setexchanges]=useState([]);
  const [loading,setloading]=useState(true);
  const [error,seterror]=useState(false);
  const [currency,setcurrency]=useState("inr");
  const [page,setpage]=useState(1);

  const btns = new Array(132).fill(1);

  const symbol = 
  
  currency==="inr"? "₹" : currency === "eur"  ? "€" : "$";


  const currencyList=[{name:"Indian Rupee (INR)" , value:"inr" ,"check":"currency=='inr'"},
{name:"Euro (EUR)" ,"check":"currency=='eur'", value:"eur"},{name:"United States Dollar (USD)" , value:"usd","check":"currency=='usd'"}]

const currencyhandler=(e)=>{
  setcurrency(e.target.value)
}





  useEffect(()=>{
      const fetchapi=async ()=>{
          try{
          const {data}=await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
          setexchanges(data);
          setloading(false);
          }catch(error){
              seterror(true);
              setloading(false);
          }
      }
      fetchapi();
  },[currency,page]);



  if(error){
    return(
      <div className='h-[60vh]'>
        <h1 className='text-3xl'>An error has occured while fetching data</h1>
      </div>
    )
  }



  return (
    <div className=''>
      {loading? (
      <Loader/>
      ) : (


        <>

        <div className='flex gap-5 m-10'>
          {currencyList.map((i)=>(
            <div className=''>
              <label>
                <input type="radio" value={i.value} className='mr-2' onChange={currencyhandler} checked={eval(i.check)}/>
                {i.name}
              </label>
              </div>
          ))}
        </div>



        <div className='h-full w-full flex flex-wrap gap-10 p-12'>
      {exchanges.map((i)=>(
        <Coincard 
        id={i.id}
        key={i.id}
        name={i.name}
        price={i.current_price}
        img={i.image}
        symbol={i.symbol}
        currencySymbol={symbol}/>
      ))}
      </div>


      <div className='flex flex-nowrap px-20'>
        {btns.map((e,i)=>(
          <div className=' w-20 border-2 border-grey-200 cursor-pointer' onClick={()=>{setpage(i+1)}}>
            {i+1}
          </div>
        ))}
      </div>



      </>

      )}
    </div>
  )
}

const Coincard = ({id,name,price,img,currencySymbol}) => {
  return (
    <Link to={`/coin/${id}`}>
    <div className='w-[200px] h-[250px] shadow-xl flex flex-col items-center content-center p-5 gap-5'>
      <img src={img} className='w-[100px] h-[100px]'/>
      <h2 className='text-[18px] w-full text-center'>{name}</h2>
      <p >{currencySymbol} {price}</p>
    </div>
    </Link>
  )
}


export default Coins