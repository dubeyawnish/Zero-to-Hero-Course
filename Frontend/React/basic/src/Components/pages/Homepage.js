
import { useState, useEffect } from 'react';
import { Table, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import axios from 'axios';


const Homepage = () => {

  const [users, setUsers] = useState([]);


  //called on onec when it load the component because dependency array is empty
  useEffect(() => {
    //getAllUser();
    getAllUserAwait();
  }, [])

  const getAllUserAwait = async () => {
    const result = await axios.get("http://localhost:5000/user");// take whatever time you want fetch data i will  not execute rest of line when all data fetched then moved to next line to execute this is the mean of await it resolve promise

    setUsers(result.data.reverse());
    //console.log(result);
    //console.log("after the api call");
  }

  const getAllUser = () => {
    axios.get("http://localhost:5000/user")
      .then((response) => {     // Do something when api data is fetch successfully
        setUsers(response.data);
        // console.log(response);

      })
      .catch((error) => {   // Do something when there was an error during fetching data from api
        //console.log(error);
      })

    console.log("this line print first") // this line get printed first because fetching data takes time and it is asynchronous so rest of code executed and when data fetched then above line executed for this above line is printed later.

  }

  const deleteUser= async(userid) =>{
     await axios.delete(`http://localhost:5000/user/${userid}`);
     getAllUserAwait();
  }


  return (
    <div className="container">
      <h1 className='py-3'> User Management System </h1>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {

            users.map((user, index) => {
              return <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link to=""><Button className='me-2' variant="secondary">View</Button></Link>
                  <Link to={`/user/edit/${user.id}`}><Button className='me-2' variant="info">Edit</Button></Link>
                  <Button onClick={()=>{deleteUser(user.id)}} variant="danger">Delete</Button>
                </td>
              </tr>

            })

            /*
               //here in this return is not used simply use () bracket in place of return this also do the same work
            users.map((user, index) => (
               <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>

           ))
           */

          }


        </tbody>
      </Table>
    </div>
  )
}


export default Homepage;