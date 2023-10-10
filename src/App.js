import React from 'react';
import './App.css';
import PayrollForm from './components/payroll-form/payroll-form';
import Header from './components/header/header';

function App() {
  return (
    <>
    <div>
    <Header />
    </div>
    <div>
      <PayrollForm />
    </div>
    </>
  );
}

export default App;
