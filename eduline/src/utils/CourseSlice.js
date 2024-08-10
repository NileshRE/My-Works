import { createSlice } from "@reduxjs/toolkit";

const CourseSlice = createSlice(
   { 
    name: 'course',
    initialState: {
        details:[]
    },
    reducers:{
        addDetails:(state, action)=>{
            state.details= action.payload
        },
    },
})

export const{addDetails} = CourseSlice.actions;

export default CourseSlice.reducer;