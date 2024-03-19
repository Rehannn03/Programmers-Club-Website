import React, { useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import { Link } from "react-router-dom";
export function Members() {
    const[members, setMembers] = React.useState([])
    // let headersList = {
    //   "Content-Type": "text/plain",
    //   "Access-Control-Allow-Origin": "*",
    //   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //   'Accept':'*/*',
    //   mode:'no-cors'
    //  }
    async function fetchMembers() {
      axios.get('https://raw.githubusercontent.com/RehannS/Members-Data/main/members.json')
      .then(response => {
        setMembers(response.data)
      })
    }
    useEffect(()=>{
      fetchMembers()
    },[])
  return (
    <div className="bg-blue-300">
      {/* Page Header */}
      <section className="text-center py-8">
        <h1 className="text-3xl font-bold text-gray-800  underline">
          Core Members 2023-2024
        </h1>
      </section>

      {/* Member Cards */}
      <section className="container mx-auto px-4 " >
      <div className="flex justify-center mb-3">
      
        <div className="relative flex flex-col  text-black bg-slate-200 shadow-md bg-clip-border rounded-xl w-80  " data-aos='fade-up'  >
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80 ">
            <img
              src='https://res.cloudinary.com/projectbackend/image/upload/v1710838815/Picsart_23-09-16_13-34-46-669_oju8bk.png'
              alt="profile-picture"
              className="object-cover w-full h-full  rounded-xl"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Er. AHLAM ANSARI
            </h4>
            <p className="block font-sans text-black antialiased font-medium leading-relaxed  bg-clip-text ">
              Convener-Programmers Club
            </p>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7 ">
            <Link
            to='https://www.linkedin.com/in/ahlamshakeel/'>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="50" viewBox="0 0 48 48">
              <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
              </svg>
            </Link>
          </div>
        </div>
      
    </div>
        <Card details={members}/>
      </section>
    </div>
  );
} // Add a closing curly brace here
