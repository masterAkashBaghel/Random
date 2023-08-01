// Card.js
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Cards = ({ title, description }) => {
  const [showMore, setShowMore] = useState(false);

  function toggleExpand() {
    setShowMore(!showMore);
  }

  return (
    <div className=" flex flex-col border-2 flex-wrap p-2 m-2 hello rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl custom-scale">
      <div className=" flex flex-row items-center justify-center">
        <h3 className="text-xl font-semibold mb-2 text-center bg-[#82E0AA] rounded-xl  mt-2 w-[50%] p-1">
          {title}
        </h3>
        <div className=" h-[3px] w-[50%] bg-red-300"></div>
      </div>
      {showMore ? (
        <p className="text-sm text-gray-500">
          {description}
          <span className="text-blue-500 cursor-pointer" onClick={toggleExpand}>
            Show less
          </span>
        </p>
      ) : (
        <p className="text-sm text-gray-500">
          {description.length > 200 ? (
            <>
              {description.slice(0, 200)}...
              <span
                className="text-blue-500 cursor-pointer"
                onClick={toggleExpand}
              >
                Show More
              </span>
            </>
          ) : (
            description
          )}
        </p>
      )}

      <Link to={`/${title}`}>
        <div className=" flex items-center justify-center gap-2">
          Explore
          <FaArrowRight className="text-blue-500" />
        </div>
      </Link>
    </div>
  );
};

export default Cards;
