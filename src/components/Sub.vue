<template>
  <div>
      <h3>当前最新的count值为:{{$store.state.count}}=={{count}}</h3>
      <button>-1</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {

    }
  },
  created () {

  },
  methods: {

  },
  computed: {
    ...mapState(['count'])
  }
}
</script>

<style lang="less" scoped>
</style>
