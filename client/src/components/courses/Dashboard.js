import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../Home';
import '../../ui/course.css'
import { add } from '../store/myCoursesSlice';
import { fetchDashboard } from '../store/dashboardSlice';
import { STATUSES } from '../store/dashboardSlice';
import Footer from '../../common/Footer';


const Dashboard = () => {
  const dispatch = useDispatch();
  const { data: dashboards, status } = useSelector((state) => state.dashboard);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchDashboard());
    // const fetchDashbard = async () => {
    //     const res = await fetch('http://localhost:4000/courses');
    //     const data = await res.json();
    //     console.log(data);
    //     setProducts(data);
    // };
    fetchDashboard();
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAdd = (dashboard) => {
    dispatch(add(dashboard));
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }
  return (
    <>
      <Home></Home>
      <h1 className='text-center mt-5 mb-5'> Explore Courses</h1>
      <div className="productsWrapper mt-5">
        {dashboards.map((dashboard) => (
          <div className="card course" key={dashboard.id}>
            <img className="Logo" src={dashboard.cover} alt="" />
            <h4>{dashboard.courseName}</h4>
            <h5>{dashboard.Trainer}</h5>
            <button onClick={() => handleAdd(dashboard)} className="btn">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Dashboard;
