<template>
  <div>
    <nav :class="['navbar', { 'transparent-navbar': isHomePage, 'black-white-navbar': !isHomePage }]">
      <div class="container">
        <a class="logo">ANG POGI NI FRANK</a>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/product">Products</router-link></li>
          <li><router-link to="/cart">Cart</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    isHomePage() {
      return this.$route.path === '/';
    },
  },
};
</script>

<style>
/* Global Styles */
body {
  font-family: 'Poppins', sans-serif;
  background: #f8f8f8;
  margin: 0;
  padding-top: 0; /* Remove padding-top since navbar is fixed */
}

/* Navbar */
.navbar {
  position: fixed; /* Keeps navbar fixed */
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5%;
  color: white;
  z-index: 1000; /* Ensures navbar stays on top */
  transition: background 0.3s ease, color 0.3s ease; /* Smooth transition */
}

/* Default Navbar (Black and White) */
.black-white-navbar {
  background: #000; /* Black background */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

.black-white-navbar .logo {
  color: #fff; /* White text for logo */
}

.black-white-navbar .nav-links a {
  color: #fff; /* White text for links */
}

.black-white-navbar .nav-links a:hover {
  background: rgba(255, 255, 255, 0.1); /* Subtle hover effect */
}

/* Transparent Navbar (for Home Page) */
.navbar.transparent-navbar {
  background: transparent; /* Make navbar transparent */
  box-shadow: none; /* Remove shadow */
}

/* Logo with Gradient Text */
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(90deg, #ffffff, #e0e0e0); /* White gradient */
  -webkit-background-clip: text; /* Clip the background to the text */
  -webkit-text-fill-color: transparent; /* Make the text transparent */
  background-clip: text; /* Standard property for modern browsers */
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
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