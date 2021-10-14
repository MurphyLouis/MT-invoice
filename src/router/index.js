import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
<<<<<<< HEAD
import InvoiceView from "../views/InvoiceView.vue"
=======
>>>>>>> b23f3e5dc70d12857bde67920fe0874a9b71f2ac

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
<<<<<<< HEAD
  {
    path: "/invoice/:invoiceId",
    name: "Invoice",
    component: InvoiceView,
  },
=======
>>>>>>> b23f3e5dc70d12857bde67920fe0874a9b71f2ac
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
