import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Gifs = () => {
  const [gif, fetchData, loading] = useGif();

  return (
    <div>
      <div>
        <h1>Random gifs</h1>
      </div>
      <div>{loading ? <Spinner /> : <img src={gif} alt="random gifs" />}</div>
      <div>
        <button onClick={() => fetchData()}> Generate </button>
      </div>
    </div>
  );
};

export default Gifs;
