import React from 'react'
import arrow from "../blue-arrow.webp";
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='home h-screen bg-home-blue '>
        <div className='home-heading relative flex w-fit pl-20 pt-20 text-5xl font-myfont '>
            <h1>In family cloud you have access to ...</h1>
                <div className='absolute top-20 right-5rem'>
                    <img className='rotate-160 h-20 mix-blend-overlay' src={arrow} alt="arrow"/>
                </div>

        </div>   
        <div className='home-container justify-between  pt-4 px-20 flex flex-col h-4/5 font-myfont text-3xl'>
            <div className='home-container1 flex justify-evenly py-8 items-center h-1/2'>
                <button className="home-cloud-function bg-home-flex-blue  transition duration-300 ease-in-out transform hover:shadow-my  h-full w-96 p-20 rounded-md " onClick={() =>navigate('/connectlaptop')}>Connect to my laptop </button>
                <button className="home-cloud-function bg-home-flex-blue  transition duration-300 ease-in-out transform hover:shadow-my  h-full w-96 p-20 rounded-md " onClick={() =>navigate('/photodump')}>Dump your photos!</button>
                <button className="home-cloud-function bg-home-flex-blue  transition duration-300 ease-in-out transform hover:shadow-my  h-full w-96 p-20 rounded-md "onClick={() =>navigate('/task')}>Calender and task management</button>
            </div>  
            <div className='home-container2 flex justify-evenly py-8 px-52 items-center h-1/2 '>
                <button className="home-cloud-function bg-home-flex-blue  transition duration-300 ease-in-out transform hover:shadow-my  h-full w-96 p-20 rounded-md  "onClick={() =>navigate('/games')}>Play my games </button>
                <button className="home-cloud-function bg-home-flex-blue  transition duration-300 ease-in-out transform hover:shadow-my  h-full w-96 p-20 rounded-md "onClick={() =>navigate('/publishwebsite')}>Publish your website</button>
            </div>
        </div>
    </div>
    
  )
}

export default Home 