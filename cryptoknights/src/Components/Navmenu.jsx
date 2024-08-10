import React, { useEffect, useState } from 'react'
import { logo } from '../Utils/constants'
import { Link } from 'react-router-dom'

const Navbar= () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(()=>{
      const handleResize = ()=>setScreenSize(window.innerWidth);
      window.addEventListener('resize', handleResize);
      handleResize();

      return()=>window.removeEventListener('resize', handleResize);
  },[])

    useEffect(()=>{
        if(screenSize < 768){
          setActiveMenu(false);
        }else{
          setActiveMenu(true);
        }
    },[screenSize])

return(
  <div className="nav-container">
    <img className="logo" src={logo} alt="logo"/>
    
    <ul className="nav-items">
      <li><Link className="link" to="/">Home</Link></li>
      <li><Link className="link" to="/cryptocurrency">Cryptocurrencies</Link></li>
      <li><Link className="link" to="/exchanges">Exchanges</Link></li>
      <li><Link className="link" to="/news">News</Link></li>
    </ul>
    
  </div>
)
}

export default Navbar
    