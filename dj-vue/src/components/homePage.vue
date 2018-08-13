<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>What Do You Need To Do?</h2>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  data () {
    return {
      msg: "Welcome to DJ's App"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
