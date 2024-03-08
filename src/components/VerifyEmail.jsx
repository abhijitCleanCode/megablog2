import React, { useState } from 'react';
import { Button, Loader } from "./index.js";
import { useSearchParams } from 'react-router-dom';
import { envolope } from "../assets";
import authService from '../appwrite/auth.services.js';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

function VerifyEmail() {
  const [ loading, setLoading ] = useState(false)
  const navigate = useNavigate()
  const userData = useSelector((state) => state.auth.userData)
  // Get the query parameter from the URL
  const [ searchParams ] = useSearchParams();
  const userId = searchParams.get('userId');
  const secret = searchParams.get('secret');

  const verifyEmailHandler = async () => {
    try {
      setLoading(true)
      const verifyEmail = await authService.verifyEmail(userId, secret);

      if (verifyEmail) {
        toast("Your email has been successfully verified")

        navigate("/")
      }
    } catch (error) {
      console.log("component VerifyEmail :: verifyEmailHandler :: error", error)
    } finally {
      setLoading(false)
    }
  }

  return !loading ? (
      <section className='max-w-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#fafafa] flex flex-col justify-center items-center mx-auto p-4 space-y-5'>
        <div className="relative mx-auto rounded-xl flex flex-col items-center">
          <p className='text-xl text-blue-500 font-bold cursor-pointer flex'>Email verification</p>
          <img src={envolope} className="w-1/2 h-1/2 object-contain" />
        </div>
        <p className='text-lg font-bold cursor-pointer flex text-center text-[#455a64]'>We'r happy to have you on board. <br /> Please verify your email to start enjoying spectacles</p>

        { !userData.emailVerification ?
          (<Button onClick={verifyEmailHandler}>Verify your email</Button>) 
          : ( <Button bgColor="bg-green-600" onClick={() => navigate("/")}>You are already verified</Button> )
        }

        <ToastContainer />
      </section>
  ) : (
    <Loader />
  )
}

export default VerifyEmail