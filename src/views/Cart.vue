<template>
	<div class="container cart-container">
		<h2 class="mb-4 title">🛒 Shopping Cart</h2>

		<div v-if="cart.length === 0" class="empty-cart">
			<p>Your cart is empty. Start adding some products!</p>
			<router-link to="/product" class="btn btn-primary">Continue Shopping</router-link>
		</div>

		<div v-else>
			<table class="table cart-table">
				<thead>
					<tr>
						<th>Image</th>
						<th>Product</th>
						<th>Price</th>
						<th>Remove</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, index) in cart" :key="item.id">
						<td>
							<img :src="item.image" alt="Product Image" class="cart-img" />
						</td>
						<td>{{ item.name }}</td>
						<td>${{ item.price }}</td>
						<td>
							<button class="btn btn-danger btn-sm remove-btn" @click="removeItem(index)">
								❌ Remove
							</button>
						</td>
					</tr>
				</tbody>
			</table>

			<p class="total-price">Total: ${{ totalPrice }}</p>
			<button class="btn btn-success checkout-btn" @click="checkout">Proceed to Checkout</button>
		</div>
	</div>
</template>

<script>
import { computed, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { cartStore } from "@/stores/cartStore.js";

export default {
	setup() {
		const cart = computed(() => cartStore.cart);
		const router = useRouter();

		const removeItem = async (index) => {
			console.log("Remove button clicked for index:", index);
			await cartStore.removeFromCart(index);
		};

		const totalPrice = computed(() => {
			return cart.value.reduce((sum, item) => sum + item.price, 0).toFixed(2);
		});

		const checkout = async () => {
			await cartStore.clearCart(); 
			router.push("/success"); 
		};

		onMounted(() => {
			cartStore.loadCart();
		});

		watch(cart, (newCart) => {
			console.log("Cart updated:", newCart);
		});

		return { cart, removeItem, totalPrice, checkout };
	},
};
</script>



<style scoped="">
	/* 🎨 Background and container styling */
	.cart-container {
	background: #f8f9fa; 
	border-radius: 12px;
	padding: 20px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	margin-top: 80px;
	}

	/* ✨ Title Styling */
	.title {
	font-size: 28px;
	font-weight: bold;
	color: #343a40;
	}

	/* 🚀 Empty cart message */
	.empty-cart {
	text-align: center;
	font-size: 18px;
	color: #6c757d;
	}

	/* 🛒 Table Styling */
	.cart-table {
	width: 100%;
	border-collapse: separate;
	border-spacing: 0 10px;
	background: white;
	border-radius: 10px;
	overflow: hidden;
	}

	.cart-table th {
	background: #343a40;
	color: white;
	padding: 10px;
	text-align: center;
	}

	.cart-table td {
	padding: 12px;
	text-align: center;
	vertical-align: middle;
	}

	/* 🖼️ Product Image */
	.cart-img {
	width: 60px;
	height: 60px;
	border-radius: 8px;
	object-fit: cover;
	}

	/* ❌ Remove Button */
	.remove-btn {
	background: #dc3545;
	color: white;
	border-radius: 6px;
	transition: all 0.3s ease;
	}

	.remove-btn:hover {
	background: #c82333;
	transform: scale(1.05);
	}

	/* 💰 Total Price */
	.total-price {
	font-size: 20px;
	font-weight: bold;
	text-align: right;
	margin-top: 15px;
	color: #28a745;
	}

	/* ✅ Checkout Button */
	.checkout-btn {
	display: block;
	width: 100%;
	padding: 12px;
	font-size: 18px;
	border-radius: 8px;
	background: linear-gradient(45deg, #28a745, #218838);
	color: white;
	transition: all 0.3s ease;
	}

	.checkout-btn:hover {
	background: linear-gradient(45deg, #218838, #1e7e34);
	transform: scale(1.05);
	}
</style>
