import React, { useEffect, useState } from "react";
import axios from "axios";
import img from "../assets/joke.jpg";
import Spinner from "./Spinner";

const Jokes = () => {
  const [loading, setLoading] = useState(false);
  const [jokeName, setJoke] = useState("");
  const [joke, setJokes] = useState("");

  async function fetchJokeData() {
    const options = {
      method: "GET",
      url: "https://dad-jokes.p.rapidapi.com/random/joke/png",
      headers: {
        "X-RapidAPI-Key": "d5a4ce12a2mshc0113032e6eb07cp19a8b0jsnc021f4d22d00",
        "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
      },
    };

    try {
      setLoading(true);
      const response = await axios.request(options);

      setJoke(response.data.body.setup);
      setJokes(response.data.body.punchline);

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchJokeData(); // Fetch joke data on component mount
  }, []);

  function jokeHandler() {
    fetchJokeData();
  }

  return (
    <div>
      <div className=" flex mt-[150px] w-[65%]  items-center flex-col justify-center mx-auto border-2 hello rounded-xl ">
        <h1 className="text-3xl font-bold text-center text-[#D76F11] py-6   rounded-full mx-auto mt-0">
          <span className="text-[#09BF78]">"Laugh Out Loud:</span> Unearth
          Discover Hilarious Jokes!"
        </h1>
        <div className=" w-[50%] mb-2 h-[2px] bg-fuchsia-600"></div>


        {loading ? (
          <Spinner />
        ) : (
          <p className="px-3 text-center border border-gray-300 rounded-full  py-5 outline-none focus:border-blue-500 hover:border-blue-500 transition-colors duration-300 sm:w-[70%] lg:w-[50%] sm:py-1 font-semibold opacity-60">
            <span className=" font-semibold opacity-80">SetUp:</span>
            {jokeName}{" "}
            <p>
              <span className=" font-semibold opacity-50">Punchline:</span>
              {joke}
            </p>
          </p>
        )}

        
<div>
          <img className=" h-[300px] my-4 rounded-xl" src={img}></img>
        </div>

        <button className=" mb-3" onClick={jokeHandler}>
          Surprise Me!
        </button>
      </div>
    </div>
  );
};

export default Jokes;
