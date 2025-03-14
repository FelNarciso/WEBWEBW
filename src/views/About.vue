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

    html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden; 
    overflow-y: auto; 
}



	/* Page Layout */
    .about-container {
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    min-height: 100vh; 
    padding-top: 20px; 
    box-sizing: border-box;
} 


	/* Content Styling */
	.content {
	display: flex;
	max-width: 1300px; 
	width: 95%;
	background: #ffffff;
	padding: 35px;
	border-radius: 12px;
	box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
	box-sizing: border-box;
	}

	/* Text Section */
	.text-section {
	flex: 1;
	padding-right: 40px; 
	}

	.text-section h1 {
	font-size: 32px; 
	margin-bottom: 12px;
	color: #222;
	font-weight: 600;
	}

	.text-section .intro {
	font-size: 17px;
	margin-bottom: 18px;
	color: #444;
	line-height: 1.7;
	}

	.text-section h2 {
	font-size: 20px; 
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
	margin: 8px 0;
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
	width: 100%; 
	max-width: 450px; 
	max-height: 450px; 
	height: auto; 
	border-radius: 12px;
	box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
	object-fit: cover; 
	}

	/* Responsive Design */
    @media (max-width: 768px) {
	   .about-container {
	       padding: 15px; 
	   }

	   .content {
	       flex-direction: column;
	       padding: 25px; 
	   }

	   .text-section {
	       padding-right: 0;
	       margin-bottom: 20px;
	   }

	   .image-section img {
	       max-width: 100%; 
	       max-height: 300px; 
	   }
    }
    
@media (max-width: 479px) {
    .about-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start; 
        justify-content: flex-start;
        min-height: auto; 
        padding-top: 30px; 
    }

    .content {
        flex-direction: column;
        padding: 15px;
        width: 100%;
    }

    .text-section {
        padding-right: 0;
        margin-bottom: 15px;
        text-align: center; 
    }

    .text-section h1 {
        font-size: 28px;
        margin-top: 10px; 
        padding-top: 20px;
    }

    .image-section img {
        max-width: 100%;
        max-height: 250px;
        object-fit: cover;
    }

    html, body {
        overflow-x: hidden;
        overflow-y: auto; 
    }
}
</style>
