<template>
  <div class="btn-vue"></div>
</template>

<script>
export default {
  name: "Button"
}
</script>

<style lang='scss'>
.btn-vue {
  position: relative;
  padding: 9px 50px 9px 12px;
  background-color: #32404E;
  color:#fff;
  font-weight: 700;
  width: fit-content;
  font-size: 18px;
  line-height: 30px;
  cursor: pointer;

  &:after {
    content: '';
    display: block;
    position: absolute;
    right: 12px;
    top: calc(50% - 11px);
    width: 26px;
    height: 22px;
    background-image: url("~@/assets/images/white-arrow.svg");
    background-size: contain;
    background-repeat: no-repeat;
    transition: all .3s ease-in-out;
  }
}
.btn-vue:hover:after {
  right: 5px;
  transition: all .3s ease-in-out;
}
</style>
