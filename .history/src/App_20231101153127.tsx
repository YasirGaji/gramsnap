import React from 'react';
import './globals.css';
import { Routes, Route } from 'react-router-dom';
import SigninForms from './_auth/forms/SigninForms';
import { Home } from './_root/pages';
import SignupForms from './_auth/forms/SignupForms';




const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/*Public Routes */}
        <Route element={}>
          <Route path="/sign-in" element={<SigninForms />} />
          <Route path="/sign-up" element={<SignupForms />} />
        </Route>


        {/*Private Routes */}
        <Route index element={<Home />} />
      </Routes>
    </main>
  )
}

export default App