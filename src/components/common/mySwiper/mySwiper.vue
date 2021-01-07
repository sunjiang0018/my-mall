<template>
  <div class="my-swiper">
    <slot></slot>

    <div class="indicator">
      <slot name="indicator">
        <div
          :class="{active : currentIndex - 1 === index}"
          v-for="(item,index) in slideCount "
          :key="index"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mySwiper',
  data () {
    return {
      slideCount: 4,
      currentIndex: 1
    }
  }
}
</script>

<style>
.my-swiper {
  height: 300px;
  position: relative;
}
.indicator {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
}

.indicator div {
  width: 8px;
  height: 8px;
  margin: 0 5px;
  border-radius: 4px;
  background-color: #fff;
}
.indicator div.active {
  background-color: rgba(212, 62, 46, 1);
}
</style>
