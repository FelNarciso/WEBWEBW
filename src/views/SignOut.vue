<script setup>
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const router = useRouter();

onMounted(() => {
  router.push("/"); // Redirect to home after logging out
});
</script>
