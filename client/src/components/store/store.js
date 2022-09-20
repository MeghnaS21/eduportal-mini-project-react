import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './dashboardSlice';
import myCoursesReducer from './myCoursesSlice';
const store = configureStore({
    reducer: {
        dashboard: dashboardReducer,
        myCourse: myCoursesReducer,
    },
});

export default store;
