import React from 'react'
import useCryptoHistory from '../services/useCryptoHistory'
import LineChart from './LineChart'


const CryptoDetails = () => {
    const history = useCryptoHistory();
    const priceData = history.map((item)=>({
        timestamp:item.timestamp,
        price:item.price,
    }));
    
  return (
    <div className='chart-container'>
        <LineChart data={priceData} />
        </div>
  )
}

export default CryptoDetails