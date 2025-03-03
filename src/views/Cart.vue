<template>
    <div class="container text-center mt-5">
      <h2 class="mb-4">Shopping Cart</h2>
  
      <div v-if="cart.length === 0">
        <p>Your cart is empty. Start adding some products!</p>
        <router-link to="/" class="btn btn-primary">Continue Shopping</router-link>
      </div>
  
      <div v-else>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cart" :key="index">
              <td><img :src="item.image" alt="Product Image" width="50" /></td>
              <td>{{ item.name }}</td>
              <td>${{ item.price }}</td>
              <td><button class="btn btn-danger" @click="removeFromCart(index)">Remove</button></td>
            </tr>
          </tbody>
        </table>
  
        <p class="text-right font-weight-bold">Total: ${{ totalPrice }}</p>
  
        <button class="btn btn-success">Proceed to Checkout</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cart: JSON.parse(localStorage.getItem("cart")) || [], // Retrieve cart from localStorage
      };
    },
    computed: {
      totalPrice() {
        return this.cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
      },
    },
    methods: {
      removeFromCart(index) {
        this.cart.splice(index, 1); // Remove product
        localStorage.setItem("cart", JSON.stringify(this.cart)); // Update storage
      },
    },
  };
  </script>
  