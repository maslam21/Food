
const foodData = [
  { name: "Pizza", price: "$10", details: "Delicious pizza topped with cheese, tomato sauce, and your choice of toppings." },
  { name: "Burger", price: "$8", details: "Classic beef burger served with lettuce, tomato, onion, and special sauce." },
];

function renderFoodList(foods) {
  const foodListContainer = document.getElementById("foodList");
  foodListContainer.innerHTML = "";

  foods.forEach(food => {
    const foodItem = document.createElement("div");
    foodItem.classList.add("foodItem");
    foodItem.innerHTML = `<strong>${food.name}</strong> - Price: ${food.price}`;
    foodItem.addEventListener("click", () => showFoodDetails(food));
    foodListContainer.appendChild(foodItem);
  });
}

function showFoodDetails(food) {
  window.location.href = `food_details.html?name=${encodeURIComponent(food.name)}&price=${encodeURIComponent(food.price)}&details=${encodeURIComponent(food.details)}`;
}

renderFoodList(foodData);

function handleSearch() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const filteredFoods = foodData.filter(food => food.name.toLowerCase().includes(searchTerm));
  renderFoodList(filteredFoods);
}

document.getElementById("searchInput").addEventListener("input", handleSearch);
