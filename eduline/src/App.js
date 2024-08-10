import React from 'react'
import './index.css'
import Courselist from './Courselist'
import CourseDetails from './CourseDetails'
import Dashboard from './Dashboard'
import {Routes, Route, Link} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <div className='logo-container'>
        <img className='logo' src='logo.png' alt='logo'/>
        <ul className='nav-items'>
          <li className='list'><Link to="/">Home</Link></li>
          <li className='list'><Link to="/dashboard">Dashboard</Link></li>
        </ul>
        </div>
        <Routes>
          <Route exact path='/' Component={Courselist} />
          <Route exact path='/CourseDetails/:id' Component={CourseDetails} />
          <Route exact path='/dashboard' Component={Dashboard} />
        </Routes>
    </div>
  )
}

export default App