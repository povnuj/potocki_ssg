<template>
    <div >
    <h1>Welcome to blog</h1>
    <ul style="margin-top: 100px">
      <li v-for="(data) in arr" :key="data.id">
        <NuxtLink :to="'/blog/' + data.id">{{data.name}}</NuxtLink> 
      </li>
    </ul>
  </div>
</template>

<script setup>
const dataFetch = await $fetch('https://wordslearning-255d7-default-rtdb.firebaseio.com/testblog.json')
let arr = [];
async function getSeo(url){
  try {
    const response = await fetch(url);
    const data = await response.json();
    data.data
    for(let key in data.data){
      arr.push({id: key, name: data.data[key].name, img: data.data[key].img})
    }
    
  } catch (error) {
    console.error('Error fetching seo events:', error);
  }
}
getSeo('https://wordslearning-255d7-default-rtdb.firebaseio.com/testblog.json');

//console.log(dataFetch)
</script>
<script>

definePageMeta({
  layout: 'dark',
  name: 'blog'
});
</script>