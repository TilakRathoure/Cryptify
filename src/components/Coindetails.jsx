import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../index";
import Loader from "./Loader";
import Chart from "./Chart"


const Coindetails = () => {

        const params = useParams();
        const [coin, setCoin] = useState({});
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(false);
        const [currency, setcurrency] = useState("inr");
        const [days, setDays] = useState("24h");
        const [chartArray, setChartArray] = useState([]);


        const details=[{name:"Max Supply" ,value:"coin.market_data.max_supply"},{name:"Circulating Supply" ,value:"coin.market_data.circulating_supply"},{name:"Market Cap" ,value:"coin.market_data.market_cap[currency]"},{name:"All Time Low" ,value:"coin.market_data.atl[currency]"},
        {name:"All time High" ,value:"coin.market_data.ath[currency]"}]
      
        const currencySymbol =
          currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
        
        
          const currencyList=[{name:"Indian Rupee (INR)" , value:"inr" ,"check":"currency=='inr'"},
        {name:"Euro (EUR)" ,"check":"currency=='eur'", value:"eur"},{name:"United States Dollar (USD)" , value:"usd","check":"currency=='usd'"}]
        
        const currencyhandler=(e)=>{
          setcurrency(e.target.value)
        }

          
  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];

          const switchChartStats = (key) => {
            switch (key) {
              case "24h":
                setDays("24h");
                setLoading(true);
                break;
              case "7d":
                setDays("7d");
                setLoading(true);
                break;
              case "14d":
                setDays("14d");
                setLoading(true);
                break;
              case "30d":
                setDays("30d");
                setLoading(true);
                break;
              case "60d":
                setDays("60d");
                setLoading(true);
                break;
              case "200d":
                setDays("200d");
                setLoading(true);
                break;
              case "1y":
                setDays("365d");
                setLoading(true);
                break;
              case "max":
                setDays("max");
                setLoading(true);
                break;
        
              default:
                setDays("24h");
                setLoading(true);
                break;
            }
          };


    useEffect(() => {
        const fetchCoin = async () => {
          try {
            const { data } = await axios.get(`${server}/coins/${params.id}`);
    
            const { data: chartData } = await axios.get(
              `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
            );
            setCoin(data);
            setChartArray(chartData.prices);
            setLoading(false);
          } catch (error) {
            setError(true);
            setLoading(false);
          }
        };
        fetchCoin();
      }, [ currency, days]);



      if(error){
        return(
          <div className='custom h-[58vh]'>
          <h1 className='text-xl'>An Error has Occured while fetching data, try reloading!</h1>
        </div>
        )
      }

  return (
    <div className="bg-black text-white">
        {loading? <Loader/> : <>


        <div className='flex gap-5 p-10 custom'>
          {currencyList.map((i)=>(
            <div className=''>
              <label>
                <input type="radio" value={i.value} className='mr-2' onChange={currencyhandler} checked={eval(i.check)}/>
                {i.name}
              </label>
              </div>
          ))}
        </div>


        <div className="custom">
          <Chart arr={chartArray} currency={currencySymbol} days={days}/>
        </div>


        <div className="p-4 flex gap-2 custom">
            {btns.map((i) => (
              <div className="w-[40px] h-[30px] border-2 border-grey-200 text-center cursor-pointer" onClick={()=>switchChartStats(i)}>
                {i}
                </div>
            ))}
          </div>


        <div className="flex flex-col gap-4 p-16 items-start custom">
  <p className="text-sm self-center opacity-70">
    Last Updated On {new Date(coin.market_data.last_updated).toString().split("GMT")[0]}
  </p>

  <img src={coin.image.large} alt="Coin Image" className="w-16 h-16 object-contain" />

  <div className="custom">
    <h2>{coin.name}</h2>
    <p>
      {currencySymbol}
      {coin.market_data.current_price[currency]}
    </p>
    <p className={`${coin.market_data.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
      {coin.market_data.price_change_percentage_24h > 0 ? "+" : "-"}
      {coin.market_data.price_change_percentage_24h}%
    </p>
  </div>

  <span className="text-2xl bg-white text-black px-4 py-2 custom">
    #{coin.market_cap_rank}
  </span>

  <div className="custom">
    <p>High: {currencySymbol}{coin.market_data.high_24h[currency]}</p>
    <p>Low: {currencySymbol}{coin.market_data.low_24h[currency]}</p>
  </div>
</div>


<div className="custom">
    <CustomBar high={coin.market_data.high_24h[currency]}
              low={coin.market_data.low_24h[currency]}
              current={coin.market_data.current_price[currency]} />
</div>


<div className="w-full p-4 custom">
  <div className="grid gap-4">

    {details.map((i)=>(
        <div className="flex items-center">
        <p className="font-bold">{i.name}</p>
        <p className="ml-2">{eval(i.value)}</p>
      </div>
    ))}
  </div>
</div>






        </>
        }
    </div>
  )
}

const CustomBar = ({ current, high, low }) => {
  const final = ((current - low) / (high - low)) * 100;

  return (
    <div className="w-full">
      <div className="bg-teal-500 h-4 rounded-full">
        <div className="bg-white h-full rounded-full" style={{ width: `${final}%` }}></div>
      </div>
      <div className="flex justify-between w-full">
        <span className="px-2 py-1 bg-red-500 text-white">{low}</span>
        <span className="text-sm">24H Range</span>
        <span className="px-2 py-1 bg-green-500 text-white">{high}</span>
      </div>
    </div>
  );
};


  

export default Coindetails