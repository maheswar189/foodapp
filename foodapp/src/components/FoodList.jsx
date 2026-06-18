import FoodItem from "./FoodItem.jsx";
export default function FoodList({ foodData }) {
  return (
    <div>
      {Array.isArray(foodData)
        ? foodData.map((food) => (
            <FoodItem key={food.id || food.title} food={food} />
          ))
        : null}
    </div>
  );
}
