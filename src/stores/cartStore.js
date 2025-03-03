export const cartStore = {
  cart: [], // Shared cart array

  // Add a product to the cart
  addToCart(product) {
    this.cart.push(product);
  },

  // Remove a product from the cart by index
  removeFromCart(index) {
    this.cart.splice(index, 1);
  },

  // Get the current cart
  getCart() {
    return this.cart;
  }
};