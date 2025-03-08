<template>
	<div class="container text-center mt-5">
		<h2 class="mb-4">Shopping Cart</h2>

		<div v-if="cart.length === 0">
			<p>Your cart is empty. Start adding some products!</p>
			<router-link to="/" class="btn btn-primary">Continue Shopping</router-link>
		</div>

		<div v-else="">
			<table class="table table-bordered">
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
							<img :src="item.image" alt="Product Image" width="50" />
						</td>
						<td>{{ item.name }}</td>
						<td>${{ item.price }}</td>
						<td>
							<button class="btn btn-danger" @click="removeItem(index)">Remove</button>
						</td>
					</tr>
				</tbody>
			</table>

			<p class="text-right font-weight-bold">Total: ${{ totalPrice }}</p>
			<button class="btn btn-success">Proceed to Checkout</button>
		</div>
	</div>
</template>

<script>
	import { computed, onMounted } from "vue";
	import { cartStore } from "@/stores/cartStore.js";

	export default {
	setup() {
	const cart = cartStore.cart;

	const removeItem = (index) => {
	cartStore.removeFromCart(index);
	};

	const totalPrice = computed(() => {
	return cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
	});

	onMounted(() => {
	cartStore.loadCart();
	});

	return { cart, removeItem, totalPrice };
	}
	};
</script>

