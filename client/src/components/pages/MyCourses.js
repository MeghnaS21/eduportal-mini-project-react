import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Home from '../Home';
import { remove } from '../store/myCoursesSlice';
import '../../ui/course.css';

const MyCourses = () => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.myCourse);
    const handleRemove = (courseId) => {
        dispatch(remove(courseId));
    };

    return (
        <>
            <Home></Home>

            <div>

                <h3>Courses hi</h3>
                
                <div className="cartWrapper mt-10">
                
                    {courses.map((course) => (
                        
                        <div key={course.id} className="cartCard">
                            {/* <img src={mycourse.image} alt="" /> */}
                            <h5>{course.courseName}</h5>
                            <h5>{course.Trainer}</h5>
                            <button
                                className="btn"
                                onClick={() => handleRemove(course.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MyCourses;
