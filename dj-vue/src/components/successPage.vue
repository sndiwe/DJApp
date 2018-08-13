<template>
  <div>
    <img src="../assets/ndiweLogo.png" style="width:50%"><br><br>
    <h1>{{ msg }}</h1>
    <div class="box has-text-centered">
      <a class="button is-info" @click="clearLog()">Done</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'successPage',
  data () {
    return {
      msg: 'Log Saved Successfully!'
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
