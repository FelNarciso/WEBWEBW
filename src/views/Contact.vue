<template>
	<div class="contact-page">
		<div class="contact-container">
			<h1 class="contact-title">Contact Us</h1>
			<p class="contact-subtitle">Reach out to us for inquiries and support.</p>

			<div class="contact-info">
				<p>
					<strong>Email:</strong> felnarciso@mymail.mapua.edu.ph
				</p>
				<p>
					<strong>Phone:</strong> 09213827123
				</p>
			</div>

			<form class="contact-form">
				<div class="form-group">
					<label for="name">Name</label>
					<input type="text" id="name" name="name" placeholder="Your name" required="" />
				</div>

				<div class="form-group">
					<label for="email">Email</label>
					<input type="email" id="email" name="email" placeholder="Your email" required="" />
				</div>

				<div class="form-group">
					<label for="message">Message</label>
					<textarea id="message" name="message" placeholder="Your message" rows="5" required=""></textarea>
				</div>

				<button type="submit" class="submit-button">Send Message</button>
			</form>

			<div class="social-links">
				<a href="#" class="social-link">LinkedIn</a>
				<a href="#" class="social-link">Twitter</a>
				<a href="#" class="social-link">Instagram</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	name: "Contact",
	};
</script>

<style scoped="">
	.contact-page {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background-color: #f5f5f5;
	padding: 20px;
	}

	.contact-container {
	max-width: 600px;
	width: 100%;
	background-color: #ffffff;
	padding: 40px;
	border-radius: 10px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	}

	.contact-title {
	font-size: 2.5rem;
	color: #333333;
	margin-bottom: 10px;
	text-align: center;
	}

	.contact-subtitle {
	font-size: 1.1rem;
	color: #666666;
	text-align: center;
	margin-bottom: 30px;
	}

	.contact-info {
	margin-bottom: 30px;
	text-align: center;
	}

	.contact-info p {
	font-size: 1rem;
	color: #444444;
	margin: 5px 0;
	}

	.contact-form {
	display: flex;
	flex-direction: column;
	}

	.form-group {
	margin-bottom: 20px;
	}

	.form-group label {
	font-size: 1rem;
	color: #333333;
	margin-bottom: 5px;
	display: block;
	}

	.form-group input,
	.form-group textarea {
	width: 100%;
	padding: 10px;
	font-size: 1rem;
	border: 1px solid #cccccc;
	border-radius: 5px;
	background-color: #f9f9f9;
	color: #333333;
	}

	.form-group textarea {
	resize: vertical;
	}

	.submit-button {
	padding: 12px 20px;
	font-size: 1rem;
	color: #ffffff;
	background-color: #333333;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;
	}

	.submit-button:hover {
	background-color: #555555;
	}

	.social-links {
	display: flex;
	justify-content: center;
	margin-top: 30px;
	}

	.social-link {
	margin: 0 10px;
	font-size: 1rem;
	color: #333333;
	text-decoration: none;
	transition: color 0.3s ease;
	}

	.social-link:hover {
	color: #555555;
	}
</style>