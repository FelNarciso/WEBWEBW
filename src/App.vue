<template>
	<div>
		<nav :class="['navbar', { 'transparent-navbar': isHome, 'black-navbar': !isHome }]">
			<div class="container">
				<a class="logo">ANG POGI NI FRANK</a>
				<ul class="nav-links">
					<li>
						<router-link to="/">Home</router-link>
					</li>
					<li>
						<router-link to="/about">About</router-link>
					</li>
					<li>
						<router-link to="/contact">Contact</router-link>
					</li>
					<li>
						<router-link to="/product">Products</router-link>
					</li>
					<li>
						<router-link to="/cart">Cart</router-link>
					</li>

					<!-- Account Dropdown -->
					<li class="dropdown" @mouseover="openDropdown" @mouseleave="closeDropdown">
						<a class="dropdown-toggle">Account ▼</a>
						<ul class="dropdown-menu" :class="{ show: isDropdownOpen }">
							<li v-if="!isUserLoggedIn">
								<router-link to="/signin">Sign In</router-link>
							</li>
							<li v-if="!isUserLoggedIn">
								<router-link to="/signup">Sign Up</router-link>
							</li>
							<li v-if="isUserLoggedIn">
								<a @click="logout">Logout</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</nav>

		<router-view />
	</div>
</template>

<script>
	import { ref, onMounted, watch } from "vue";
	import { useRoute, useRouter } from "vue-router";
	import { auth } from "@/firebase";
	import { cartStore } from "@/stores/cartStore.js";

	export default {
	setup() {
	const isDropdownOpen = ref(false);
	const isUserLoggedIn = ref(false);
	const route = useRoute();
	const router = useRouter();
	const isHome = ref(route.path === "/");

	// Check if user is logged in
	onMounted(() => {
	auth.onAuthStateChanged((user) => {
	isUserLoggedIn.value = !!user;
	if (user) {
	cartStore.loadCart(); // Load cart when user logs in
	} else {
	cartStore.clearCart(); // Clear cart when user logs out
	}
	});
	});

	// Watch for route changes to update navbar style
	watch(route, (newRoute) => {
	isHome.value = newRoute.path === "/";
	});

	const openDropdown = () => {
	isDropdownOpen.value = true;
	};

	const closeDropdown = () => {
	isDropdownOpen.value = false;
	};

	// Logout function
	const logout = async () => {
	try {
	await auth.signOut();
	alert("Logged out successfully!");
	router.push("/signin"); // Redirect to sign-in page
	window.location.reload(); // Refresh the page
	} catch (error) {
	alert(error.message);
	}
	};

	return { isDropdownOpen, isUserLoggedIn, isHome, openDropdown, closeDropdown, logout };
	},
	};
</script>

<style>
	/* Global Styles */
	body {
	font-family: "Poppins", sans-serif;
	background: #f8f8f8;
	margin: 0;
	}

	/* Navbar */
	.navbar {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 5%;
	z-index: 1000;
	transition: background 0.3s ease, color 0.3s ease;
	}

	/* Transparent Navbar for Home */
	.transparent-navbar {
	background: transparent;
	box-shadow: none;
	color: white;
	}

	/* Black Navbar for Other Pages */
	.black-navbar {
	background: #000;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	color: white;
	}

	/* Logo */
	.logo {
	font-size: 1.5rem;
	font-weight: bold;
	background: linear-gradient(90deg, #ffffff, #e0e0e0);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	}

	/* Navigation Links */
	.nav-links {
	list-style: none;
	display: flex;
	gap: 20px;
	padding: 0;
	margin: 0;
	}

	.nav-links li {
	position: relative;
	}

	.nav-links a {
	text-decoration: none;
	color: white;
	font-weight: 500;
	padding: 8px 12px;
	border-radius: 5px;
	transition: 0.3s;
	display: block;
	}

	.nav-links a:hover {
	background: rgba(255, 255, 255, 0.2);
	}

	/* Dropdown */
	.dropdown {
	position: relative;
	}

	.dropdown-toggle {
	cursor: pointer;
	display: block;
	padding: 8px 12px;
	color: white;
	}

	.dropdown-menu {
	position: absolute;
	top: 100%;
	right: 0;
	background: white;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	min-width: 150px;
	list-style: none;
	padding: 0;
	opacity: 0;
	visibility: hidden;
	transition: opacity 0.3s ease, visibility 0.3s ease;
	}

	/* Show dropdown when active */
	.dropdown-menu.show {
	opacity: 1;
	visibility: visible;
	}

	/* Dropdown Links */
	.dropdown-menu li {
	padding: 0;
	}

	.dropdown-menu li a {
	text-decoration: none;
	color: black;
	display: block;
	padding: 10px;
	width: 100%;
	text-align: left;
	}

	.dropdown-menu li a:hover {
	background: #e6b800;
	color: white;
	}
</style>