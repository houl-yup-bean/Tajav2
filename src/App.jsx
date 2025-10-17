import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import HomePage from './page/HomePage'
import LoginPage from './page/LoginPage'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
