import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ForgotPassword from './ForgotPassword';

import Register from './Register'
import VerifyEmail from './VerifyEmail';
import Login from './Login'
import {useState, useEffect} from 'react'
import {AuthProvider} from './AuthContext'
import {auth} from './firebase'
import {onAuthStateChanged} from 'firebase/auth'
import PrivateRoute from './PrivateRoute'
import {Navigate} from 'react-router-dom'
import HolidayTable from './HolidayTabel';
import ApplyTimeOff from './ApplyTimeOff';
import AddTimeOff from './AddTimeOff';
import FacebookButton from './FacebookButton';
import Dashboard from './Dashboard';
import Google from './Google';
import ProfilePage from './ProfilePage';
import Attendance from './Attendace';
import Performance from './Performance';

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <Router>
      <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
        <Routes>
          <Route exact path='/' element={
            <PrivateRoute>
              
            </PrivateRoute>
          }/>
          <Route path="/login" element={
            !currentUser?.emailVerified 
            ? <Login/>
            : <Navigate to='/' replace/>
          } />
          <Route path="/register" element={
            !currentUser?.emailVerified 
            ? <Register/>
            : <Navigate to='/' replace/>
          } />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path='/verify-email' element={<VerifyEmail/>} />
          <Route path="/holiday-table" element={<HolidayTable />} />
          <Route path="/apply-time-off" element={<ApplyTimeOff />} />
          <Route path="/add-time-off" element={<AddTimeOff />}/> 
          <Route path="/facebook-button" element={<FacebookButton />}/> 
          <Route path='/Dashboard' element={<Dashboard/>} />
          <Route path='/Google' element={<Google/>} />
          <Route path='/Attendance' element={<Attendance/>} />
          <Route path='/ProfilePage' element={<ProfilePage/>} />
          <Route path='/Performance' element={< Performance/>} />
        </Routes> 
         
      </AuthProvider>
  </Router>
  );
}

export default App;
