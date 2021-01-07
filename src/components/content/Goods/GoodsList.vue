<template>
  <div class="goods-list">
    <goods-list-item
      v-for="item in list"
      :data='item'
      :key='item.show.img'
    />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style>
.goods-list {
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>
