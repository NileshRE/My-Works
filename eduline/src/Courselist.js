import millify from 'millify';
import React, { useState } from 'react'
import {AiTwotoneStar} from "react-icons/ai";
import { Link } from 'react-router-dom';
import useCourseAPI from './Hooks/useCourseAPI';


const max = 4999;
const min = 599;
const Courselist = () => {
  const [searchItem, setSearchItem] = useState('');
  const [filteredCourse, setFilteredCourse] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

    const courses = useCourseAPI()
  return (
    <>
    <h3>{courses?.unit?.title}</h3>
    <input className='search-box' placeholder='Search a course...' type='text' value={searchItem} onChange={(e)=>{setSearchItem(e.target.value);}} />
      <button className='btn' onClick={()=>{
         const filteredData = courses?.unit?.items.filter((course)=> course?.title.toLowerCase().includes(searchItem.toLowerCase())
         || course?.visible_instructors[0].title.toLowerCase().includes(searchItem.toLowerCase()));
           setFilteredCourse(filteredData);
           setSearchClicked(true);
      }}>Search</button>
    <div className='course-list'>
      {(searchClicked ? filteredCourse : courses?.unit?.items)?.map((course)=>(
        <div className='container' key={course?.id}>
          <Link to={`/CourseDetails/${course.id}`}>
    <img className='courseimg' src={course.image_240x135} alt='course-thumbnail'/>
        <p className='name'>{course?.title}</p>
        <p className='mentors'>{course?.visible_instructors[0].title}</p>
        <p className='cost'>₹{Math.floor(Math.random()*(max-min) + min)}</p>
        <div className='data'>
        <p className='rating'><AiTwotoneStar color='orange' size={20} />{Math.round(course.avg_rating*100)/100} ({millify(course?.num_reviews)})</p>
        <p className='duration'>Duration:{course.content_info_short}</p>
        </div>
        <button className='btn'>View Details</button>
        </Link>
        </div>
      ))}
    </div>
    </>
  )
}

export default Courselist