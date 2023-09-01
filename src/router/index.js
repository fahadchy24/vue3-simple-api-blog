import { createRouter, createWebHashHistory } from "vue-router"
import PostDetails from '../Pages/Posts/PostDetails.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/post-details',
            name: 'postDetails',
            component: PostDetails
        }
    ]
})

export default router