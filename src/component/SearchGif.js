import React from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
import img from '../assets/gifimg.jpg'

const SearchGif = () => {
  const [tag, setTag] = useState("car");
  const [gif, fetchData, loading] = useGif(tag);

  return (
    <div>
      {/* headings */}
      <h1 className="mt-[150px] text-center text-3xl font-bold  text-[#E88125] py-5   rounded-full mx-auto ">
        "Discover Animated Delights: Search for <span className=" text-[#45B39D]">GIFs of Your Choice!"</span> 
      </h1>
      <div className="flex flex-col md:flex-row sm:flex-row h-auto w-full items-center justify-between mt-[20px] pt-[0px] mx-auto md:w-[75%] sm:w-[90%]  ">
        <div className="flex justify-end w-[100%] ">
          <img className="w-[400px] h-[400px]  mx-auto  rounded-xl flex hello justify-center" src={img} alt="gif" />
        </div>
        <div className="flex flex-col flex-end w-[100%]  border-2 hello rounded-xl ">
          {/* image */}
          <div>
            {loading ? (
              <Spinner  /> 
            ) : (
              <img
                className="w-[400px] h-[300px] rounded-xl flex justify-center items-center mx-auto mt-5"
                src={gif}
                alt="gif"
              />
            )}
          </div>
          {/* input */}
          <div>
            <div className="flex flex-col gap-3 items-center mt-2  justify-center">
              <input
                className="border border-gray-300 rounded-full px-4 py-2 outline-none focus:border-blue-500 hover:border-blue-500 transition-colors duration-300 sm:w-[50%] lg:w-[50%] sm:py-1"
                type="text"
                placeholder="search for specific gif"
                onChange={(event) => setTag(event.target.value)}
                value={tag}
              />
              <div className=" mb-2">
                <button onClick={() => fetchData(tag)}>Surprise Me</button>
              </div>
            </div>
            {/* button */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchGif;
