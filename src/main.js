import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap'
import App from './App.vue'
import PostDetails from './Pages/Posts/PostDetails.vue'
import PostIndexVue from './Pages/Posts/PostIndex.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'postIndex',
            component: PostIndexVue
        },
        {
            path: '/post-details',
            name: 'postDetails',
            component: PostDetails
        }
    ]
})

createApp(App)
.use(router)
.mount('#app')
