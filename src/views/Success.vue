<template>
  <div class="container success-container text-center">
    <h2>✅ Transaction Successful!</h2>
    <p>Thank you for your purchase.</p>
    <div class="button-group">
      <router-link to="/product" class="btn btn-primary">Continue Shopping</router-link>
      <router-link to="/" class="btn btn-secondary">Go to Homepage</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessPage",
};
</script>

<style scoped>
.success-container {
  margin-top: 50px;
}

/* Add spacing between buttons */
.button-group {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}
</style>