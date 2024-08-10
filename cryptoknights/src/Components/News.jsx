import React from 'react'
import useCryptoNewsAPI from '../services/useCryptoNews'
import { useSelector } from 'react-redux';

const News = ({simplified}) => {
  const count = simplified ? 6 : 50;

  useCryptoNewsAPI(count);
  const Newslist = useSelector((store)=>store?.coins?.news)

  return (
    <div className='news-container'>
      {Newslist && Newslist.length > 0 ? (
      Newslist?.map((news)=>(
        <div className='news-card'>
        <div className='news-heading'>
          <p className='news-head'>{news.title}</p>
          </div>
          <div className=''>
            <p className='news-title'>{news.description}</p>
            <p className='news-time'>{news.date}</p>
          </div>
          </div>
      ))
      ) : (
        <p>News Loading... Please refresh the Page...</p>
      )}
    </div>
      )
}

export default News