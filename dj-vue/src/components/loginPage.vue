<template>
  <div>
    <img src="../assets/ndiweLogo.png" style="width:50%"><br><br>
    <template>
    <section>
        <b-field label="User Email"
            type="is-danger"
            message="email address of user">
            <b-input type="email"
                value="djndiwe@gmail.com"
                maxlength="30">
            </b-input>
        </b-field>
    </section>
    </template>
    <div class="box has-text-centered">
      <b-icon pack="fas" icon="user" size="is-small">
            </b-icon>
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
