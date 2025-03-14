import { reactive } from "vue";
import { auth } from "@/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const cartStore = reactive({
  cart: [],

  async addToCart(product) {
    const user = auth.currentUser;
    if (!user) {
      alert("Please log in to add products to your cart.");
      return;
    }

    if (!product?.id) {
      alert("❌ Invalid product!");
      return;
    }

    const exists = this.cart.some((item) => item.id === product.id);
    if (!exists) {
      this.cart = [...this.cart, product]; // Ensures Vue detects changes
      await this.saveCart(user.uid);
      alert("✅ Added to cart successfully!");
    } else {
      alert("❌ This product is already in your cart!");
    }
  },

  async removeFromCart(index) {
    console.log("Removing item at index:", index, "Cart before:", this.cart);
    const user = auth.currentUser;
    if (!user) {
      alert("Please log in to manage your cart.");
      return;
    }

    if (index < 0 || index >= this.cart.length) {
      alert("❌ Invalid index!");
      return;
    }

    this.cart = this.cart.filter((_, i) => i !== index);
    console.log("Cart after:", this.cart);
    await this.saveCart(user.uid);
  },

  async saveCart(userId) {
    const userCartRef = doc(db, "carts", userId);
    await setDoc(userCartRef, { items: this.cart }, { merge: true });
  },

  async loadCart() {
    const user = auth.currentUser;
    if (!user) {
      this.cart = [];
      return;
    }

    try {
      const userCartRef = doc(db, "carts", user.uid);
      const cartSnapshot = await getDoc(userCartRef);

      if (cartSnapshot.exists() && cartSnapshot.data().items) {
        this.cart = cartSnapshot.data().items;
      } else {
        this.cart = [];
        await setDoc(userCartRef, { items: [] }, { merge: true });
      }
    } catch (error) {
      console.error("Error loading cart:", error);
    }
  },

  async clearCart() {
    this.cart = [];
    const user = auth.currentUser;
    if (user) {
      await this.saveCart(user.uid);
    }
  },
});

// Prevent multiple loadCart() calls
let cartLoaded = false;
onAuthStateChanged(auth, async (user) => {
  if (user && !cartLoaded) {
    await cartStore.loadCart();
    cartLoaded = true;
  } else {
    cartStore.clearCart();
    cartLoaded = false;
  }
});