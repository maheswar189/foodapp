import { useState } from "react";
import Search from "./components/Search.jsx";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Search foodData={foodData} setFoodData={setFoodData} />
      {foodData.map((food) => (
        <h1>{food.title}</h1>
      ))}
    </div>
  );
}

export default App;
