<template>
  <div class="hero">
    <h1>Welcome to Our Shop</h1>
    <p>Find the best deals on your favorite products!</p>
    <router-link to="/product" class="btn btn-primary">Shop Now</router-link>

  </div>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 100px 20px;
  background: white;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.hero p {
  font-size: 1.2rem;
  color: #555;
}

/* Button */
.btn {
  display: inline-block;
  background: #ffcc00;
  color: black;
  text-decoration: none;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
}

.btn:hover {
  background: #e6b800;
  transform: scale(1.05);
}
</style>
