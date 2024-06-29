<template>

</template>
<script setup>

import { ref, watchEffect } from 'vue'
import { useRoute, useFetch } from 'nuxt/app';
//const { t, locale } = useI18n();

const route = useRoute()
const type = ref(route.query.type)
const id = ref(route.query.id)
let seoVal = {};
///546546sdsd1
const dataFetch = await $fetch(`https://wordslearning-255d7-default-rtdb.firebaseio.com/testblog/${route.params.id}.json`)
//const dataFetch = await response.json();
console.log("resp",dataFetch);
const val = {
    title: dataFetch.name,
    price: dataFetch.id,
    url: dataFetch.img,
};
definePageMeta({
  layout: 'dark',
  
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

