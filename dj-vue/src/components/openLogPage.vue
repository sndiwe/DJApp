<template>
  <div>
    <!-- <img src="../assets/ndiweLogo.png" style="width:50%"> -->
    <h1>{{ msg }}</h1>
    <div class="box has-text-centered">
      <a class="button is-info" @click="clearLog()">Back</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'openLogPage',
  data () {
    return {
      msg: 'Open Log Page'
    }
  },
  methods: {
    clearLog: function () {
      this.$router.push({
        name: 'homePage',
        path: '/'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: bold;
}
</style>
