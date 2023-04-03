import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Adduser = () => {

  const navigate = useNavigate();

  const initialState = { name: "", username: "", email: "", phone: "", website: "" };
  const [user, setUser] = useState(initialState);

  const { name, username, email, phone, website } = user;  // destructuring method

  const onChangeInput = (event) => {
    //console.log(event);
    //console.log(event.target.name);

    setUser({ ...user, [event.target.name]: event.target.value }); // spread operator is used to keep all variable together like if I write name , after name i will write email then it keep name safe this is possible with spred operator otherwise name would be gone

  }

  const onFormSubmit = async (event) => {
    event.preventDefault();//it makes that page will not refresh
    if (!user.name) {
      alert("Name cannot be empty");
      return;
    }
    if (!user.username) {
      alert("Username cannot be empty");
      return;
    }
    if (!user.email) {
      alert("Email cannot be empty");
      return;
    }

    if (!user.phone) {
      alert("phone cannot be empty");
      return;
    }

    if (!user.website) {
      alert("Website cannot be empty");
      return;
    }

    await axios.post("http://localhost:5000/user", user);
    navigate({ pathname: "/" });



  }

  return (
    <div className="container">
      <div className="w-75 mx-auto p-5 shadow">
        <h2 className="text-center mb-4">Add User Details</h2>
        <form onSubmit={(event) => { onFormSubmit(event) }}>
          <div className='form-group mb-3'>
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter your full name"
              name="name"
              value={name}
              onChange={(event) => { onChangeInput(event) }}
            />

          </div>

          <div className='form-group mb-3'>
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter your username"
              name="username"
              value={username}
              onChange={(event) => { onChangeInput(event) }}
            />

          </div>

          <div className='form-group mb-3'>
            <input
              type="email"
              className="form-control form-control-lg "
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(event) => { onChangeInput(event) }}
            />

          </div>

          <div className='form-group mb-3'>
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter your phone number"
              name="phone"
              value={phone}
              onChange={(event) => { onChangeInput(event) }}
            />

          </div>

          <div className='form-group mb-3'>
            <input
              type="text"
              className="form-control form-control-lg  "
              placeholder="Enter your website"
              name="website"
              value={website}
              onChange={(event) => { onChangeInput(event) }}
            />

          </div>

          <button type="submit" className="btn btn-info text-white col-12">Add User</button>
        </form>

      </div>

    </div>
  )
}

export default Adduser;