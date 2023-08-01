import React from "react";
import im1 from "../assets/int2.png";
import im2 from "../assets/foodsr.jpg";
import im3 from "../assets/gifimg.jpg";
import im4 from "../assets/joke.jpg";
import im5 from "../assets/thaughts.jpg";
import im6 from "../assets/prog.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import CardData from "./CardData";
import Cards from "./Cards";

const Home = () => {
  return (
    <div className=" flex h-auto w-[75%] items-center justify-center mt-5 flex-col  pt-[130px] mx-auto">
      <div>
        <h1 className="text-3xl font-extrabold text-center text-gray-800 py-8   rounded-full mx-auto mt-0">
          "Discover the Magic of Randomness: <span  className=" text-teal-700">Unveiling Quotes, Facts, Recipies,
          and More! "</span>
        </h1>
      </div>
      <div className=" h-[50%] w-full flex items-center justify-center">
        <Carousel
          showThumbs={false} // Hide thumbnail navigation
          showArrows={false} // Show navigation arrows
          autoPlay={true} // Enable autoplay
          infiniteLoop={true} // Enable infinite loop
          interval={5000} // Set interval between slides (in milliseconds)
        >
          
          <Link to="./Facts">
            <div>
              {/* Set responsive image size */}
              <img className=" rounded-lg h-[400px] w-[90%]" src={im1} alt="" />
            </div>
          </Link>
          <Link to="/Foods">
            <div>
              <img className=" rounded-lg h-[400px]  hello " src={im2} alt="" />
            </div>
          </Link>
          <Link to="/Gifs">
            <div>
              <img className=" rounded-lg h-[400px] " src={im3} alt=""  />
            </div>
          </Link>
          <Link to="/Jokes">
            <div>
              <img className=" rounded-lg h-[400px] " src={im4} alt="" />
            </div>
          </Link>
          <Link to="/Quotes">
            <div>
              <img className=" rounded-lg h-[400px]" src={im5} alt  />
            </div>
          </Link>
          <Link to="/Memes">
            <div>
              <img className=" rounded-lg h-[400px]" src={im6} alt  />
            </div>
          </Link>
        </Carousel>
      </div>
      {/* card section */}
      
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-2 ">
         {CardData.map((card, index) => (
            <Cards key={index} title={card.title} description={card.description} />
          ))}
         </div>
      

    </div>
  );
};

export default Home;
