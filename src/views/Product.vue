<template>
  <div class="container text-center mt-5">
    <h2 class="mb-4">Our Products</h2>

    <!-- Search bar -->
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search products..."
      class="form-control mb-4 w-50 mx-auto"
    />

    <!-- Product grid -->
    <div class="product-grid">
      <div
        v-for="(product, index) in filteredProducts"
        :key="index"
        class="product-item"
      >
        <div class="card shadow-lg">
          <img :src="product.image" class="card-img-top" alt="Product Image" />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="text-primary font-weight-bold">${{ product.price }}</p>

            <!-- View Details (Opens Modal) -->
            <button class="btn btn-info w-100 mb-2" @click="openModal(product)">
              View Details
            </button>

            <!-- Add to Cart -->
            <button class="btn btn-primary w-100" @click="addToCart(product)">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Cart Button -->
    <router-link to="/cart" class="btn btn-success mt-4">
      View Cart ({{ cart.length }})
    </router-link>

    <!-- Product Details Modal -->
    <div v-if="selectedProduct" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <!-- Close Button (X) -->
        <button class="close-btn" @click="closeModal">&times;</button>

        <img :src="selectedProduct.image" class="modal-image" alt="Product Image" />
        <h3>{{ selectedProduct.name }}</h3>
        <p>{{ selectedProduct.description }}</p>
        <p class="text-primary font-weight-bold">${{ selectedProduct.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      products: [
        { id: 1, name: "Product 1", description: "Amazing product.", price: 29.99, image: "https://via.placeholder.com/150" },
        { id: 2, name: "Product 2", description: "You will love this one.", price: 39.99, image: "https://via.placeholder.com/150" },
        { id: 3, name: "Product 3", description: "Top-quality and affordable.", price: 19.99, image: "https://via.placeholder.com/150" },
        { id: 4, name: "Product 4", description: "Best seller!", price: 49.99, image: "https://via.placeholder.com/150" },
        { id: 5, name: "Product 5", description: "Best seller!", price: 49.99, image: "https://via.placeholder.com/150" },
      ],
      cart: JSON.parse(localStorage.getItem("cart")) || [] // Retrieve cart from localStorage
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    addToCart(product) {
      this.cart.push(product); // Add product to cart
      localStorage.setItem("cart", JSON.stringify(this.cart)); // Save to localStorage
      alert(`${product.name} added to cart!`);
    },
  },
};
</script>


<style scoped>
/* Responsive product grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-left: 200px;
  margin-right: 200px;
}

/* Card styles */
.card {
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}
.card:hover {
  transform: scale(1.05);
}

/* Search input */
input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

/* Modal Styling */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 400px;
  max-height: 80vh;
  overflow-y: auto; /* Enables scrolling */
  position: relative;
}

/* Modal Image */
.modal-image {
  width: 100%;
  border-radius: 5px;
}

/* Close Button (X) */
/* Close Button (Circular) */
.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  width: 32px;
  height: 32px;
  border: none;
  background: #ff4d4d; /* Red close button */
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}

/* Hover Effect */
.close-btn:hover {
  background: #cc0000;
  transform: scale(1.1);
}

</style>
