import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./CourseSlice";

const Appstore = configureStore(
    {
        reducer:{
            course: courseReducer,
        },
    });

export default Appstore;