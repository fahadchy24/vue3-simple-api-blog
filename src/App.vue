<script setup>

import axios from 'axios';
import { ref } from 'vue';

const CategoryList = ref(null)

getPostCategories()
async function getPostCategories() {
  const URL = 'https://basic-blog.teamrabbil.com/api/post-categories'
  const res = await axios.get(URL)
  if (res.status === 200) {
    CategoryList.value = res.data
  }

}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">MR BLOG</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse me-4" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li v-for="item in CategoryList" class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="row">
    </div>
  </div>
</template>

<style scoped></style>
