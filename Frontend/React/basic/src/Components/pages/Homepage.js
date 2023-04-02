
import {useState ,useEffect} from 'react';
import axios from 'axios';


 const Homepage = () => {

 const [users, setUsers] = useState([]);


 //called on the load of component because dependency array is empty
useEffect(() => {
  //getAllUser();
  getAllUserAwait();
}, [])

const getAllUserAwait=async()=>{
   const result=await axios.get("http://localhost:5000/user");// take whatever time you want fetch data i will  not execute rest of line when all data fetched then moved to next line to execute this is the mean of await it resolve promise

   setUsers(result.data);
   console.log(result);
   console.log("after the api call");
}

 const getAllUser=() =>{
  axios.get("http://localhost:5000/user")
  .then((response)=>{     // Do something when api data is fetch successfully
    setUsers(response.data);
    console.log(response);

  })
  .catch((error)=>{   // Do something when there was an error during fetching data from api
     console.log(error);
  })

  console.log("this line print first") // this line get printed first because fetching data takes time and it is asynchronous so rest of code executed and when data fetched then above line executed for this above line is printed later.
   
 }


  return (
    <div className="container">
        <h1> I am from Homepage</h1>
    </div>
  )
}


export default Homepage;