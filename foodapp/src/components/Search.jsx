import { useState } from "react";
import { useEffect } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "0786e8e4e5a345c193dc2313d41b8607";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  //Syntax
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className="">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
