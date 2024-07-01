<template>
    <div class="btn-details"> <slot /></div>
</template>



<style lang='scss' scoped>

.btn-details {
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  padding: 0 50px 0 12px;
  background-color: #32404e00;
  color: #123F69;
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
    background-image: url("@/public/images/icons/arrow-blue.svg");
    background-size: contain;
    background-repeat: no-repeat;
    transition: all .3s ease-in-out;
  }
}
.btn-details:hover:after {
  right: 5px;
  transition: all .3s ease-in-out;
}
</style>
