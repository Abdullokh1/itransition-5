import React, { useEffect, useState } from "react";

const getlocalitems = () =>{
  let list = localStorage.getItem('list')
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  } else{
    return []
  }
}

function Messeges({NAME}) {

  let date = new Date;
  let year = date.getFullYear()
  let day = date.getDate()
  let month = date.getMonth()
  let [recipient, setRecipient] = useState('')
  let [title, setTitle] = useState('')
  let [sender, setSender] = useState('')
  const [users, setUsers] = useState(getlocalitems())

  const submitHandler = (e) =>{
    e.preventDefault()
    setUsers([
      {
        id: Date.now(),
        recipient,
        title,
        sender
      },
      ...users,
    ])
    setRecipient('')
    setTitle('')
    setSender('')
  }

  useEffect(() =>{
    localStorage.setItem('list', JSON.stringify(users))
  }, [users])


  return (
    <div className="container mt-5">
      <div className="text-center w-50 m-auto">
        <h2 className="mb-4">Send a message</h2>
        <form onSubmit={submitHandler}>
          <input
            className="form-control mb-4"
            type="search"
            list="recipient"
            value={recipient}
            placeholder="Recipient"
            onChange={(e) => setRecipient(e.target.value)}
            required
            />
            <datalist id="recipient">
              <option value="Abdullokh"></option>
              <option value="Jim"></option>
              <option value="John"></option>
              <option value="Tom"></option>
            </datalist>
          <input
            className="form-control mb-4"
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea required value={sender} onChange={(e) => setSender(e.target.value)} className="form-control" placeholder="Body"></textarea>
          <button className="btn btn-dark w-100 mt-4" type="submit">
            Send
          </button>
        </form>
     <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Title</th>
            <th scope="col">Sender</th>
          </tr>
        </thead>
        <tbody>
          {users.map(item =>{
            if(NAME === item.recipient){
              return (
                <tr key={item.id}>
                  <th>{`0${day}-0${month+1}-${year}`}</th>
                  <th>{item.title}</th>
                  <th>{item.recipient}</th>
                </tr>
              )
            }
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Messeges;
