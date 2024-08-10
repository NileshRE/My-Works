import React from 'react'
import useExchange from '../services/useExchange'
import millify from 'millify';

const Exchanges = () => {
  const exchanges = useExchange();
  console.log(exchanges)
  return (
    <>
    <div className='exchange-header'>
      <p></p>
    <p>Exchange</p>
    <p>Country</p>
    <p>Trade Volume</p>
    </div>
    {exchanges.map((exchange) => (
    <div className='exchange-card' key={exchange.id}>
      <img src={exchange.image} alt='name'/>
      <p>{exchange.name}</p>
      <p>{exchange.country}</p>
      <p>{millify(exchange.trade_volume_24h_btc)}</p>
      </div>
    ))};
      </>
  )
}

export default Exchanges