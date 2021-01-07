<template>
  <div class="home">
    <nav-bar class="home-nav">
      购物街
    </nav-bar>
    <home-swiper :list="banners" />

    <recommend :list="recommends" />

    <feature-view />

    <tab-control :titles="['流行', '新款', '精选']" @tabClick='changeTab'/>

    <goods-list :list='this.goods[this.curretnType].list' />

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import Recommend from './childComps/Recommend'
import FeatureView from './childComps/FeatureView'

import TabControl from 'components/content/TabControl/TabControl'
import GoodsList from 'components/content/Goods/GoodsList'

import { getHomeMultidata, getHomeGoods } from 'network/home'

export default {
  created () {
    this.getMultidata()

    this.getGoods('pop')
    this.getGoods('new')
    this.getGoods('sell')
  },
  data () {
    return {
      banners: [],
      recommends: [],
      curretnType: 'pop',
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    FeatureView,
    TabControl,
    GoodsList
  },
  methods: {
    getMultidata () {
      getHomeMultidata()
        .then((result) => {
          this.banners = result.data.banner.list
          this.recommends = result.data.recommend.list
        })
    },
    getGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(result => {
        this.goods[type].list.push(...result.data.list)
        this.goods[type].page = page
      })
    },

    changeTab (index) {
      let type
      switch (index) {
        case 0:
          type = 'pop'
          break
        case 1:
          type = 'new'
          break
        case 2:
          type = 'sell'
          break
      }
      this.curretnType = type
    }
  }
}
</script>

<style>
.home-nav {
  color: white;
  font-weight: bold;
  background-color: var(--color-tint);
}
.home {
  background-color: #eee;
}
</style>
