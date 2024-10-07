import React, { useState } from 'react';
import './Shop.css'; // Import the Shop styles

const Shop = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 20, image: 'path/to/image1.jpg' },
    { id: 2, name: 'Product 2', price: 30, image: 'path/to/image2.jpg' },
    { id: 3, name: 'Product 3', price: 25, image: 'path/to/image3.jpg' },
    { id: 4, name: 'Product 4', price: 35, image: 'path/to/image4.jpg' },
    { id: 5, name: 'Product 5', price: 15, image: 'path/to/image5.jpg' },
    { id: 6, name: 'Product 6', price: 40, image: 'path/to/image6.jpg' },
  ]);

  const [cart, setCart] = useState([]); // State to hold cart items
  const [showCheckout, setShowCheckout] = useState(false); // State to toggle checkout form
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', expiry: '', cvv: '' }); // State for payment info

  // Handle adding product to cart
  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      // If product already in cart, increase the quantity
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // Add new product to cart with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Handle increasing quantity
  const handleIncreaseQuantity = (productId) => {
    setCart(cart.map(item => 
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Handle decreasing quantity
  const handleDecreaseQuantity = (productId) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return null; // Remove the item if quantity is 1
        }
      }
      return item;
    }).filter(Boolean)); // Filter out any null values
  };

  // Handle removing item from cart
  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Handle checkout form submission
  const handleCheckout = (e) => {
    e.preventDefault();
    // Process payment (this is a mock; you'd integrate with a payment gateway here)
    alert(`Payment processed for ${cart.length} items! Total: $${calculateTotalPrice()}`);
    // Reset cart after successful payment
    setCart([]);
    setShowCheckout(false);
  };

  return (
    <div className="shop-container">
      <h1>Shop</h1>

      {/* Display Products */}
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>

      {/* Display Cart */}
      <div className="cart-container">
        <h2>Cart</h2>
        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </div>
            ))}
            <h3>Total Price: ${calculateTotalPrice()}</h3>
            {/* Checkout Button */}
            <button className="checkout-button" onClick={() => setShowCheckout(!showCheckout)}>
              Checkout
            </button>
          </>
        ) : (
          <p>No items in the cart.</p>
        )}

        {/* Clear Cart Button */}
        {cart.length > 0 && (
          <button className="clear-cart-button" onClick={() => setCart([])}>
            Clear Cart
          </button>
        )}
      </div>

      {/* Checkout Form */}
      {showCheckout && (
        <form className="checkout-form" onSubmit={handleCheckout}>
          <h3>Payment Information</h3>
          <input
            type="text"
            placeholder="Card Number"
            value={paymentInfo.cardNumber}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Expiry Date (MM/YY)"
            value={paymentInfo.expiry}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, expiry: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="CVV"
            value={paymentInfo.cvv}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
            required
          />
          <button type="submit">Pay Now</button>
        </form>
      )}
    </div>
  );
};

export default Shop;
