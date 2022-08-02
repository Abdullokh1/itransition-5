import React from "react";
import {Link} from 'react-router-dom'

function UserName({setName}) {

  const submitHandler = (e) =>{
    e.preventDefault()
  }

  return (
    <form onSubmit={submitHandler} className="text-center m-auto w-50 mt-5">
      <h2 className="mb-4">Enter your name</h2>
      <input onChange={(e) => setName(e.target.value)} required className="form-control mb-4" placeholder="Name" type="text"/>
      <Link to='/Messeges'>
        <button className="w-100 btn btn-dark" type="submit">
          Submit
        </button>
      </Link>
    </form>
  );
}

export default UserName;
