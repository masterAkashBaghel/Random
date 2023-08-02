import React from "react";
import ab2 from "../assets/ab2.png";
import abt2 from "../assets/abt2.png";

const About = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row sm:flex-row h-auto w-full items-center justify-end mt-5 pt-[160px] mx-auto  -2 md:w-[75%] sm:w-[90%]">
      {/* First section */}
      <div className="flex">
        {/* Images */}
        <img className="h-[400px]  " src={ab2} alt="boyUsingComp" />
      </div>
      {/* Second section */}
      <div className="w-full md:w-1/2 p-5 md:p-10">
        <h1 className="font-semibold text-3xl md:text-4xl mb-4 text-center">
          Welcome to Our Diverse Wonderland of Inspiration and Fun!
        </h1>
        <p className="text-center">
          Step into our enchanting world, where wisdom, humor, and creativity
          converge. Welcome to a diverse wonderland that houses a myriad of
          captivating experiences. In this magical realm, you'll find
          thought-provoking Random Quotes that ignite the flames of motivation
          and reflection. Embrace the unexpected and venture into the realm of
          boundless imagination with our collection of intriguing Random
          Thoughts. Delight in the fascinating nuggets of knowledge presented in
          our Fun Facts section, where trivia about animals, history, and
          science await your curious mind.
        </p>
      </div>
      {/* Third section */}
      
    </div>
    <div className="flex flex-col md:flex-row sm:flex-row h-auto w-full items-center justify-end mt-5 pt-[20px] mx-auto  -2 md:w-[75%] sm:w-[90%]">
    {/* First section */}
   
    {/* Second section */}
    <div className="w-full md:w-1/2 p-5 md:p-10">
      <h1 className="font-semibold text-3xl md:text-4xl mb-4 text-center">
       About
      </h1>
      <p className="text-center">
      Our app is a seamless blend of cutting-edge technologies, built with React for an intuitive user interface. Tailwind CSS ensures a visually appealing design on any device. Freepik API provides a vast image collection that enriches our content.  Ensures real-time data updates, keeping you informed. With ChatGPT's support, our app offers engaging interactions. Explore a world of knowledge and joy with our tech-powered app - an adventure at your fingertips!





      </p>
    </div>
    {/* Third section */}
    <div className="flex">
      {/* Images */}
      <img className="h-[400px]  " src={abt2} alt="Image 1" />
    </div>
    
  </div>
  </>
  );
};

export default About;
