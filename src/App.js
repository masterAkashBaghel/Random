import React from "react";
import Gifs from "./component/Gifs";
import SearchGif from "./component/SearchGif";
import Jokes from "./component/Jokes";
import Foods from "./component/Foods";
import Quotes from "./component/Quotes";
import Facts from "./component/Facts";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Contact from "./component/Contact";
import Memes from "./component/Memes";
 



export default function App() {


  return (
    <div className=" h-screen w-screen  background-image overflow-auto">
      <div>
        <Navbar />
      </div>
     
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Gifs" element={<Gifs />} />
      <Route path="/SearchGif" element={<SearchGif />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />

      <Route path="/Jokes" element={<Jokes />} />
      <Route path="/Foods" element={<Foods />} />
      <Route path="/Quotes" element={<Quotes />} />
      <Route path="/Facts" element={<Facts />} />
      <Route path="/Memes" element={<Memes />} />

     </Routes>
      
    </div>

  );
}
