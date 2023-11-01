import React from 'react';
import './globals.css';
import { Routes, Route } from 'react-router-dom';
import SigninForms from './_auth/forms/SigninForms';
import { Home } from './_root/pages';

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/*Public Routes */}
        <Route path="/sign-in" element={<SigninForms />} />

        {/*Private Routes */}
        <Route index element={<Home />} />
      </Routes>
    </main>
  )
}

export default App