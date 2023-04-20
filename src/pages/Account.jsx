import React from 'react';
import { UserAuth } from '../context/AuthContext';
import '../pages/app.css'

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='profile'>
      
      <h1>Account</h1>
      <div>
        <h1>Welcome, {user?.displayName}</h1>
      </div>
      
      <button onClick={handleSignOut} className='border py-2 px-5 mt-10' type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Logout
      </button>
      
      
    </div>
  );
};

export default Account;
