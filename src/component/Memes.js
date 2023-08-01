import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Spinner from './Spinner';
import axios from 'axios';
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";

const Memes = () => {
    const [loadinf,setLoading]= useState(true);
    const [memeImages, setMemeImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    async function getMeme()
    {
        const options = {
            method: 'GET',
            url: 'https://programming-memes-images.p.rapidapi.com/v1/memes',
            headers: {
              'X-RapidAPI-Key': 'd5a4ce12a2mshc0113032e6eb07cp19a8b0jsnc021f4d22d00',
              'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
            }
          };
          
          try {
            setLoading(true);
              const response = await axios.request(options);
              setMemeImages(response.data);
              setCurrentImageIndex(0);
              console.log(response.data);
              setLoading(false);
          } catch (error) {
              console.error(error);
          }
    }
    useEffect(()=>{
        getMeme();
    },[])
    const showNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % memeImages.length);
      };

      const showPrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? memeImages.length - 1 : prevIndex - 1
        );
      };
      

  return (
    <div  className=" flex mt-[150px] w-[70%]  items-center flex-col justify-center mx-auto border-2 hello rounded-xl ">
         <h1 className="lg:text-3xl font-bold text-center text-[#D76F11] py-6   rounded-full mx-auto mt-0 md:text:2xl sm:text-xl">
          <span className="text-[#09BF78]">"Programming Memes::</span> A Fun Collection of Humorous Developer Jokes and Memes"
        </h1>
        <div className=" w-[50%] mb-2 h-[2px] bg-fuchsia-600"></div>
       {
        loadinf? <Spinner /> : <>
           {memeImages.length > 0 && (
        <div className=''>
          <img src={memeImages[currentImageIndex].image} alt="Meme" />
          <div className=' flex justify-between mt-2'>
            <button className=' bg-slate-400' onClick={showPrevImage}>{<FaArrowLeft/>}</button>
            <button className=' bg-slate-400' onClick={showNextImage}>{<FaArrowRight/>}</button>
          </div>
        </div>
      )}
        </>
       }
      <button className=' m-2' onClick={getMeme}>Get New Memes</button>
    </div>
  )
}

export default Memes
