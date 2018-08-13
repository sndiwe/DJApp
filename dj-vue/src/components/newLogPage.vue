<template>
  <div>
    <img src="../assets/ndiweLogo.png" style="width:50%"><br><br>
    <!-- <h1>{{ msg }}</h1> -->
    <template>
    <section>
        <b-field label="Name">
            <b-input value="Destiny J. Ndiwe"></b-input>
        </b-field>

        <b-field label="User Email"
            type="is-danger"
            message="email address of user">
            <b-input type="email"
                value="djndiwe@gmail.com"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Location"
            type="is-success"
            message="Where did you do it at?">
            <b-input value="" maxlength="30"></b-input>
        </b-field>

        <b-field label="Time Spent"
            type="is-primary"
            message="How many hours where you there?">
            <b-input value="" maxlength="3"></b-input>
        </b-field>

        <b-field label="Service Type">
            <b-select placeholder="Select a Service">
                <option value="1">Volunteer</option>
                <option value="2">Mandantory</option>
            </b-select>
        </b-field>
    </section>
    </template>
    <div class="box has-text-centered">
        <a class="button is-success" @click="submitLog()">Submit</a>
      <a class="button is-danger" @click="clearLog()">Back</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newLogPage',
  data () {
    return {
      msg: 'New Log Page'
    }
  },
  methods: {
    clearLog: function () {
      this.$router.push({
        name: 'homePage',
        path: '/'
      })
    },
    submitLog: function () {
      this.$router.push({
        name: 'successPage',
        path: '/successPage'
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
