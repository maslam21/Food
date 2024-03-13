document.addEventListener("DOMContentLoaded", function() {
  
  const cartItemsContainer = document.getElementById("cartItems");
  const totalPriceElement = document.getElementById("totalAmount");
  const checkoutBtn = document.getElementById("checkoutBtn");

  function updateCart() {
    cartItemsContainer.innerHTML = "";

    cartItems.forEach(item => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cartItem");
      cartItem.textContent = item.name + " - " + item.price;
      cartItemsContainer.appendChild(cartItem);
    });

    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += parseFloat(item.price.replace("$", ""));
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
  }

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const foodName = urlParams.get('name');
  const foodPrice = urlParams.get('price');

  if (foodName && foodPrice) {
    addToCart(foodName, foodPrice);
  }

  checkoutBtn.addEventListener("click", checkout);
});

let cartItems = [];

function addToCart(name, price) {
  const cartItem = { name, price };
  cartItems.push(cartItem);
  updateCart();
}
function updateCart() {
  const cartItemsContainer = document.getElementById("cartItems");
  const totalPriceElement = document.getElementById("totalAmount");

  cartItemsContainer.innerHTML = "";

  cartItems.forEach(item => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cartItem");
      cartItem.textContent = item.name + " - " + item.price;
      cartItemsContainer.appendChild(cartItem);
  });

  let totalPrice = 0;
  cartItems.forEach(item => {
      totalPrice += parseFloat(item.price.replace("$", ""));
  });

  totalPriceElement.textContent = totalPrice.toFixed(2);
}
function checkout() {

  cartItems = [];
  updateCart(); 
  alert("Thank you for your order!"); 
}
  function incrementItem() {
    if (cartItems.length > 0) {
      cartItems[0].quantity++;
      updateCart();
    }
  }

  function decrementItem() {
    if (cartItems.length > 0 && cartItems[0].quantity > 1) {
      cartItems[0].quantity--;
      updateCart();
    }
  }

  checkoutBtn.addEventListener("click", checkout);

  incrementBtn.addEventListener("click", incrementItem);

  decrementBtn.addEventListener("click", decrementItem);