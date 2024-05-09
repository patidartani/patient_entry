import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp from './components/Registration/SignUp'
import LogIn from './components/Registration/LogIn'
import Home from './pages/Home'
import PatientEntries from './pages/Records/PatientEntries'
import View from './pages/Action/View'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/' element={<Home />} />
        <Route path='/patiententry' element={<PatientEntries />} />
        <Route path='/view' element={<View />} />
        <Route path='/edit' element={<View />} />
         
       </Routes>
    </div>
  )
}

export default App
