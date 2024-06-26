<template>
  <div class="back-btn">

  </div>
</template>

<script>
export default {
  name: "BackButton"
}
</script>

<style lang='scss'>

.router-back {
  text-decoration: none!important;
}
.back-btn {
  position: relative;
  padding: 9px 0 9px 28px;
  font-weight: 500;
  width: fit-content;
  cursor: pointer;
  font-size: 14px;
  line-height: 24px;
  text-transform: none;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  color: #32404E;

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: calc(50% - 11px);
    width: 18px;
    height: 18px;
    transform: rotate(180deg);
    background-image: url("~@/assets/images/dark-arrow.svg");
    background-size: contain;
    background-repeat: no-repeat;
    transition: all .3s ease-in-out;
  }
}
.back-btn:hover:after {
  left: -5px;
  transition: all .3s ease-in-out;
}
</style>
