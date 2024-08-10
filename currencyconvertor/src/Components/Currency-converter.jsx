import { useEffect, useState } from 'react'
import { FaRegStar, FaStar  } from "react-icons/fa";

const CurrencyConverter = () => {
    const [currencies, setCurrencies] = useState([]);
    const [amount, setAmount] = useState(1);
    const [currFrom, setCurrFrom] = useState("USD");
    const [currTo, setCurrTo] = useState("INR");
    const [converting, setConverting] = useState(false);
    const [convertedAmount, setConvertedAmount] = useState([]);
    const [fav, setFav] = useState(JSON.parse(localStorage.getItem("favourites")) || ["INR", "USD"]);

    const fetchCurrencies = async()=>{
        const res = await fetch("https://api.frankfurter.app/currencies")
        const data = await res.json();
        setCurrencies(Object.keys(data));
    }

    const handleCurrencyConvert= async()=>{
        if(!amount) return;
        setConverting(true);
        try{
        const resp = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currFrom}&to=${currTo}`)
        const respData = await resp.json();
        setConvertedAmount(Object.values(respData.rates))
        }catch(error){
            console.error(error);
        }finally{
            setConverting(false);
        }
    }

    const handleFav=(curr)=>{
        let updatedFavs = [...fav]
        if(fav.includes(curr)){
          updatedFavs = updatedFavs.filter((u)=>u!==curr)
        }else{
            updatedFavs.push(curr);
        }
        setFav(updatedFavs);
        localStorage.setItem("favourites", JSON.stringify(updatedFavs));
    }

    useEffect(()=>{
        fetchCurrencies();
    },[])


  return (
    <>
    <div className='max-w-xl mx-auto my-10 p-5 rounded-lg bg-white shadow-lg border border-indigo-600'>
        <h2 className='text-3xl font-semibold text-indigo-700'>Currency Converter</h2>
        <div className='my-8 flex justify-evenly items-center gap-2 relative'>
            <select value={currFrom} onChange={(e)=>setCurrFrom(e.target.value)}
            className='w-full border p-2 rounded-md focus:ring-2 focus:ring-indigo-500'>
                {fav.map((f)=><option key={f} className='bg-indigo-200' value={f}>{f}</option>)}
                <hr />
                {currencies?.filter(c=>!fav.includes(c))?.map((curr)=>(
                    <>
                    <option key={curr} value={curr}>{curr}
                    </option>
                     </>
                ))}
            </select>
            <button className='absolute inset-y-0 max-[640px]:left-[8rem] sm:left-[12rem]' onClick={() => handleFav(currFrom)}>
              { fav.includes(currFrom) ? <FaStar color='orange' /> : <FaRegStar color='orange' />}
                      </button>
            <button onClick={()=>{
                setCurrFrom(currTo);
                setCurrTo(currFrom);
            }} className='p-1 border-2 text-sm border-indigo-500 rounded-md'>Swap</button>
            <select value={currTo} onChange={(e)=>setCurrTo(e.target.value)} className='w-full border p-2 rounded-md focus:ring-2 focus:ring-indigo-500'>
            {fav.map((f)=><option key={f} className='bg-indigo-200' value={f}>{f}</option>)}
            <hr />
                {currencies?.filter(c=>!fav.includes(c))?.map((curr1)=>(
                    <option key={curr1} value={curr1}>{curr1}</option>
                ))}
            </select>
        </div>
        <div>
            <label htmlFor='amount' className='my-2 inline-block'>Amount:</label>
            <input id="amount" value={amount} onChange={(e)=>setAmount(e.target.value)}
             type='number' 
             className='w-full p-2 border border-gray-200 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500' />
        </div>
        <div className='flex justify-end my-4'>
            <button onClick={handleCurrencyConvert} className={`px-5 py-2 text-white bg-indigo-700 rounded-md hover:bg-indigo-500
            focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-1 ${converting ? "bg-gradient-to-r from-purple-500 to-pink-500" : ""}`}>Convert</button>
        </div>
        <div className='text-xl font-semibold p-2 border rounded-md text-green-500'>
            Converted Amount: {(currTo==="INR") ? ` ₹ ${convertedAmount} ` : convertedAmount}
        </div>
    </div>
    </>
  )
}

export default CurrencyConverter

