import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import auth from '../Firebase/firebase.config';
import { FaEye,FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [registerError,setRegisterError] = useState('')
    const [success,setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const handelSignUp = (e)=>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        // reset error & success message
        setRegisterError('')
        setSuccess('')

        if (password.length < 6) {
          setRegisterError("Password should be at least 6 character");
          return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError("Password should be at least one Uppercase")
            return
        }



        createUserWithEmailAndPassword(auth,email,password)
        .then((result)=>{
            console.log(result.user)
            setSuccess("Registration successfully")
        })
        .catch((error =>{
            setRegisterError(error.message)
        }))

        e.target.name.value = ''
        e.target.email.value = ''
        e.target.password.value = ''

    }

    return (
      <div className=" container mx-auto flex flex-col items-center justify-center">
        <Form onSubmit={handelSignUp} className="border p-24 space-y-10 mt-10">
          <input
            className="w-full border border-green-800 px-5 py-2 rounded-lg"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <input
            className="w-full border border-green-800 px-5 py-2 rounded-lg"
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
          />
          <br />
          <div className="relative">
            <input
              className="w-full border border-green-800 px-5 py-2 rounded-lg"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-3"
            >
              {
                showPassword ? <FaEyeSlash /> : <FaEye />
              }
            </button>
          </div>
          <br />
          <input
            className="btn btn-primary px-10 py-3 rounded-lg cursor-pointer"
            type="submit"
          />
          {registerError && (
            <p className="text-red-600 font-bold">{registerError}</p>
          )}
          {success && <p className="text-green-600 font-bold">{success}</p>}
        </Form>
      </div>
    );
};

export default Register;