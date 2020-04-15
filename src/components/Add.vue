<template>
  <div>
    <h3>当前最新的count值为:{{ $store.state.count }}</h3>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 3,
      msg1: 2
    }
  },
  created () {},
  methods: {
    add () {
      this.$store.commit('addM', { a1: this.msg, b1: this.msg1 })
    }
  }
}
</script>

<style lang="less" scoped></style>
