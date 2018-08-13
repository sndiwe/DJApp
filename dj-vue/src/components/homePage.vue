<template>
  <div>
    <img src="../assets/ndiweLogo.png" style="width:50%">
    <h1>{{ msg }}</h1>
    <div class="box has-text-centered">
      <a class="button is-info" @click="createLog()">New Log</a>
      <a class="button is-danger" @click="openLog()">Existing Log</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  data () {
    return {
      msg: "Welcome to DJ's App"
    }
  },
  methods: {
    createLog: function () {
      this.$router.push({
        name: 'newLogPage',
        path: '/newLog'
      })
    },
    openLog: function () {
      this.$router.push({
        name: 'openLogPage',
        path: '/openLog'
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
