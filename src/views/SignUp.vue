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
          <div class="password-wrapper">
            <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" required />
            <button type="button" class="toggle-password" @click="togglePassword">👁</button>
          </div>
        </div>
        <button type="submit" :disabled="loading">{{ loading ? 'Signing Up...' : 'Sign Up' }}</button>
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
    const showPassword = ref(false);
    const loading = ref(false);
    const router = useRouter();

    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };

    const signUp = async () => {
      loading.value = true;
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        alert("Sign up successful!");
        router.push("/signin");
      } catch (error) {
        alert(error.message);
      } finally {
        loading.value = false;
      }
    };

    return { email, password, showPassword, togglePassword, signUp, loading };
  }
};
</script>

<style scoped>
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
}

.password-wrapper {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
}
</style>