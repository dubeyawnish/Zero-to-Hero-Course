import React from 'react'

const Contactpage = () => {
  return (
    <div className="container">
      <h1 className='py-3'>Contactpage</h1>

      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3 ">
          <textarea className="form-control" id="query"></textarea>
          <label className="form-check-label" for="query">Query</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}


export default Contactpage;