<template>
	<div v-if="product" class="card shadow-lg position-relative">
		<div class="card-image-container">
			<img :src="product.image" class="card-img-top" alt="Product Image" />
		</div>

		<div class="card-body d-flex flex-column">
			<h5 class="card-title">{{ product.name }}</h5>
			<p class="card-text flex-grow-1">{{ product.description }}</p>
			<p class="text-primary font-weight-bold">${{ product.price }}</p>

			<div class="buttons">
				<button class="btn btn-details w-100 mb-2" @click="openModal">
					Details
				</button>
				<button class="btn btn-add-to-cart w-100" @click="addToCart">
					Add to Cart
				</button>
			</div>
		</div>

		<Teleport to="body"  v-if="isModalOpen">
			<div class="modal-overlay" @click="closeModal">
				<div class="modal-content" @click.stop="">
					<button class="close-btn" @click="closeModal">&times;</button>
					<img :src="product.image" class="modal-image" alt="Product Image" />
					<h3>{{ product.name }}</h3>
					<p>{{ product.description }}</p>
					<p class="text-primary font-weight-bold">${{ product.price }}</p>
				</div>
			</div>
		</Teleport>
	</div>
</template>

<script>
	import { ref } from "vue";
	import { cartStore } from "@/stores/cartStore.js";
	import { auth } from "@/firebase";

	export default {
	props: {
	product: Object,
	},
	setup() {
	const isModalOpen = ref(false);

	const openModal = () => {
	isModalOpen.value = true;
	};

	const closeModal = () => {
	isModalOpen.value = false;
	};


	return { isModalOpen, openModal, closeModal};
	},
    
    methods: {
        addToCart() {
	       const user = auth.currentUser;
	       if (user) {
	           cartStore.addToCart(this.product);
	       } else {
	           alert("Please log in to add products to your cart.");
	           this.$router.push("/signin");
	       }
	}

    }
	};

</script>

<style scoped="">
	.card {
	border-radius: 10px;
	transition: transform 0.3s ease-in-out;
	height: 100%;
	display: flex;
	flex-direction: column;
	}

	.card:hover {
	transform: scale(1.05);
	}

	.card-image-container {
	height: 200px;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	}

	.card-img-top {
	width: 100%;
	height: 100%;
	object-fit: cover;
	}

	.card-body {
	flex: 1;
	display: flex;
	flex-direction: column;
	}

	.buttons {
	margin-top: auto;
	}

	.btn-details {
	background: black;
	color: white;
	border: none;
	border-radius: 8px;
	transition: 0.3s;
	}

	.btn-details:hover {
	background: #333;
	}

	.btn-add-to-cart {
	background: white;
	color: black;
	border: 1px solid black;
	border-radius: 8px;
	transition: 0.3s;
	}

	.btn-add-to-cart:hover {
	background: #f8f8f8;
	}

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

	.modal-content {
	background: white;
	padding: 20px;
	border-radius: 8px;
	text-align: center;
	width: 80%;
	max-width: 600px;
	margin: 0 auto;
	overflow-y: auto;
	max-height: 80vh;
	}

	.modal-image {
	width: 100%;
	border-radius: 5px;
	margin-bottom: 10px;
	}

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
