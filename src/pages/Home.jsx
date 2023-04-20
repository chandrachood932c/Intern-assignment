import React from 'react';
import Contact from './Contact'
import ExportExcel from '../ExportExcel';

const sampleData = [
  {
    "name": "Jane Doe",
    "email": "janedoe@example.com",
    "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod mauris eu consectetur imperdiet."
  },
  {
    "name": "Bob Smith",
    "email": "bobsmith@example.com",
    "message": "Pellentesque rutrum, est at iaculis venenatis, nisi augue lacinia enim, vel dictum nunc libero eu leo."
  },
  {
    "name": "Emily Jones",
    "email": "emilyjones@example.com",
    "message": "Nam quis odio a mi vestibulum scelerisque eu at metus. Suspendisse potenti."
  },
  {
    "name": "Tom Brown",
    "email": "tombrown@example.com",
    "message": "Sed sit amet volutpat massa. Sed sem ipsum, ultrices ac bibendum vel, posuere nec justo."
  },
  {
    "name": "Maria Garcia",
    "email": "mariagarcia@example.com",
    "message": "Aliquam erat volutpat. Nulla et ligula quis neque congue tincidunt."
  }
]


const Home = () => {
  return (
    <div>
      
      {/* <ExportExcel excelData={sampleData} fileName="Excel Export" /> */}
      <div class="flex justify-center items-center h-screen">
        <h1 class="text-6xl text-center">Welcome to Entertainment Entrepreneurship Website</h1>
      </div>
      {/* <Contact/> */}
    </div>
  );
};

export default Home;
