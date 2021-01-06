<template>
  <div class="recommend">
    <div
      class="recommend-item"
      v-for="(item, index) in list"
      :key="index"
    >
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    list: {
      type: Array,
      default () {
        return [];
      }
    }
  }
}
</script>

<style>
.recommend {
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 1px rgb(179, 179, 179);
}
.recommend-item {
  flex-shrink: 1;
  padding: 5px;
}
.recommend-item img {
  width: 100%;
  padding: 5px;
  margin-bottom: 5px;
}
</style>