<template>
    <div class="btn-download"> <slot /></div>
</template>


<style lang='scss' scoped>

.btn-download {
  position: relative;
  padding: 9px 50px 9px 12px;
  background-color: transparent;
  color: #32404E;
  font-weight: 700;
  width: 100%;
  max-width: fit-content;
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
    background-image: url("@/public/images/icons/arrow-down.svg");
    background-size: contain;
    background-repeat: no-repeat;
    transition: all .3s ease-in-out;
    
  }
}
.btn-download:hover:after {
  top: 16px;
  transition: all .3s ease-in-out;
}
</style>
