<template>
  <div>
    <nav class="navbar">
      <div class="container">
        <a class="logo" href="#">POTA ANG POGI NI FRANK</a>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/product">Products</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
/* Global Styles */
body {
  font-family: 'Poppins', sans-serif;
  background: #f8f8f8;
  margin: 0;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5%;
  background: linear-gradient(90deg, #ff8000, #ffcc00);
  color: white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: 0.3s;
  padding: 8px 12px;
  border-radius: 5px;
}

.nav-links a:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Button */
.btn {
  background: #ffcc00;
  border: none;
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
