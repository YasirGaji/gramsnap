import React from 'react';
import './globals.css';
import { Routes, Route } from 'react-router-dom';
import SigninForms from './_auth/forms/SigninForms';
import SignupForms from './_auth/forms/SignupForms';
import { AllUsers, CreatePost, EditPost, Explore, Home, PostDetails, Profile, Saved, UpdateProfile } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import { Toaster } from '@/components/ui/toaster'




const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/*Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForms />} />
          <Route path="/sign-up" element={<SignupForms />} />
        </Route>


        {/*Private Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  )
}

export default App