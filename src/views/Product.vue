<template>
	<div class="product-page">
		<div class="container mt-4 pt-4">
			<!-- Adjusted padding-top to make it slightly higher -->
			<!-- White box for "Our Products" -->
			<div class="title-container">
				<h2 class="text-center">Our Products</h2>
			</div>

			<!-- Centered Search Bar -->
			<div class="row mb-4 justify-content-center">
				<div class="col-12 col-md-8 col-lg-6 d-flex justify-content-center">
					<input
					  v-model="searchQuery"
					  type="text"
					  placeholder="Search products..."
					  class="form-control search-bar"
          />
				</div>
			</div>

			<!-- Product grid -->
			<div class="product-grid">
				<ProductCard
				  v-for="product in filteredProducts"
				  :key="product.id"
				  :product="product"
				  @add-to-cart="addToCart"
        />
			</div>

			<!-- Fixed "View Cart" Button -->
			<div class="fixed-cart-button">
				<router-link to="/cart" class="btn btn-view-cart">
					View Cart
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import ProductCard from "@/views/ProductCard.vue"; // Import the ProductCard component
	import { cartStore } from "@/stores/cartStore.js"; // Import the cart store

	export default {
	components: {
	ProductCard, // Register the ProductCard component
	},
	data() {
	return {
	searchQuery: "",
	products: [
	{ id: 1, name: "Samsung Television", description: "32'' HD N4003 TV.", price: 29.99, image: "https://images.samsung.com/is/image/samsung/ph-hdtv-n4003-ua32n4003arxxp-frontblack-100425777?$720_576_JPG$" },
	{ id: 2, name: "Philips", description: "LED 4K Ambilight TV", price: 39.99, image: "https://images.philips.com/is/image/philipsconsumer/a10ea7f6c75a4cf4b7caafaf00cba3dd?$pnglarge$&wid=960" },
	{ id: 3, name: "Le Creuse", description: "Signature Enameled Cast Iron Skillet Fry Pan", price: 19.99, image: "https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202441/0013/le-creuset-signature-enameled-cast-iron-skillet-fry-pan-o.jpg" },
	{ id: 4, name: "Wüsthof", description: "Classic Chef's Knife", price: 49.99, image: "https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202508/0024/img350o.jpg" },
	{ id: 5, name: "Product 5", description: "Best seller!", price: 49.99, image: "https://via.placeholder.com/150" },
	{ id: 6, name: "Product 1", description: "Amazing product.", price: 29.99, image: "https://via.placeholder.com/150" },
	{ id: 7, name: "Product 2", description: "You will love this one.", price: 39.99, image: "https://via.placeholder.com/150" },
	{ id: 8, name: "Product 3", description: "Top-quality and affordable.", price: 19.99, image: "https://via.placeholder.com/150" },
	{ id: 9, name: "Product 4", description: "Best seller!", price: 49.99, image: "https://via.placeholder.com/150" },
	{ id: 10, name: "Product 5", description: "Best seller!", price: 49.99, image: "https://via.placeholder.com/150" },
	],
	cart: JSON.parse(localStorage.getItem("cart")) || [], // Retrieve cart from localStorage
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

<style scoped="">
	/* Background for the entire page */
	.product-page {
	background-image: url('@/views/img/productbg.jpg'); /* Path to your background image */
	background-size: cover; /* Ensures the image covers the entire page */
	background-position: center; /* Centers the image */
	background-repeat: no-repeat; /* Prevents the image from repeating */
	background-attachment: fixed; /* Makes the background image fixed */
	min-height: 100vh; /* Ensures the page covers the full viewport height */
	padding-top: 60px; /* Adjusted to make it slightly higher */
	position: relative; /* Needed for overlay positioning */
	}

	/* Semi-transparent overlay */
	.product-page::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4); /* Black with 40% opacity */
	z-index: 1; /* Ensures overlay is above the background image */
	}

	/* Container */
	.container {
	position: relative; /* Ensures content is above the overlay */
	z-index: 2; /* Higher than overlay */
	background: transparent; /* Remove white background */
	border-radius: 10px; /* Rounded corners */
	padding: 20px; /* Add some padding */
	}

	/* White box for "Our Products" */
	.title-container {
	background: white; /* White background */
	color: black; /* Black text */
	padding: 20px; /* Add padding */
	border-radius: 8px; /* Rounded corners */
	margin-bottom: 20px; /* Space below the title */
	max-width: 600px; /* Same width as the search bar */
	margin-left: auto; /* Center horizontally */
	margin-right: auto; /* Center horizontally */
	text-align: center; /* Center text */
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add subtle shadow */
	}

	/* Search Bar */
	.search-bar {
	width: 100%; /* Make the search bar fill its container */
	max-width: 600px; /* Adjust the maximum width as needed */
	margin: 0 auto; /* Center the search bar horizontally */
	padding: 12px; /* Adjust padding */
	font-size: 16px; /* Adjust font size */
	border-radius: 8px; /* Add rounded corners */
	border: 1px solid #ddd; /* Add a border */
	background: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
	}

	/* Product Grid */
	.product-grid {
	display: grid;
	grid-template-columns: repeat(5, 1fr); /* 5 columns by default */
	gap: 16px; /* Space between items */
	row-gap: 100px; /* Adds spacing between rows */
	margin: 0 200px; /* Add 200px spacing on both sides */
	}

	/* Media query for tablets (e.g., screens less than 1024px) */
	@media (max-width: 1024px) {
	.product-grid {
	grid-template-columns: repeat(3, 1fr); /* 3 columns for tablets */
	margin: 0 100px; /* Reduce side margins */
	}
	}

	/* Media query for smaller tablets (e.g., screens less than 768px) */
	@media (max-width: 768px) {
	.product-grid {
	grid-template-columns: repeat(2, 1fr); /* 2 columns for smaller tablets */
	margin: 0 50px; /* Further reduce side margins */
	}
	}

	/* Media query for mobile devices (e.g., screens less than 480px) */
	@media (max-width: 480px) {
	.product-grid {
	grid-template-columns: repeat(1, 1fr); /* 1 column for mobile */
	margin: 0 20px; /* Minimal side margins */
	row-gap: 50px; /* Reduce row gap for mobile */
	}
	}

	/* Fixed "View Cart" Button */
	.fixed-cart-button {
	position: fixed; /* Fix the button in place */
	bottom: 20px; /* Position it 20px from the bottom */
	right: 20px; /* Position it 20px from the right */
	z-index: 1000; /* Ensure it's above other content */
	}

	.fixed-cart-button .btn-view-cart {
	background: black; /* Black background */
	color: white; /* White text */
	padding: 12px 24px; /* Adjust padding */
	font-size: 1rem; /* Adjust font size */
	border-radius: 8px; /* Rounded corners */
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow for depth */
	transition: transform 0.3s ease-in-out;
	}

	.fixed-cart-button .btn-view-cart:hover {
	background: #333; /* Darker black on hover */
	transform: scale(1.05); /* Add hover effect */
	}
</style>