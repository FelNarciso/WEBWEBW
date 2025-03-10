<template>
	<div class="card shadow-lg position-relative">
		<!-- Image with fixed height -->
		<div class="card-image-container">
			<img :src="product.image" class="card-img-top" alt="Product Image" />
		</div>

		<div class="card-body d-flex flex-column">
			<h5 class="card-title">{{ product.name }}</h5>
			<p class="card-text flex-grow-1">{{ product.description }}</p>
			<p class="text-primary font-weight-bold">${{ product.price }}</p>

			<!-- Buttons -->
			<div class="buttons">
				<button class="btn btn-details w-100 mb-2" @click="openModal">
					Details
				</button>
				<button class="btn btn-add-to-cart w-100" @click="addToCart">
					Add to Cart
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import { cartStore } from "@/stores/cartStore.js";
	import { auth } from "@/firebase"; // Import Firebase auth

	export default {
	props: {
	product: Object,
	},
	methods: {
	addToCart() {
	const user = auth.currentUser;
	if (user) {
	cartStore.addToCart(this.product); // Add to cart if logged in
	} else {
	alert("Please log in to add products to your cart."); // Show alert if not logged in
	this.$router.push("/signin"); // Redirect to login page
	}
	},
	},
	};
</script>

<style scoped="">
	/* Card */
	.card {
	border-radius: 10px;
	transition: transform 0.3s ease-in-out;
	height: 100%; /* Ensure all cards have the same height */
	display: flex;
	flex-direction: column;
	}

	.card:hover {
	transform: scale(1.05);
	}

	/* Card Image Container */
	.card-image-container {
	height: 200px; /* Fixed height for the image container */
	overflow: hidden; /* Hide overflowing parts of the image */
	display: flex;
	align-items: center;
	justify-content: center;
	}

	.card-img-top {
	width: 100%; /* Ensure the image fills the container */
	height: 100%; /* Ensure the image fills the container */
	object-fit: cover; /* Crop the image to fit the container */
	}

	/* Card Body */
	.card-body {
	flex: 1; /* Allow the card body to grow and fill the space */
	display: flex;
	flex-direction: column;
	}

	/* Buttons */
	.buttons {
	margin-top: auto; /* Push buttons to the bottom */
	}

	/* Buttons */
	.btn-details {
	background: black; /* Black background */
	color: white; /* White text */
	border: none;
	border-radius: 8px; /* Rounded corners */
	transition: 0.3s;
	}

	.btn-details:hover {
	background: #333; /* Darker black on hover */
	}

	.btn-add-to-cart {
	background: white; /* White background */
	color: black; /* Black text */
	border: 1px solid black; /* Black border */
	border-radius: 8px; /* Rounded corners */
	transition: 0.3s;
	}

	.btn-add-to-cart:hover {
	background: #f8f8f8; /* Light gray on hover */
	}

	/* Modal Overlay */
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
	z-index: 1000;
	}

	/* Modal Content */
	.modal-content {
	background: white;
	padding: 20px;
	border-radius: 8px;
	text-align: center;
	width: 80%; /* Make the modal wider */
	max-width: 600px; /* Set a maximum width */
	position: relative;
	margin: 0 auto; /* Center the modal horizontally */
	overflow-y: auto; /* Add scroll if content is too long */
	max-height: 80vh; /* Limit height to 80% of the viewport */
	}

	/* Modal Image */
	.modal-image {
	width: 100%;
	border-radius: 5px;
	margin-bottom: 10px;
	}

	/* Close Button */
	.close-btn {
	position: absolute;
	top: 10px;
	right: 15px;
	width: 32px;
	height: 32px;
	background: #ff4d4d;
	color: white;
	font-size: 20px;
	font-weight: bold;
	border-radius: 50%;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	}
	.close-btn:hover {
	background: #cc0000;
	}
</style>