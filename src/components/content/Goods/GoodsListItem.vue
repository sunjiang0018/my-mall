<template>
  <div class="goods-list-item">
    <img :src="data.show.img">
    <p class="title">{{data.title}}</p>
    <span class="price">{{data.price}}</span>
    <span class="favorites">{{data.cfav}}</span>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style>
.goods-list-item {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 48%;
}
.goods-list-item img{
  width: 100%;
}
.goods-list-item .favorites::before {
  content: '';
  position: absolute;
  width: 14px;
  height: 14px;
  left: -15px;
  top: 1px;
  background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
}

.goods-list-item .favorites {
  position: relative;
  margin-left: 15px;
}
</style>
