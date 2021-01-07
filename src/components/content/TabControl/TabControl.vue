<template>
  <div class="tab-control">
    <div
      class="tab-item"
      v-for="(item, index) in titles"
      :class="{active:index === currentIndex}"
      :key="index"
      @click="tabClick(index)"
    ><span>{{item}}</span></div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data () {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    tabClick (index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style>
.tab-control {
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  padding: 10px;
}
.tab-item {
  padding-bottom: 8px;
}
.tab-item.active {
  color: var(--color-high-text);
  border-bottom: 1px solid var(--color-tint);
}
</style>
