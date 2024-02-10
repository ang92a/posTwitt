import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignInPage from '../Sign/SignInPage';
import SignUpPage from '../Sign/SignUpPage';
import { checkUser, stopLoadingAu } from '../Sign/authSlice';
import { useAppDispatch } from '../../redux/store';

import ProfilePage from '../ProfilePage/ProfilePage';
import { loadProfiles, stopLoading } from '../ProfilePage/profileSlice';
import WelcomePage from '../WelcomPage/WelcomPage';
import { loadPosts } from '../WelcomPage/postsSlice';
import ChatPage from '../Chat/ChatPage';
import ChatTest from '../Chat/ChatTest';



function App(): JSX.Element {
  const dispatch = useAppDispatch();

  dispatch(checkUser()).catch(console.log);
  
  
  useEffect(() => {
    dispatch(loadProfiles()).catch(console.log);
    setTimeout(() => dispatch(stopLoading()), 1000);
    setTimeout(() => dispatch(stopLoadingAu()), 1000);
    dispatch(loadPosts()).catch(console.log);

  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chattest" element={<ChatTest />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/profiles/:profileId" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
