
import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../redux/features/postSlice";
import LoadingCard from './LoadingCard';

const AddTrainee = () => {
  const [values, setValues] = useState({ firstName: "", lastName: "", });
  const { post, loading } = useSelector((state) => ({ ...state.app }));
  const [showPost, setShowPost] = useState(false);
  const { title, body } = values;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>AddTrainee</div>
  )
}

export default AddTrainee