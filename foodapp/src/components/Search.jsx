import { useState } from "react";
import { useEffect } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "0786e8e4e5a345c193dc2313d41b8607";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  //Syntax
  useEffect(() => {
    async function fetchFood() {
      //onst res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      //onst data = await res.json();
      //onsole.log(data);
      //nsole.log(JSON.stringify(data.results));
      const responseData = [
        {
          id: 716300,
          title: "Plantain Pizza",
          image: "https://img.spoonacular.com/recipes/716300-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 680975,
          title: "BLT Pizza",
          image: "https://img.spoonacular.com/recipes/680975-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 655847,
          title: "Pesto Veggie Pizza",
          image: "https://img.spoonacular.com/recipes/655847-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 662264,
          title: "summer vegetable pizza",
          image: "https://img.spoonacular.com/recipes/662264-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 636593,
          title: "Butternut Squash Pizza",
          image: "https://img.spoonacular.com/recipes/636593-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 651956,
          title: "Mini eggplant pizza",
          image: "https://img.spoonacular.com/recipes/651956-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 661640,
          title: "Stilton Balsamic Pizza",
          image: "https://img.spoonacular.com/recipes/661640-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 654523,
          title: "Paneer & Fig Pizza",
          image: "https://img.spoonacular.com/recipes/654523-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 644953,
          title: "Goat Cheese Pesto Pizza",
          image: "https://img.spoonacular.com/recipes/644953-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 651624,
          title: "Mexican Fiesta Salad Pizza",
          image: "https://img.spoonacular.com/recipes/651624-312x231.jpg",
          imageType: "jpg",
        },
      ];
      //setFoodData(data.results);
      setFoodData(responseData);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
