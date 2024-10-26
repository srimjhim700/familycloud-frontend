import React from 'react';
import backgroundImage from '../wallpaper-login.jpg';

const styles = {
   
    animatedBackground: {
        animation: 'moveBackground 5s linear infinite',
        backgroundSize: '200%',
        backgroundImage: `url(${backgroundImage})`,
    },
    
};

export default function Form({
    setUser,
    setAuthState
}) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-no-repeat bg-center" 
             style={{
                
                 ...styles.animatedBackground,
             }}>
            <style>
                {`
                @keyframes moveBackground {
                    0% {
                    background-position: 0 0;
                    }
                    50% {
                    background-position: +50% 0;
                    }
                    100% {
                    background-position: 0 0;
                    }
                }
                `}
            </style>
            <div className="w-10/12 max-w-[500px] h-[450px] rounded-3xl bg-white  backdrop-blur-sm border-2 border-gray-100 p-6 flex flex-col items-center overflow-y-auto">
                <h1 className="text-4xl font-semibold">Welcome Back</h1>
                <p className="font-medium text-sm text-gray-500 mt-2">Welcome back! Please enter your details.</p>
                <div className="mt-4 w-full">
                    <div className="flex flex-col">
                        <label className="text-base font-medium">Email</label>
                        <input
                            className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="flex flex-col mt-3">
                        <label className="text-base font-medium">Password</label>
                        <input
                            className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                            placeholder="Enter your password"
                            type="password"
                        />
                    </div>
                  
                    <div className="mt-4 flex flex-col gap-y-2 ">
       
                        <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-3 my-8 bg-home-flex-blue rounded-xl text-white font-bold text-base">
                            Sign in
                        </button>
                       
                    </div>
                   
                </div>
            </div>
        </div>
    );
}
