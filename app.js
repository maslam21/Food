
const foodData = [
  { 
    name: "Pizza",
    price: "$10",
    details: "Delicious pizza topped with cheese, tomato sauce, and your choice of toppings.",
    image: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg"
  },
  { 
    name: "Burger",
    price: "$8",
    details: "Classic beef burger served with lettuce, tomato, onion, and special sauce.",
    image: "https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg"
  },
  { 
    name: "Spaghetti",
    price: "$12",
    details: "Classic spaghetti with marinara sauce and meatballs and special sauce.",
    image: "https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg"
  },
  { 
    name: "Sushi",
    price: "$15",
    details: "Assorted sushi rolls with fresh fish, rice, raita and Salad of Vegetables.",
    image: "https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg"
  },
  { 
    name: "Chicken Tikka Masala",
    price: "$14",
    details: "Creamy chicken curry served with basmati rice, achar, Salad and desired cold drink.",
    image: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg"
  },
  { 
    name: "Caesar Salad",
    price: "$9",
    details: "Fresh romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
    image: "https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg"
  },
  { 
    name: "Tacos",
    price: "$10",
    details: "Traditional Mexican tacos with seasoned meat, salsa, and toppings.",
    image: "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg"
  },
  { 
    name: "Steak",
    price: "$20",
    details: "Juicy grilled steak served with mashed potatoes and vegetables.",
    image: "https://www.themealdb.com/images/media/meals/ssrrrs1503664277.jpg"
  },
  { 
    name: "Pasta Carbonara",
    price: "$13",
    details: "Italian pasta dish with creamy sauce, bacon, and parmesan cheese.",
    image: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg"
  }
];

function renderFoodList(foods) {
  const foodListContainer = document.getElementById("foodList");
  foodListContainer.innerHTML = "";

  foods.forEach(food => {
    const card = document.createElement("div");
    card.classList.add("card", "col-md-4", "mb-4");
    card.innerHTML = `
      <img src="${food.image}" class="card-img-top" alt="${food.name}">
      <div class="card-body">
        <h5 class="card-title">${food.name}</h5>
        <p class="card-text">Price: ${food.price}</p>
        <p class="card-text">${food.details}</p>
        <button class="btn btn-primary addToCartBtn">Add to Cart</button>
        <!-- Heart icon for wishlist -->
        <button class="btn btn-outline-danger wishlist-btn"><i class="fas fa-heart"></i></button>
      </div>
    `;
    foodListContainer.appendChild(card);

    const wishlistBtn = card.querySelector(".wishlist-btn");
    wishlistBtn.addEventListener("click", (event) => {
      event.stopPropagation(); 
      addToWishlist(food); 
      wishlistBtn.classList.toggle("text-danger"); 
    });

    const addToCartBtn = card.querySelector(".addToCartBtn");
    addToCartBtn.addEventListener("click", () => addToCart(food));
  });
}


function addToCart(food) {
  const cartItem = {
    name: food.name,
    price: food.price,
    quantity: 1 
  };

  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  const existingItem = cartItems.find(item => item.name === food.name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push(cartItem);
  }

  localStorage.setItem('cart', JSON.stringify(cartItems));

  alert(`${food.name} has been added to the cart! (Quantity: ${existingItem ? existingItem.quantity : 1})`);
}


function addToWishlist(food) {
  
  const wishlistItem = {
    name: food.name,
    price: food.price
  };

  const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];

  const existingItem = wishlistItems.find(item => item.name === food.name);

  if (existingItem) {
    wishlistItems.splice(wishlistItems.indexOf(existingItem), 1);
    alert(`${food.name} has been removed from the wishlist!`);
  } else {
    wishlistItems.push(wishlistItem);
    alert(`${food.name} has been added to the wishlist!`);
  }

  localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  function updateWishlistButtonState(foodName) {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistButtons = document.querySelectorAll(".wishlist-btn");
  
    // wishlistButtons.forEach(button => {
    //   const buttonFoodName = button.closest(".card").querySelector(".card-title").textContent;
    //   if (buttonFoodName === foodName) {
    //     const heartIcon = button.querySelector("i.fas.fa-heart"); // Target the heart icon
    //     if (wishlistItems.some(item => item.name === foodName)) {
    //       heartIcon.classList.add("text-danger"); // Solid red color for existing items
    //     } else {
    //       heartIcon.classList.remove("text-danger"); // Remove red color for non-existing items
    //     }
    //   }
    // }
  //);
  }

}


function handleSearch() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const filteredFoods = foodData.filter(food => food.name.toLowerCase().includes(searchTerm));
  renderFoodList(filteredFoods);
}


function renderWishlist() {
  const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
}

document.getElementById("wishlistLink").addEventListener("click", function() {
  renderWishlist();
  window.location.href = "wishlist.html";
});
document.getElementById("searchInput").addEventListener("input", handleSearch); 
renderFoodList(foodData);