<template>
    <div class="btn-white"> <slot /></div>
</template>


<style lang='scss' scoped>
.btn-white {
  position: relative;
  padding: 9px 50px 9px 12px;
  background-color: transparent;
  color: #32404E;
  font-weight: 700;
  width: 100%;
  max-width: 328px;
  font-size: 18px;
  line-height: 30px;
  border: 1px solid #32404e;
  cursor: pointer;

  &:after {
    content: '';
    display: block;
    position: absolute;
    right: 12px;
    top: calc(50% - 11px);
    width: 26px;
    height: 22px;
    background-image: url("@/public/images/dark-arrow.svg");
    background-size: contain;
    background-repeat: no-repeat;
    transition: all .3s ease-in-out;
    
  }
}
.btn-white:hover:after {
  right: 5px;
  transition: all .3s ease-in-out;
}
</style>
