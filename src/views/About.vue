<template>
	<div class="about-container">
		<div class="content">
			<!-- Left: Text Section -->
			<div class="text-section">
				<h1>About Us</h1>
				<p class="intro">
					We are committed to providing high-quality products at affordable prices, ensuring an excellent shopping experience. Discover a variety of items in our garage sale, from everyday essentials to rare finds.
				</p>

				<section>
					<h2>Our Mission</h2>
					<p>To sell honestly and provide valuable, affordable products to our customers.</p>
				</section>

				<section>
					<h2>Core Values</h2>
					<ul>
						<li>✔️ Integrity & Trust</li>
						<li>✔️ Customer First</li>
						<li>✔️ Quality & Affordability</li>
						<li>✔️ Community & Support</li>
					</ul>
				</section>

				<section>
					<h2>Why Choose Us?</h2>
					<p>We prioritize customer satisfaction, offering great deals, reliable service, and a hassle-free shopping experience.</p>
				</section>
			</div>

			<!-- Right: Image Section (Increased Size) -->
			<div class="image-section">
				<img src="@/views/img/About.jpg" alt="About Us" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	name: "About",
	};
</script>

<style scoped="">
	/* Import Poppins Font */
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

	/* Reset margin and padding */
	body, html {
	margin: 0;
	padding: 0;
	overflow: hidden; /* Remove scrollbar */
	}

	/* Page Layout */
	.about-container {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh; /* Full height without scrolling */
	background: #f9f9f9; /* Soft background color */
	font-family: 'Poppins', sans-serif;
	padding: 25px; /* Slightly increased padding */
	box-sizing: border-box; /* Include padding in height calculation */
	}

	/* Content Styling */
	.content {
	display: flex;
	max-width: 1300px; /* Increased max-width */
	width: 95%;
	background: #ffffff;
	padding: 35px; /* Increased padding */
	border-radius: 12px;
	box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
	box-sizing: border-box; /* Include padding in width calculation */
	}

	/* Text Section */
	.text-section {
	flex: 1;
	padding-right: 40px; /* Increased padding */
	}

	.text-section h1 {
	font-size: 32px; /* Increased font size */
	margin-bottom: 12px;
	color: #222;
	font-weight: 600;
	}

	.text-section .intro {
	font-size: 17px; /* Slightly bigger */
	margin-bottom: 18px;
	color: #444;
	line-height: 1.7;
	}

	.text-section h2 {
	font-size: 20px; /* Increased */
	margin-top: 18px;
	color: #333;
	font-weight: 600;
	}

	.text-section ul {
	list-style: none;
	padding: 0;
	}

	.text-section li {
	font-size: 16px;
	margin: 8px 0; /* Adjusted spacing */
	color: #555;
	}

	/* Image Section (Larger Image) */
	.image-section {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	}

	.image-section img {
	width: 100%; /* Responsive width */
	max-width: 450px; /* Increased size */
	max-height: 450px; /* Increased height */
	height: auto; /* Maintain aspect ratio */
	border-radius: 12px;
	box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
	object-fit: cover; /* Ensure the image covers the area without distortion */
	}

	/* Responsive Design */
	@media (max-width: 768px) {
	.about-container {
	padding: 15px; /* Adjust padding for mobile */
	}

	.content {
	flex-direction: column;
	padding: 25px; /* Adjust padding for mobile */
	}

	.text-section {
	padding-right: 0;
	margin-bottom: 20px;
	}

	.image-section img {
	max-width: 100%; /* Full width on mobile */
	max-height: 300px; /* Adjusted height for mobile */
	}
	}
</style>
