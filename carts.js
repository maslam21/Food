function renderCart() {
  const cartItemsContainer = document.getElementById("cartItems");
  cartItemsContainer.innerHTML = "";

  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  if (!Array.isArray(cartItems)) {
    cartItems = [cartItems];
  }

  let totalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    const card = document.createElement("div");
    card.classList.add("card");

    item.quantity = item.quantity || 1;

    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">Price: ${item.price}</p>
        <button class="btn btn-danger removeBtn" data-index="${i}">Remove</button>
        <button class="btn btn-secondary incrementBtn" data-index="${i}">+</button>
        <span class="mx-2 quantitySpan" data-index="${i}">${item.quantity}</span>
        <button class="btn btn-secondary decrementBtn" data-index="${i}">-</button>
      </div>
    `;
    cartItemsContainer.appendChild(card);

    const removeBtn = card.querySelector(".removeBtn");
    removeBtn.addEventListener("click", () => removeItem(i));

    const incrementBtn = card.querySelector(".incrementBtn");
    incrementBtn.addEventListener("click", () => {
      incrementItem(i);
      renderCart(); 
    });

    const decrementBtn = card.querySelector(".decrementBtn");
    decrementBtn.addEventListener("click", () => {
      decrementItem(i);
      renderCart(); 
    });

    totalPrice += parseFloat(item.price.replace('$', '')) * item.quantity;
  }

  const totalPriceSpan = document.getElementById("totalPrice");
  totalPriceSpan.textContent = `$${totalPrice.toFixed(2)}`;
}


function removeItem(index) {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cartItems.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  renderCart();
}


function incrementItem(index) {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cartItems[index].quantity += 1;
  localStorage.setItem('cart', JSON.stringify(cartItems));
}


function decrementItem(index) {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  if (cartItems[index].quantity > 1) {
    cartItems[index].quantity -= 1;
  }
  localStorage.setItem('cart', JSON.stringify(cartItems));
}

renderCart();

