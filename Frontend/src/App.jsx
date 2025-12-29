import React from 'react'
import Home from './Home/Home';
import { Route,Routes } from "react-router-dom";
import Courses from './Courses/Courses';
import Signup from './Components/Signup';

const App = () => {
  return (
    <>
<div className=' dark:bg-gray-900 dark:text-gray-100'>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/course' element={<Courses />} />
  <Route path='/signup' element={<Signup />} />
</Routes>
</div>
    </>
   
  )
}

export default App;