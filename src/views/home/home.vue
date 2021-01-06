<template>
  <div class="home">
    <nav-bar class="home-nav">
      购物街
    </nav-bar>
    <home-swiper :list="banners" />

    <recommend :list="recommends"/>
    
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import Recommend from './childComps/Recommend'

import { getHomeMultidata } from 'network/home'

export default {
  async created () {
    let data = await getHomeMultidata();
    this.banners = data.data.banner.list;
    this.recommends = data.data.recommend.list;
  },
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommend
  }
}
</script>

    Recommend
<style>
.home-nav {
  color: white;
  font-weight: bold;
  background-color: var(--color-tint);
}
.home{
  background-color: #eee;
}
</style>