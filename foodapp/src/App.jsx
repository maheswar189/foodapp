import { useState } from "react";
import Search from "./components/Search.jsx";
import FoodList from "./components/FoodList.jsx";
function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
    </div>
  );
}

export default App;
