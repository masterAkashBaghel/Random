import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import img from '../assets/thaughts.jpg'
import Spinner from "./Spinner";

const Quotes = () => {
  const[loading,setLoading]=useState(true)
  const [authors, setAuthors] = useState("");
  const [texts, setTexts] = useState("");

  async function getQuotes() {
    const options = {
      method: "GET",
      url: "https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes",
      headers: {
        "X-RapidAPI-Key": `d5a4ce12a2mshc0113032e6eb07cp19a8b0jsnc021f4d22d00`,
        "X-RapidAPI-Host": "quotes-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      setLoading(true);
      const response = await axios.request(options);
      setAuthors(response.data[0].author);
      setTexts(response.data[0].quote);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  const GenerateQuotes = () => {
    getQuotes();
  };
  useEffect(()=>{
      getQuotes()
  },[])
  return (
    <div>
      <div className=" flex mt-[150px] w-[65%]  items-center flex-col justify-center mx-auto border-2 hello rounded-xl ">
        <h1 className="text-3xl font-bold text-center text-[#D76F11] py-7   rounded-full mx-auto mt-0 sm:font-xl md;font-xl">
          <span className="text-[#09BF78]">"Discover the Wisdom of Ages:</span>{" "}
          Thoughtful and Inspiring Quotes"
        </h1>
        <div className=" w-[50%] h-[2px] mb-4 bg-fuchsia-600"></div>
        {loading ? (
          <Spinner />
        ) : (
          <p className="px-3 text-center border border-gray-300 rounded-full  py-5 outline-none focus:border-blue-500 hover:border-blue-500 transition-colors duration-300 sm:w-[70%] lg:w-[50%] sm:py-1 font-semibold opacity-60">
            <span className=" font-semibold"></span>
            {texts}{" "}
            <p>
              <span className=" font-bold opacity-50">Author-</span>
              {authors}
            </p>
          </p>
        )}
        <div>
          <img className=" h-[300px] my-4 rounded-xl" src={img} alt="quotesPic"></img>
        </div>

        <button className=" mb-3" onClick={GenerateQuotes}>
          Surprise Me!
        </button>
      </div>
    </div>
  );
};

export default Quotes;
