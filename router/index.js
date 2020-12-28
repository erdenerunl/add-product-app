import { createRouter , createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ProductCart from '@/views/ProductCart.vue';





const routes = [
    {
        path : "/",
        component : HomePage
    },
    {
        path : "/product-cart",
        component : ProductCart
    }
]


const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;