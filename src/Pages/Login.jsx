import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import auth from '../Firebase/firebase.config';

const Login = () => {
    const [loginError, setLoginError] = useState("");
    const [success, setSuccess] = useState("");
    
    const handelLogin = (e) => {
        
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        
        signInWithEmailAndPassword(auth,email,password)
        .then(()=>{
            setSuccess("login successfully")
        })
        .catch((error)=>{
            setLoginError(error.message)

        })

    }
    return (
      <div className=" container mx-auto flex flex-col items-center justify-center">
        <Form onSubmit={handelLogin} className="border p-32 space-y-10 mt-10">
          <input
            className="w-full border border-green-800 px-5 py-2 rounded-lg"
            type="email"
            name="email"
            placeholder="Enter your Email"
          />
          <br />
          <input
            className="w-full border border-green-800 px-5 py-2 rounded-lg"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <br />
          <input
            className="bg-amber-500 px-10 py-3 rounded-lg cursor-pointer"
            type="submit"
          />
          {loginError && <p className="text-red-600 font-bold">{loginError}</p>}

          {success && <p className="text-green-600 font-bold">{success}</p>}
        </Form>
      </div>
    );
};

export default Login;