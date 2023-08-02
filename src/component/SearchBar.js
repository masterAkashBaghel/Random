import React, { useState } from 'react';
import { FaSistrix } from "react-icons/fa";
import { useEffect } from 'react';
import {  toast } from 'react-toastify';
 

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate to the appropriate route based on the query
    // const route = `/${query}`;

    // window.location.href = route;
    if (query === "facts" || query === "Fact" || query === "Facts" || query==="fact") {
      window.location.href = "/Facts";
    } else if (query === "gifs" || query==="Gifs" || query === "gif" || query==="Gif") {
      window.location.href = "/SearchGif";
    } else if (query === "Jokes" || query==="Joke" || query==="joke" || query==="jokes") {
      window.location.href = "/Jokes";
    } else if (query === "Quotes" || query==="Quote" || query==="quotes" || query==="quote") {
      window.location.href = "/Quotes";
    }
    else if (query === "Recipies" || query==="recipies" || query==="Recipy" || query==="recipy") {
      window.location.href = "/Foods";
    } 
    else if (query === "Memes" || query==="memes") {
      window.location.href = "/Memes";
    }
    else {
      // Redirect to the home page if the query is not recognized
      toast.error('Please enter a valid query', { autoClose: 2000 });
      window.location.href = "/";
    }
  };

  useEffect(() => {
    // Remove the previous page when the page loads
    window.history.replaceState(null, null, '/');
  }, []);

  return (
    <div className=' flex  '>
      <input           className="border border-gray-300 rounded-full px-4 py-2 outline-none focus:border-blue-500 hover:border-blue-500 transition-colors duration-300 sm:w-[80%] lg:w-[90%] sm:py-1"

        type="text"
        placeholder="Gifs Quotes Jokes.."
        value={query}
        onChange={handleChange}
      />
      <button className=' rounded-lg' type="submit" onClick={handleSubmit}>
       <div className=' flex items-center justify-center h-[30px] w-[30px] rounded-full bg-white ml-1 hover:bg-slate-500 sm:ml-0'>
       {<FaSistrix/>}
       </div>
      </button>
    </div>
  );
};

export default SearchBar;
