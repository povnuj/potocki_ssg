<template>

  <h1>Home</h1>
  <NuxtLink to="/blog">BLog</NuxtLink>
  <!-- <div>{{ count }}</div> -->
</template>

<script setup>
useSeoMeta({
  title: 'My Amazing Site2',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://assets-global.website-files.com/658aa4775c8768ba42215cd2/660421c94eae48c1878d06d8_2_545202429576716370821.png',
  twitterCard: 'summary_large_image',
})
</script>
<script>


definePageMeta({
  layout: 'dark',
  name: "home"
  
})
// export default {
//   name: "Main",
//   layout: "dark",
//   //  components: {
//   //   Button,
//   // },
  
//    data () {

//   },



// };
</script>


