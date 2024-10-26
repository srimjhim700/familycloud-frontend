import * as React from 'react';
import "../Pages/index.css";
import blucloud from "../bluecloud.png";

import cloud from "../cloud.png";

export default function Login({
    setUser,
    setAuthState
}) {
    return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center  ">
      < div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 relative  overflow-hidden">
        <div className="absolute sm:top-[-30vh] top-[-10vh] left-[-20vw]  p-4  ">
       <img src={cloud}/>
      </div>

      <div className="absolute sm:top-[-20vh] top-[-10vh] right-[-5vw]  p-4  ">
       <img src={blucloud}/>
      </div>
        <div className=' max-w-[700px] px-10 py-20 rounded-3xl mx-auto mt-10  z-1 relative'>
            <h1 className='text-3xl font-semibold text-center mb-12 [text-shadow:_2px_2px_2px_rgb(0_0_0_/_40%)] '>Welcome to Singh family cloud  </h1>
            <h1 className='text-5xl font-semibold text-center'> Login  </h1>
            <div className='mt-8'>
                <div className='flex flex-col'>
                    <label className='text-lg font-medium'>Email</label>  
                    <input 
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-mycolor placeholder-white focus:border-violet-500  focus:outline-none'
                        placeholder="Enter your email  "/>
                </div>
                <div className='flex flex-col mt-4'>
                    <label className='text-lg font-medium'>Password</label>
                    <input 
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-mycolor placeholder-white focus:border-violet-500 focus:outline-none'
                        placeholder="Enter your password"
                        type={"password"}
                    />
                </div>
                <div className='mt-8 flex justify-between items-center'>
                </div>
                <div className='mt-8 flex flex-col gap-y-4 '>
                    <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-myblue rounded-xl text-white font-bold text-lg'>Sign in</button>
                    
                </div>
                
            </div>
        </div>
        </div>
        </div>
    )
}