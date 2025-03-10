import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Product from '@/views/Product.vue';
import Contact from '@/views/Contact.vue';
import Cart from '@/views/Cart.vue';
import SignIn from '@/views/SignIn.vue';
import SignUp from '@/views/SignUp.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/product', name: 'Product', component: Product },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/signin', name: 'SignIn', component: SignIn },
  { path: '/signup', name: 'SignUp', component: SignUp }
];


const router = createRouter({
  history: createWebHistory('/WEBWEBW/'), // Directly specify the base URL
  routes,
});

export default router;