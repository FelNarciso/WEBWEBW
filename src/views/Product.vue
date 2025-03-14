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
	import ProductCard from "@/views/ProductCard.vue"; 
	import { cartStore } from "@/stores/cartStore.js"; 

	export default {
	components: {
	ProductCard, 
	},
	data() {
	return {
	searchQuery: "",
	products: [
	{ id: 1, name: "Samsung Television", description: "32'' HD N4003 TV.", price: 29.99, image: "https://images.samsung.com/is/image/samsung/ph-hdtv-n4003-ua32n4003arxxp-frontblack-100425777?$720_576_JPG$" },
	{ id: 2, name: "Philips", description: "LED 4K Ambilight TV", price: 39.99, image: "https://images.philips.com/is/image/philipsconsumer/a10ea7f6c75a4cf4b7caafaf00cba3dd?$pnglarge$&wid=960" },
	{ id: 3, name: "Le Creuse", description: "Signature Enameled Cast Iron Skillet Fry Pan", price: 19.99, image: "https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202441/0013/le-creuset-signature-enameled-cast-iron-skillet-fry-pan-o.jpg" },
	{ id: 4, name: "Wüsthof", description: "Classic Chef's Knife", price: 49.99, image: "https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202508/0024/img350o.jpg" },
	{ id: 5, name: "Formal Clothing", description: "Set of tuxedo, slacks, and internal coat", price: 49.99, image: "./prods/cloth1.jpg" },
	{ id: 6, name: "Pokemon Pajamas - Charizard", description: "A Charizard-inspired pajamas for sleeping", price: 29.99, image: "./prods/cloth2.jpg" },
	{ id: 7, name: "A Book on C", description: "Learn C language with this book written by Ira Pohl", price: 39.99, image: "./prods/book1.jpg" },
	{ id: 8, name: "Bloodborne", description: "Witness the fantasy of this Lovecraft-inspired world as a hunter.", price: 19.99, image: "./prods/book2.jpg" },
	{ id: 9, name: "LEGO Set - Star Wars", description: "Experience Star Wars through building blocks!", price: 49.99, image: "./prods/toy1.jpg" },
	{ id: 10, name: "Yoyos", description: "Classic fun in the palm of your hand—smooth spins, cool tricks, endless entertainment!", price: 49.99, image: "./prods/toy2.jpg" },
	],
	cart: JSON.parse(localStorage.getItem("cart")) || [], 
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
	this.cart.push(product); 
	localStorage.setItem("cart", JSON.stringify(this.cart)); 
	alert(`${product.name} added to cart!`);
	},
	},
	};
</script>

<style scoped="">
	/* Background for the entire page */
	.product-page {
	background-image: url('@/views/img/productbg.jpg'); 
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat; 
	background-attachment: fixed; 
	min-height: 100vh; 
	padding-top: 60px; 
	position: relative; 
	}

	/* Semi-transparent overlay */
	.product-page::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
	z-index: 1; 
	}

	/* Container */
	.container {
	position: relative; 
	z-index: 2; 
	background: transparent;
	border-radius: 10px; 
	padding: 20px; 
	}

	/* White box for "Our Products" */
	.title-container {
	background: white;
	color: black; 
	padding: 20px; 
	border-radius: 8px; 
	margin-bottom: 20px; 
	max-width: 600px; 
	margin-left: auto; 
	margin-right: auto; 
	text-align: center; 
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
	}

	/* Search Bar */
	.search-bar {
	width: 100%; 
	max-width: 600px; 
	margin: 0 auto; 
	padding: 12px; 
	font-size: 16px; 
	border-radius: 8px;
	border: 1px solid #ddd; 
	background: rgba(255, 255, 255, 0.8); 
	}

	/* Product Grid */
	.product-grid {
	display: grid;
	grid-template-columns: repeat(5, 1fr); 
	gap: 16px; 
	row-gap: 100px; 
	margin: 0 200px; 
	}

	/* Media query for tablets (e.g., screens less than 1024px) */
	@media (max-width: 1024px) {
	.product-grid {
	grid-template-columns: repeat(3, 1fr); 
	margin: 0 100px; 
	}
	}

	/* Media query for smaller tablets (e.g., screens less than 768px) */
	@media (max-width: 768px) {
	.product-grid {
	grid-template-columns: repeat(2, 1fr); 
	margin: 0 50px; 
	}
	}

	/* Media query for mobile devices (e.g., screens less than 480px) */
	@media (max-width: 480px) {
	.product-grid {
	grid-template-columns: repeat(1, 1fr); 
	margin: 0 20px;
	row-gap: 50px;
	}
	}

	/* Fixed "View Cart" Button */
	.fixed-cart-button {
	position: fixed; 
	bottom: 20px; 
	right: 20px; 
	z-index: 1000; 
	}

	.fixed-cart-button .btn-view-cart {
	background: black; 
	color: white; 
	padding: 12px 24px; 
	font-size: 1rem;
	border-radius: 8px; 
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
	transition: transform 0.3s ease-in-out;
	}

	.fixed-cart-button .btn-view-cart:hover {
	background: #333; 
	transform: scale(1.05);
	}
</style>