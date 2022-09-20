import React, { useState, useEffect } from 'react'
import Loading from '../../common/Loading';
import Trainees from './Trainees'

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            const response = await fetch(' http://localhost:3000/users');
            setLoading(false);
            setUsers(await response.json());
        } catch (error) {
            setLoading(false);
            console.log("my error is " + error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <Trainees users={users} />
        </>
    )
}

export default UseEffectAPI
