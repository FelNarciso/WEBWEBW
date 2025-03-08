import { reactive } from "vue";

export const cartStore = reactive({
  cart: JSON.parse(localStorage.getItem("cart")) || [],

  addToCart(product) {
    const exists = this.cart.some((item) => item.id === product.id);
    if (!exists) {
      this.cart.push(product);
      this.saveCart();
      alert("✅ Added to cart successfully!"); // Temporary aesthetic notification
    } else {
      alert("❌ This product is already in your cart!");
    }
  },

  removeFromCart(index) {
    this.cart.splice(index, 1);
    this.saveCart();
  },

  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  },

  loadCart() {
    this.cart.length = 0;
    this.cart.push(...(JSON.parse(localStorage.getItem("cart")) || []));
  }
});
