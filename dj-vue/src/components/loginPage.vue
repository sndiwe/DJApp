<template>
  <div>
    <img src="../assets/ndiweLogo.png" style="width:50%"><br><br>
    <div class="field">
      <label class="label">Username</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-success" type="text" placeholder="Text input" value="bulma">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
      <p class="help is-success">This username is available</p>
    </div>
    <div class="box has-text-centered">
      <a class="button is-info" @click="clearLog()">Done</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginPage',
  data () {
    return {
      msg: 'Login Page!'
    }
  },
  methods: {
    clearLog: function () {
      this.$router.push({
        name: 'homePage',
        path: '/homePage'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: bold;
}
</style>
