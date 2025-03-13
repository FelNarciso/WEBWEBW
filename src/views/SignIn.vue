<template>
	<div class="auth-page">
		<div class="auth-container">
			<h2>Sign In</h2>

			<!-- Error and Success Message Area -->
			<div v-if="errorMessage || successMessage" class="message-container">
				<p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
				<p v-if="successMessage" class="success-message">{{ successMessage }}</p>
			</div>

			<form @submit.prevent="login">
				<div class="form-group">
					<label for="email">Email</label>
					<input type="email" id="email" v-model="email" required="" />
				</div>

				<div class="form-group">
					<label for="password">Password</label>
					<input type="password" id="password" v-model="password" required="" />
				</div>

				<button type="submit">Sign In</button>
			</form>

			<p class="auth-link">
				Don't have an account? <router-link to="/signup">Sign up here</router-link>
			</p>
		</div>
	</div>
</template>

<script>
	import { ref } from "vue";
	import { auth } from "@/firebase";
	import { signInWithEmailAndPassword } from "firebase/auth";
	import { useRouter } from "vue-router";
	import { cartStore } from "@/stores/cartStore.js";

	export default {
	setup() {
	const email = ref("");
	const password = ref("");
	const errorMessage = ref("");
	const successMessage = ref("");
	const router = useRouter();

	const login = async () => {
	errorMessage.value = "";
	successMessage.value = "";

	try {
	await signInWithEmailAndPassword(auth, email.value, password.value);
	await cartStore.loadCart();
	successMessage.value = "✅ Login successful!";
	setTimeout(() => router.push("/"), 2000);
	} catch (error) {
	if (error.code === "auth/invalid-credential") {
	errorMessage.value = "❌ Incorrect email or password. Please try again.";
	} else if (error.code === "auth/user-not-found") {
	errorMessage.value = "❌ No account found with this email.";
	} else if (error.code === "auth/wrong-password") {
	errorMessage.value = "❌ Incorrect password. Please try again.";
	} else {
	errorMessage.value = "⚠️ Error: " + error.message;
	}
	}
	};

	return { email, password, login, errorMessage, successMessage };
	}
	};
</script>


<style scoped="">
	/* ORIGINAL DESIGN PRESERVED */
	.auth-page {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background-image: url('@/views/img/loginUI.png');
	background-size: cover;
	background-position: center;
	}

	.auth-container {
	max-width: 400px;
	width: 90%;
	padding: 20px;
	background: rgba(255, 255, 255, 0.9);
	border-radius: 10px;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
	text-align: center;
	font-family: 'Poppins', sans-serif; /* Restoring Original Font */
	}

	.message-container {
	min-height: 30px;
	margin-bottom: 10px;
	}

	.error-message {
	color: #d32f2f;
	background: #ffebee;
	border: 1px solid #d32f2f;
	padding: 8px;
	border-radius: 5px;
	}

	.success-message {
	color: #2e7d32;
	background: #e8f5e9;
	border: 1px solid #2e7d32;
	padding: 8px;
	border-radius: 5px;
	}

	.form-group {
	text-align: left;
	margin-bottom: 15px;
	}

	label {
	display: block;
	font-weight: bold;
	margin-bottom: 5px;
	color: #000;
	}

	input {
	width: 100%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	background: #fff;
	}

	button {
	width: 100%;
	padding: 10px;
	background: #000;
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: 0.3s;
	}

	button:hover {
	background: #333;
	}

	.auth-link {
	margin-top: 15px;
	font-size: 14px;
	color: #666;
	}

	.auth-link a {
	color: #000;
	font-weight: bold;
	text-decoration: none;
	transition: 0.3s;
	}

	.auth-link a:hover {
	text-decoration: underline;
	color: #333;
	}
</style>
