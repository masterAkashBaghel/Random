import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import img1 from "../assets/int2.png";
import Spinner from "./Spinner";

const Facts = () => {
  const [loading, setLoading] = useState(true);

  const [fact, setfact] = useState();

  async function getFacts() {
    const options = {
      method: "GET",
      url: "https://facts-by-api-ninjas.p.rapidapi.com/v1/facts",
      headers: {
        "X-RapidAPI-Key": "d5a4ce12a2mshc0113032e6eb07cp19a8b0jsnc021f4d22d00",
        "X-RapidAPI-Host": "facts-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      setLoading(true);
      const response = await axios.request(options);
      console.log("hello");
      console.log(response.data[0].fact);
      setfact(response.data[0].fact);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getFacts();
  }, []);
  const facthandler = () => {
    getFacts();
  };
  return (
    <div>
      <div className=" flex mt-[150px] w-[65%]  items-center flex-col justify-center mx-auto border-2 hello rounded-xl ">
        <h1 className="text-3xl font-bold text-center text-[#D76F11] py-7   rounded-full mx-auto mt-0 sm:font-xl md;font-xl">
          <span className="text-[#09BF78]">"Fun Facts Galore:</span> Unearth
          Fascinating Trivia and Knowledge"
        </h1>
        <div className=" w-[50%] h-[2px] mb-4 bg-fuchsia-600"></div>

      

        {loading ? (
          <Spinner />
        ) : (
          <p className="px-3 text-center border border-gray-300 rounded-full  py-5 outline-none focus:border-blue-500 hover:border-blue-500 transition-colors duration-300 sm:w-[70%] lg:w-[50%] sm:py-1 font-semibold opacity-60">
            {fact}
          </p>
        )}
          {/* img */}
          <div>
          <img className=" h-[350px]" src={img1}></img>
        </div>
        <div>
          <button className="mb-3 " onClick={facthandler}>
            {" "}
            Surprise Me !
          </button>
        </div>
      </div>
    </div>
  );
};

export default Facts;
