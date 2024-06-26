<template>
    <h1> {{ val.title}}</h1>
    <img :src="val.url" :alt="val.title" style="max-width: 300px;">
    <h2>{{val.price}}</h2>
</template>
<script setup>
const dataFetch = await $fetch('https://coffee-culture-3341b-default-rtdb.firebaseio.com/Products.json')

const route = useRoute();
const val = {
    title: dataFetch[0].name,
    price: dataFetch[0].price,
    url: dataFetch[0].url,
};
definePageMeta({
  prerender: true,
  title: 'Some Page',
  ogTitle: 'My Amazing Site',
})
useSeoMeta({
  title: () => val.title,
  ogTitle: () => val.title + 'ssdss',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://assets-global.website-files.com/658aa4775c8768ba42215cd2/660421c94eae48c1878d06d8_2_545202429576716370821.png',
  twitterCard: 'summary_large_image',
})
// useServerSeoMeta({
//     ogTitle:  val.title,
//     title: val.title,
//     description: val.price,
//     ogDescription: val.price,
//     ogImage: val.url,
//     ogImageUrl: val.url,
//     twitterCard: val.price,
//     twitterTitle: val.price,
//     twitterDescription: val.price,
//     twitterImage: val.url
//   });
//console.log(route.query.ser);
</script>

