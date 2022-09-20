import React, { useState, useEffect } from 'react';
import './trainee.css';
import { FcApproval } from "react-icons/fc";
import { FaReact } from "react-icons/fa";
import Home from '../../components/Home';

//redux toolkit code
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/features/postSlice";
import Footer from '../../common/Footer';
const Trainees = ({ users }) => {
    const [query, setQuery]=useState("");
    // console.log(users.filter(user=>user.firstName.includes(" Me")));
    // const [id, setId] = useState();
    // const dispatch = useDispatch();
    // const { loading, post, body } = useSelector((state) => ({
    //     ...state.app,
    // }));
    // console.log("post", post);

    // //search 
    // const fetchUserPost = () => {
    //     if (!id) {
    //         window.alert("Please provide an ID");
    //     } else {
    //         dispatch(getPost({ id }));
    //         setId("");
    //     }
    // };


    return (
        <div>
            <h2 className='heading-top'>Global Logic - React July Batch</h2>

            <div className='text-center'>
            <input type="text" placeholder='search...' onChange={e=> setQuery(e.target.value)}/>
            </div>
            < div className="container-fluid mt-5">
                        <div className="row text-center">
                            {
                                users.filter(user=>user.firstName.includes(query) ||user.lastName.includes(query) ).map((user) => {

                                    const { id, firstName, lastName, followers, role, Tasks, rank, avatar } = user;
                                    return (
                                        <div className="col-10 col-md-4 mt-5" key={id}>
                                            <div className="card p-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="image"> <img src={avatar} className="rounded"  /></div>
                                                    <div className="ml-3 w-100" key={id} >
                                                        <h4 className="mb-0 mt-0 textLeft">{firstName}{lastName} <FcApproval /> </h4>
                                                        <span className="text-left">{role} <FaReact /> </span>
                                                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                            <div className="d-flex flex-column">
                                                                <span className="articles">Tasks</span> <span className="number1">{Tasks}</span> </div>
                                                            <div className="d-flex flex-column">
                                                                <span className="followers">Followers</span> <span className="number2">{followers}</span> </div>
                                                            <div className="d-flex flex-column">
                                                                <span className="rating">Rank</span> <span className="number3">{rank}</span> </div>
                                                            {/* <button className='btn btn-success' onClick={increment(id)} >Follow</button> */}
                                                        </div>

                                                    </div>
                                                </div>
                                                // eslint-disable-next-line
                                            </div>
                                        </div>
                                    )
                                })

                            }

                        </div>
                    </div>
            

                    < div className="container-fluid mt-5">
                        <div className="row text-center">
                            {
                                users.map((curElem) => {

                                    const { id, firstName, lastName, followers, role, Tasks, rank, avatar } = curElem;
                                    return (
                                        <div className="col-10 col-md-4 mt-5" key={id}>
                                            <div className="card p-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="image"> <img src={avatar} className="rounded" width="155" /></div>
                                                    <div className="ml-3 w-100" key={id} >
                                                        <h4 className="mb-0 mt-0 textLeft">{firstName}{lastName} <FcApproval /> </h4>
                                                        <span className="text-left">{role} <FaReact /> </span>
                                                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                            <div className="d-flex flex-column">
                                                                <span className="articles">Tasks</span> <span className="number1">{Tasks}</span> </div>
                                                            <div className="d-flex flex-column">
                                                                <span className="followers">Followers</span> <span className="number2">{followers}</span> </div>
                                                            <div className="d-flex flex-column">
                                                                <span className="rating">Rank</span> <span className="number3">{rank}</span> </div>
                                                            {/* <button className='btn btn-success' onClick={increment(id)} >Follow</button> */}
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })

                            }

                        </div>
                    </div>
                    <Footer></Footer>
                
        </div>
    )
}

export default Trainees;
