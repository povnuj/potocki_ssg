<template>
  <div>
    <NavigationBarDark />
    <slot />
    <!-- <nuxt /> -->
    <!-- <TheFooter /> -->
  </div>
</template>
<script>
import "../assets/stylesheets/global.scss"

</script>

<style>
html {
  scroll-behavior: smooth;
}
@font-face {
  font-family: 'Ermilov';
  src: local('Ermilov'), url(@/assets/fonts/Ermilov.otf) format("truetype");
  font-display: swap;
}

@font-face {
  font-family: 'Pitcrew';
  src: local('Pitcrew'), url(@/assets/fonts/Pitcrew-Regular.ttf) format("truetype");
  font-display: swap;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transition: opacity .8s ease;
}


</style>


