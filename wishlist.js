
function renderWishlist() {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistContainer = document.getElementById("wishlist");
    wishlistContainer.innerHTML = "";
  
    wishlistItems.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card", "col-md-4", "mb-4");
      card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">Price: ${item.price}</p>
        </div>
      `;
      wishlistContainer.appendChild(card);
    });
  }
  
  renderWishlist();
  
