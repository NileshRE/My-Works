import React, { useState } from 'react'

const Enrolled = ({Course, pic, Instructor, percent, day, month}) => {
  const [value, setValue] = useState(percent);
  const handleValue = ()=>{
    setValue(100);
  }
  return (
    <>
        <div className='enrolled-courses'>
        <div>
            <img src={pic} alt='thumbnail'/>
            </div>
            <div>
            <p className='name1'>{Course}</p>
            <p>{Instructor}</p>
            </div>
            <div className='progress-bar'>
            <label for="file">Course Completion:</label>
            <progress id="file" value={value} max="100"></progress>
            </div>
            <p className='rating due-date'>Due Date:<span className='due'>{day}<sup>th</sup>{month}</span></p>
            <div>
            <button className='btn2' onClick={handleValue}>Mark as Completed</button>
            </div>
        </div>
        <hr/>
        </>
  )
}

export default Enrolled