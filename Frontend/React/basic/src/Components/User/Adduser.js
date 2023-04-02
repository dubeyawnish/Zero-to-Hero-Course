import {useState} from 'react'

const Adduser = () => {

  const initialState={ name:"",username:"",email:"",phone:"",website:""};
  const [user, setUser] = useState(initialState);

  const{name,username,email,phone,website}=user;  // destructuring method

  const onChangeInput = (event) => {
    console.log(event);
    console.log(event.target.name);

    setUser({...user,[event.target.name]:event.target.value});// spread operator is used to keep all variable together like if I write name , after name i will write email then it keep name safe this is possible with spred operator otherwise name would be gone

  }

  return (
    <div className="container">
      <div className="w-75 mx-auto p-5 shadow">
        <h2 className="text-center mb-4">Add User Details</h2>
        <form>
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

          <button className="btn btn-info text-white col-12">Add User</button>
        </form>

      </div>

    </div>
  )
}

export default Adduser