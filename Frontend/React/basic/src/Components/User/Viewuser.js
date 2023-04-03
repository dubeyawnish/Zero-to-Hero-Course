import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const Viewuser = () => {
    const { userid } = useParams(); // useParams grab the userid from the url and return

    const initialState = { name: "", username: "", email: "", phone: "", website: "" };
    const [user, setUser] = useState(initialState);
    const [address,setAddress]=useState({});
    const [company,setCompany]=useState({});


    useEffect(() => {
        fetchUserData();

    }, [])


    const fetchUserData = async () => {
        const response = await axios.get(`http://localhost:5000/user/${userid}`);
        console.log(response);
        setUser(response.data);
        setAddress(response.data.address);
        setCompany(response.data.company);
    }

    return (
        <div className='container'>
            <Link to="/" className="btn btn-outline-info mt-2">Back</Link>
            <p className='display-2'>User Id: {userid}</p>
            <ListGroup variant="flush" className='p-4 w-75'>
                <ListGroup.Item>Full Name: {user.name}</ListGroup.Item>
                <ListGroup.Item>Username: {user.username}</ListGroup.Item>
                <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
                <ListGroup.Item>Website: {user.website}</ListGroup.Item>
                <ListGroup.Item>Address: {address.street} | {address.city}</ListGroup.Item>
                <ListGroup.Item>company: {company.name}</ListGroup.Item>
                
            </ListGroup>


        </div>
    )
}

export default Viewuser;