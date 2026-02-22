import React from 'react'
<<<<<<< HEAD
import Home from './home/Home'
=======
import Home from './Home/Home'
>>>>>>> 48926768c62aa40b4b9c7bb9275670814df4805c
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './components/Signup';
import {Toaster} from "react-hot-toast";
import { useAuth } from '../context/AuthProvider';

export default function App() {
  const [authUser, setAuthUser] = useAuth();
<<<<<<< HEAD
=======
  console.log(authUser);
>>>>>>> 48926768c62aa40b4b9c7bb9275670814df4805c

  return (
    <>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/course' element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
       <Route path='/signup' element={<Signup/>}/>
     </Routes>
     <Toaster />
    </>
  )
}
