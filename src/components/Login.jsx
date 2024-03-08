import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { login as authLogin } from "../store/authSlice.js";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, Loader } from "./index.js";
import authService from '../appwrite/auth.services.js';
import { logo } from '../assets/index.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [ loading, setLoading ] = useState(false)
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const login = async (data) => {
    setError("")
    try {
      setLoading(true)

      const session = await authService.login(data)
      if (session) {
        const userData = await authService.getCurrentUser()

        if (!userData.emailVerification) {
          toast("Please verify your email")
          console.log(userData.emailVerification)
        } else {
          dispatch(authLogin(userData))
          toast("We'r happy to have you")
          navigate("/")
        }

        // if (userData) {
        //   dispatch(authLogin(userData))
        //   navigate("/")
        // }
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return !loading ? (
    <div className='flex items-center justify-center w-full'>
      <div className={`mx-auto w-full max-w-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#fafafa] rounded-md p-10 border border-black/10`}>
        <div className="mb-2 flex gap-2 justify-center items-center">
          <img src={logo} className="w-9 h-9 object-contain" />
          <p className='text-[18px] text-[#1976d2] font-bold cursor-pointer flex'>spectacles</p>
        </div>

        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}

        <form method='post' onSubmit={handleSubmit(login)}>
          <div className="space-y-5">
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              {
              ...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address"
                }
              })
              }
            />
            <Input
              label="Password:"
              placeholder="Enter your password"
              type="password"
              {
              ...register("password", {
                required: true
              })
              }
            />
            <Button type='submit' className='w-full'>Sign in</Button>
          </div>
        </form>
          <ToastContainer />
      </div>
    </div>
  ) : (
    <Loader />
  )
}

export default Login