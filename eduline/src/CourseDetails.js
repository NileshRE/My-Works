import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {AiOutlineDown} from 'react-icons/ai'

const CourseDetails = () => {
    const detail = useSelector((store)=>store.course.details)
    const {id} = useParams()
    const [courseDetails, setCourseDetails] = useState([]);
    const [show, setShow] = useState(false)
    const getCourseDetail = async()=>{
        try{
        const url = await fetch(`https://www.udemy.com/api-2.0/course-landing-components/${id}/me/?components=curriculum_context`)
        const response = await url.json();
        setCourseDetails(response.curriculum_context?.data.sections)
        }catch(error){
            console.error(error)
        }
    }
    useEffect(()=>{
        getCourseDetail()
    },[])

    const handleSyllabus=()=>{
        setShow(!show);
    }

  return (
        <div className='body'>
         <h3 className='title2'>{detail.unit.items[0].title}</h3>
         <p>{detail.unit.items[0].visible_instructors[0].display_name}</p>
         <p className='subheading'>Description</p>
         <p>Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer. With 150,000+ ratings and a 4.8 average, my Web Development course is one of the HIGHEST RATED courses in the history of Udemy!.
            At 62+ hours, this Web Development course is without a doubt the most comprehensive web development course available online. Even if you have zero programming experience, this course will take you from beginner to mastery. Here's why:</p>
            <ul>
                <li>The course is taught by the lead instructor at the App Brewery, London's leading in-person programming bootcamp.</li>
                <li>The course has been updated to be 2023 ready and you'll be learning the latest tools and technologies used at large companies such as Apple, Google and Netflix.</li>
                <li>This course doesn't cut any corners, there are beautiful animated explanation videos and tens of real-world projects which you will get to build.</li>
                <li>The course is constantly updated with new content, with new projects and modules determined by students - that's you!</li>
            </ul>
         <div className='info'>
         <p className='subheading2'>In Progress</p>
         <p className='subheading2'>{detail.unit.items[0].content_info_short}</p>
         <p className='subheading2'>Schedule</p>
         <p className='subheading2'>Online</p>
         </div>
         <p className='subheading'>Pre-requisites</p>
         <ul>
            <li>No programming experience needed.</li> 
            <li>I'll teach you everything you need to know</li>
            <li>A computer with access to the internet No paid software required</li> 
            <li>I'll walk you through, step-by-step how to get all the software installed and set up</li>
         </ul>
        <div className='drop subheading' onClick={handleSyllabus}>
            Syllabus
            <AiOutlineDown />
            </div>
        {show && courseDetails?.map((course)=>(
            <p key={course.title} className='titles'>{course.title}</p>
        ))}
    </div>
  )
}

export default CourseDetails