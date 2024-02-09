import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignInPage from './Sign/SignInPage';
import SignUpPage from './Sign/SignUpPage';
import { checkUser } from '../Sign/authSlice';
import { useAppDispatch } from '../../redux/store';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUser()).catch(console.log);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
