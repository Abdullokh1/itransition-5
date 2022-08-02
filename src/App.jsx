import './App.css'
import UserName from './components/UserName'
import {Routes, Route} from 'react-router-dom'
import Messeges from './components/Messeges'
import { useState } from 'react'

function App() {
  let [name, setName] = useState('')
  let NAME = JSON.parse(localStorage.getItem('username'))
  localStorage.setItem('username', JSON.stringify(name))


  return (
     <Routes>
      <Route path='/' element={<UserName name={name} setName={setName}/>}/>
      <Route path='/Messeges' element={<Messeges NAME={NAME}/>}/>
     </Routes>
  )
}

export default App
