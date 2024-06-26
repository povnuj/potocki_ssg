<template>
    <h1>Welcome to blog</h1>
    <ul>
      <li v-for="(data, i) in dataFetch" :key="i">
        <NuxtLink :to="'/blog/' + data.name">{{data.name}}</NuxtLink> 
        <h2></h2>
        <h3></h3>
      </li>
    </ul>
</template>

<script setup>
const dataFetch = await $fetch('https://coffee-culture-3341b-default-rtdb.firebaseio.com/Products.json')
useSeoMeta({
  title: dataFetch[0].name || 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://assets-global.website-files.com/658aa4775c8768ba42215cd2/660421c94eae48c1878d06d8_2_545202429576716370821.png',
  twitterCard: 'summary_large_image',
})
//console.log(dataFetch)
</script>
<script>

definePageMeta({
  layout: 'dark',
  name: 'blog'
});
</script>