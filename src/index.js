import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/employee-dashboard/employee-dashboard';
import Header from './components/header/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path='dashboard' element={<Dashboard />} />
    <Route path='app' element={<App />}/>
    <Route path='header' element={<Header />}/>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
