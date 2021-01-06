<template>
  <div>
    <nav-bar class="home-nav">
      购物街
    </nav-bar>

    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image">
        </a>
        
      </swiper-item>
        </swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { getHomeMultidata } from 'network/home'
import {Swiper, SwiperItem} from 'components/common/swiper/index'

export default {
  async created () {
    let data = await getHomeMultidata();
    this.banners = data.data.banner.list;
    this.recommnds = data.data.recommend.list;
  },
  data () {
    return {
      banners: [],
      recommnds: []
    }
  },
  components: {
    NavBar,
    Swiper,
    SwiperItem
  }
}
</script>

<style>
.home-nav {
  color: white;
  font-weight: bold;
  background-color: var(--color-tint);
}
</style>