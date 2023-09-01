<script setup>
import axios from 'axios'
import { ref } from 'vue'

const postDetails = ref([])

getPostDetails()
async function getPostDetails() {
    const URL = 'https://basic-blog.teamrabbil.com/api/post-details/53'
    const res = await axios.get(URL)
    if (res.status === 200) {
        postDetails.value = res.data
    }
}
</script>
<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-12">
                <div v-for="item in postDetails">
                    <img class="d-block mb-4 img-fluid" :src="item['img']" alt="">
                    <h1 class="fw-bold ms-auto">{{ item['title'] }}</h1>
                    <div class="col-lg-12 mx-auto">
                        <p class="my-4">
                            {{ item['content'] }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
