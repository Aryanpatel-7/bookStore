import React from 'react'
import Home from './Home/Home';
import { Navigate, Route,Routes } from "react-router-dom";
import Courses from './Courses/Courses';
import Signup from './Components/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider';
import About from "./About/About";
import Contact from "./Contact/Contact";

const App = () => {
  const[authUser,setAuthUser]=useAuth();
    console.log(authUser);
  return (
    <>
<div className="min-h-screen bg-white dark:bg-gray-900 dark:text-gray-100">
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/course' element={authUser?<Courses />:<Navigate to="/signup"/>} />
  <Route path='/signup' element={<Signup />} />
    <Route path="/contact" element={<Contact />} />
  <Route path="/about" element={<About />} />
</Routes>
 <Toaster/>

</div>
    </>
   
  )
}

export default App;