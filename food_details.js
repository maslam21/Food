document.addEventListener("DOMContentLoaded", function() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  
  const foodName = urlParams.get('name');
  const foodPrice = urlParams.get('price');
  const foodDetails = urlParams.get('details');

  const foodDetailsContainer = document.getElementById("foodDetails");
  foodDetailsContainer.innerHTML = `<h2>${foodName}</h2><p><strong>Price:</strong> ${foodPrice}</p><p><strong>Details:</strong> ${foodDetails}</p>`;

  const addToCartBtn = document.getElementById("addToCartBtn");
  addToCartBtn.addEventListener("click", function() {
   
    addToCart(foodName, foodPrice);
  });
});

function addToCart(foodName, foodPrice) {
  this.location.href = `cart.html?name=${encodeURIComponent(foodName)}&price=${encodeURIComponent(foodPrice)}`;
}

// function addToCart(food,price){

//   window.localStorage.href=`cart.html?name=${encodeURIComponent(food)}&prcie=${encodeURIComponent(price)}`;
// }

