import React from 'react'
import useCryptoAPI from '../services/useCryptoAPI'
import { useSelector } from 'react-redux';
import millify from 'millify';
import {CryptoCurrency, News} from './index'
import { Link } from 'react-router-dom';
import useCryptoNewsAPI from '../services/useCryptoNews';


const Homepage = () => {
  useCryptoAPI(10);
  useCryptoNewsAPI(6);
  const details = useSelector((store)=>store?.coins.coins?.stats)

  return (
    <>
    <div className='stats-container'>
        <h3>Global Crypto Stats</h3>
        <div className='stats'>
        <div className='stats-item'>
          <p className='stats-heading'>Total Cryptocurrencies</p>
          <p>{millify(details?.totalCoins)}</p>
         </div> 
         <div className='stats-item'>
          <p className='stats-heading'>Total Exchanges</p>
          <p>{details?.totalExchanges}</p>
         </div>
         <div className='stats-item'>
          <p className='stats-heading'>Total Market Cap</p>
          <p>{millify(details?.totalMarketCap)}</p>
         </div>
         <div className='stats-item'>
          <p className='stats-heading'>Total 24H Volume</p>
          <p>{millify(details?.total24hVolume)}</p>
         </div>
         <div className='stats-item'>
          <p className='stats-heading'>Total Markets</p>
          <p>{millify(details?.totalMarkets)}</p>
         </div>
    </div>
    </div>
    <div className='stats-container'>
    <div className='headings'>
    <h3>Top 10 Cryptocurrencies in the World</h3>
    <p><Link className='more' to='/cryptocurrency'>Show More</Link></p>
    </div>
    <CryptoCurrency simplified />
  </div>
  <div className='stats-container'>
  <div className='headings'>
    <h3>Latest Crypto News</h3>
    <p><Link className='more' to='/news'>Show More</Link></p>
    </div>
    <News simplified />
  </div>
  </>
  )
}

export default Homepage