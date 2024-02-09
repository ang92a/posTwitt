import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignInPage from '../Sign/SignInPage';
import SignUpPage from '../Sign/SignUpPage';
import { checkUser } from '../Sign/authSlice';
import { useAppDispatch } from '../../redux/store';
import ProfilePage from '../ProfilePage/ProfilePage';
import { loadProfiles, stopLoading } from '../ProfilePage/profileSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUser()).catch(console.log);
    dispatch(loadProfiles()).catch(console.log);
    setTimeout(() => dispatch(stopLoading()), 1000);
  }, []);

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<WelcomePage />} /> */}
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/profiles/:profileId" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
