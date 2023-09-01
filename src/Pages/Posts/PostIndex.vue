<script setup>
import axios from 'axios'
import { ref } from 'vue'

const PostList = ref(null)

getPostList()
async function getPostList() {
    const URL = 'https://basic-blog.teamrabbil.com/api/post-newest'
    const res = await axios.get(URL)
    if (res.status === 200) {
        PostList.value = res.data
    }
}
</script>
<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-4 mb-2" v-for="(item, id) in PostList" :key="id">
                <div class="card" style="width: 18rem;">
                    <img :src="item['img']" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ item['title'] }}</h5>
                        <p class="card-text">
                            {{ item['short'] }}
                        </p>
                        <!-- <a href="#" class="btn btn-primary">Read More</a> -->
                        <RouterLink to="/post-details" class="btn btn-primary">Read More</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

