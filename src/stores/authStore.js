import { reactive } from "vue";

export const authStore = reactive({
  isLoggedIn: !!localStorage.getItem("user"), // Check if a user is logged in

  login(user) {
    localStorage.setItem("user", JSON.stringify(user));
    this.isLoggedIn = true;
  },

  logout() {
    localStorage.removeItem("user");
    this.isLoggedIn = false;
  }
});
