import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import elbrusLogo from './assets/elbrus.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { WelcomPage } from './WelcomPage/WelcomPage';

function App(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<WelcomPage />} />
    </Routes>
  );
}

export default App;
