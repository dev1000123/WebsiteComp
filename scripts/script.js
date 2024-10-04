let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, productPrice) {
    const productIndex = cart.findIndex(item => item.name === productName);
    if (productIndex >= 0) {
        cart[productIndex].quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            ${item.name} - $${item.price} 
            <button onclick="decreaseQuantity(${index})">–</button> 
            <span>${item.quantity}</span> 
            <button onclick="increaseQuantity(${index})">+</button>
            <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItemsContainer.appendChild(itemDiv);
        totalPrice += item.price * item.quantity;
    });

    const discount = (totalPrice > 1000) ? totalPrice * 0.1 : 0; // 10% discount on orders above $1000
    const deliveryCharge = 20;
    const finalAmount = totalPrice - discount + deliveryCharge;

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
    document.getElementById('discount').textContent = discount.toFixed(2);
    document.getElementById('final-amount').textContent = finalAmount.toFixed(2);
    document.getElementById('delivery-date').textContent = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(); // Estimated delivery date in 7 days
}

function increaseQuantity(index) {
    cart[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

// Load cart items on cart page
if (document.title === "Shopping Cart") {
    displayCartItems();
}
