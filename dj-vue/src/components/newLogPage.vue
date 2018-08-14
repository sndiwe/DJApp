<template>
  <div>
    <template>
    <section>
        <b-field label="Name of Service">
            <b-input value="" placeholder="Ex: Salvation Army"></b-input>
        </b-field>
        <b-field label="Location"
            type="is-success"
            message="Where did you do it at?">
            <b-input value="" maxlength="30"></b-input>
        </b-field>

        <b-field label="Hours">
        <b-timepicker
            placeholder="Click to select..."
            :min-time="minTime"
            :max-time="maxTime">
        </b-timepicker>
    </b-field>
        <b-field label="Service Type">
            <b-select placeholder="Select a Service">
                <option value="1">Organization</option>
                <option value="2">Voluntary</option>
            </b-select>
        </b-field>
    </section>
    </template><br><br>
    <div class="has-text-centered bgColor">
        <a class="button is-success" @click="submitLog()">Submit</a>
      <a class="button is-danger" @click="clearLog()">Back</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newLogPage',
  data () {
    const min = new Date()
    min.setHours(0)
    min.setMinutes(0)
    const max = new Date()
    max.setHours(24)
    max.setMinutes()
    return {
      msg: 'New Log Page',
      minTime: min,
      maxTime: max
    }
  },
  methods: {
    clearLog: function () {
      this.$router.push({
        name: 'homePage',
        path: '/homePage'
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
h1 {
  font-weight: bold;
}
</style>
