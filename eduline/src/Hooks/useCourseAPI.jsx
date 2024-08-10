import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addDetails } from '../utils/CourseSlice';

const useCourseAPI = () => {
    const dispatch = useDispatch()
    const [courses, setCourses] = useState([]);
    const getdata=async()=>{
      try{
      const url = await fetch("https://www.udemy.com/api-2.0/discovery-units/bestseller/?apply_campaign_filter=False&context=home&fft=skills_hub_top_new_beginner&fl=lbl&is_content_rankable=False&label_id=8322&member_of=skills_hub_top_new_beginner&safe_for_public_caching=True&sos=pl&source_page=logged_out_homepage&skip_price=true&source_page=logged_out_homepage&locale=en_US&currency=inr&navigation_locale=en_US")
      const response = await url.json();
      setCourses(response)
      dispatch(addDetails(response))
    } catch(error){
      console.error("Error fetching data:", error);
    }
  }
    useEffect(()=>{
      getdata();
    },[])
    return courses
}

export default useCourseAPI