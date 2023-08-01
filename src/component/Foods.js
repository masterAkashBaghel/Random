import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import img from '../assets/foodsr.jpg'
import Spinner from './Spinner';

const Foods = () => {
  const [loading,setLoading]= useState(true);
  const API_KEY = process.env.REACT_APP_FOODS_API_KEY;
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState("");
  const [servings, setServings] = useState('');
  const [instructions, setInstructions] = useState('');
  const[querys,SetQuey] = useState('burger');
  

  async function fetchFood()
  {
   
    const options = {
        method: 'GET',
        url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
        params: {
          query: `${querys}`
        },
        headers: {
          'X-RapidAPI-Key': `${API_KEY}`,
          'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
        }
      };
      
      try {
           setLoading(true);
          const response = await axios.request(options);
          console.log("recipie")
          setTitle(response.data[0].title);
          setIngredients(response.data[0].ingredients);
          setServings(response.data[0].servings);
          setInstructions(response.data[0].instructions);
          setLoading(false);
    
      } catch (error) {
          console.error(error);
      }
  }
  useEffect(()=>{
    fetchFood();
  },[])
  const recipieHandler = () => {
    fetchFood();
  }
   
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center mt-[150px] w-[70%] mx-auto border-2 hello rounded-xl">

      {/* First Box */}
      <div className="w-full sm:w-1/2 flex flex-col gap-3 p-4">
      <img className="border rounded-xl px-2 m-1 py-auto" src={img} alt="foods" />
        <h1 className="text-center font-semibold text-[#11BC79]">Find Your Recipe</h1>
        <input
          className="border border-gray-300 rounded-full px-4 py-2 outline-none focus:border-blue-500 hover:border-blue-500 transition-colors duration-300 mx-auto w-[50%]"
          type="text"
          placeholder="Enter a query"
          name="name"
          value={querys}
          onChange={(e) => SetQuey(e.target.value)}
        />
        <button className="mx-auto" onClick={recipieHandler}>
          Find Recipe
        </button>
      </div>

      {/* Second Box */}
      <div className="w-full sm:w-1/2 flex flex-col p-4">
       
    {
      loading ? (<Spinner></Spinner>):(
     <>
        <h1 className="text-center font-semibold text-[#11BC79]">{title}</h1>
        <div className="w-[50%] h-[2px] m-2 bg-fuchsia-600 mx-auto"></div>
        <p className="font-semibold">Servings: {servings}</p>
        <h2 className="font-semibold">Ingredients:</h2>
        <p className="text-[#ac6629]">{ingredients}</p>
        <h2 className="font-semibold">*Instructions:</h2>
        <p className="opacity-70">{instructions}</p>
     </>
      )
    }
      </div>
    </div>
  );
}

export default Foods
