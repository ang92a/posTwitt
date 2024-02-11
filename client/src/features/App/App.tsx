import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';

import { checkUser } from '../Page/SignPage/authSlice';
import { loadProfiles, stopLoading } from '../Page/ProfilePage/profileSlice';
import { loadPosts } from '../Page/WelcomPage/postsSlice';

import SignInPage from '../Page/SignPage/SignInPage';
import NavBar from '../UI/NavBar/NavBar';
import NewsPage from '../Page/NewsPage/NewsPage';
import ProfilePage from '../Page/ProfilePage/ProfilePage';
import WelcomPage from '../Page/WelcomPage/WelcomPage';
import SignUpPage from '../Page/SignPage/SignUpPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUser()).catch(console.log);
    dispatch(loadProfiles()).catch(console.log);
    setTimeout(() => dispatch(stopLoading()), 1000);
    dispatch(loadPosts()).catch(console.log);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/news" element={<NewsPage />} />
          <Route path="/profiles/:profileId" element={<ProfilePage />} />
        </Route>
        <Route index element={<WelcomPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
