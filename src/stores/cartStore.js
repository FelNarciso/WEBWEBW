import { reactive } from "vue";
import { auth } from "@/firebase"; // Import Firebase auth
import { doc, setDoc, getDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from "@/firebase"; // Import Firestore instance
import { onAuthStateChanged } from "firebase/auth";

export const cartStore = reactive({
  cart: [],

  // ✅ Function must be inside an object, no syntax errors
  async addToCart(product) {
    const user = auth.currentUser;
    if (!user) {
      alert("Please log in to add products to your cart.");
      return;
    }

    const exists = this.cart.some((item) => item.id === product.id);
    if (!exists) {
      this.cart.push(product);
      await this.saveCart(user.uid); // Save to Firestore
      alert("✅ Added to cart successfully!");
    } else {
      alert("❌ This product is already in your cart!");
    }
  },

  // ✅ Fixed `removeFromCart` function
  async removeFromCart(index) {
    console.log("Removing item at index:", index, "Cart before:", this.cart);
    const user = auth.currentUser;
    if (!user) {
      alert("Please log in to manage your cart.");
      return;
    }

    // ✅ Make sure Vue detects the change by assigning a new array
    this.cart = [...this.cart.slice(0, index), ...this.cart.slice(index + 1)];
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

  clearCart() {
    this.cart = [];
  },
});

// Ensure cart loads when auth state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    cartStore.loadCart();
  } else {
    cartStore.clearCart();
  }
});
