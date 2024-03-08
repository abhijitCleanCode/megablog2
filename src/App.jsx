import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import authService from "./appwrite/auth.services.js";
import { login, logout } from './store/authSlice.js';
import { Outlet } from 'react-router-dom';
import ThemeContextProvider from './context/ThemeContextProvider.jsx';

import './App.css';
import { Navbar, Loader } from './components/index.js';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userdata) => {
        if (userdata) {
          dispatch(login(userdata))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='relative bg-[#fafafa] min-h-screen'>
      <ThemeContextProvider>

        <Navbar />

        <main>
          <Outlet />
        </main>

      </ThemeContextProvider>
    </div>
  ) : (
    <Loader />
  )
}

export default App