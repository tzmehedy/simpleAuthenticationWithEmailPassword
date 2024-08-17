import React from 'react';

const Login = () => {
    const handelLogin = () => {
        console.log("login submited");

    }
    return (
      <div className=" container mx-auto flex flex-col items-center justify-center">
        <div className="border p-32 space-y-10 mt-10">
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
          <input onClick={handelLogin} className="bg-amber-500 px-10 py-3 rounded-lg cursor-pointer" type="submit" />
        </div>
      </div>
    );
};

export default Login;