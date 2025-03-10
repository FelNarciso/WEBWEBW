<template>
  <div class="auth-page">
    <div class="auth-container">
      <h2>Sign Up</h2>
      <form @submit.prevent="signUp">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>

      <p class="auth-link">
        Already have an account? <router-link to="/signin">Sign in here</router-link>
      </p>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const signUp = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        alert("Sign up successful!");
        router.push("/signin");
      } catch (error) {
        alert(error.message);
      }
    };

    return { email, password, signUp };
  }
};
</script>

<style scoped>
.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('@/views/img/loginUI.png'); /* Background image */
  background-size: cover;
  background-position: center;
}

.auth-container {
  max-width: 400px;
  width: 90%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9); /* Semi-transparent white background */
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.auth-image {
  width: 100%;
  max-width: 150px; /* Adjust size as needed */
  margin-bottom: 20px;
  border-radius: 10px;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
  color: #000;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff; /* White background for inputs */
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