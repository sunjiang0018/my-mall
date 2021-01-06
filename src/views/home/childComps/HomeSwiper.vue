<template>
  <div>
    <swiper>
      <swiper-item
        v-for="(item, index) in list"
        :key="index"
      >
        <a :href="item.link">
          <img :src="item.image">
        </a>

      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index'

export default {
  name: 'HomeSwiper',
  props: {
    list: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style>
</style>