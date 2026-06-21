import { useState } from "react";
import Search from "./components/Search.jsx";
import FoodList from "./components/FoodList.jsx";
import Nav from "./components/Nav.jsx";
import "./App.css";
import Container from "./components/Container.jsx";
function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <FoodList foodData={foodData} />
      </Container>
    </div>
  );
}

export default App;
