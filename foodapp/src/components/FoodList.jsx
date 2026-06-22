import FoodItem from "./FoodItem.jsx";
export default function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      {Array.isArray(foodData)
        ? foodData.map((food) => (
            <FoodItem
              setFoodId={setFoodId}
              key={food.id || food.title}
              food={food}
            />
          ))
        : null}
    </div>
  );
}
