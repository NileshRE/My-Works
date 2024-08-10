import React from 'react'
import Enrolled from './Enrolled'

const Dashboard = () => {
  return (
    <div>
        <h3>Courses Enrolled</h3>
        <Enrolled pic={'https://img-c.udemycdn.com/user/100x100/33231436_2824_3.jpg'} Course={'The Complete 2023 Web Development Bootcamp'} Instructor={'Dr. Angela Yu'} percent={45} day={23} month={'Nov2023'} />
        <Enrolled pic={'https://img-c.udemycdn.com/course/100x100/764164_de03_5.jpg'} Course={'The Web Developer Bootcamp 2023'} Instructor={'Colt Steele'} percent={65} day={8} month={'Mar2023'} />
        <Enrolled pic={'https://img-c.udemycdn.com/user/100x100/38516954_b11c_3.jpg'} Course={'The Complete Web Developer in 2023: Zero to Mastery'} Instructor={'Andrei Neagoie'} percent={25} day={19} month={'Dec2022'} />
    </div>
  )
}

export default Dashboard