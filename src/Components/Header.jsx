import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <div className="navbar bg-base-300 rounded-box">
          <div className="flex-1 px-2 lg:flex-none">
            <a className="text-lg font-bold">Simple Auth</a>
          </div>
          <div className="flex flex-1 justify-end px-2">
            <div className="flex items-stretch space-x-5">
              
              <NavLink to={'/login'}>
                <button className='btn btn-primary'>Log In</button>
              </NavLink>
              <NavLink to={'/register'}>
                <button className='btn btn-secondary'>Sign Up</button>
              </NavLink>
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;